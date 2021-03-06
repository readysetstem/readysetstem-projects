#
# Requires:
#	- go (golang.org) (required on host to build/run, required on target to run)
#		- To add Go support on the Pi, in Raspbian:
#			sudo apt-get install golang
#	- Mercurial (hg) required by "go get":
#		- http://mercurial.selenic.com/wiki/Download, for Mac:
#			sudo port install mercurial
#	- Rebuild in linux/arm support for cross-compiling to the Pi.  On the Mac, this works:
#		cd /usr/local/go/src
#		sudo GOOS=linux GOARCH=arm ./make.bash
#		
PYTHON=python3
SETUP=$(PYTHON) setup.py
PIP=pip-3.2

PI=pi@raspberrypi
RUNONPI=ssh $(SSHFLAGS) -q -t $(PI) "cd rsinstall;"

# Create version name
DUMMY:=$(shell scripts/version.sh)

# Name must be generated the same way as setup.py
NAME:=$(shell cat NAME)
VER:=$(shell cat VERSION)

BUILDDIR=projects.build
PROJECTSDIR=im

# Final targets
PRJ_TAR:=$(abspath $(NAME)-$(VER).tar.gz)

TARGETS=
TARGETS+=$(PRJ_TAR)

# Default target
all: $(TARGETS)

#########################################################################
# Targets
#

PG=projectsguide_full
HOST=readysetstem
USER=readysetstem
pushpg:
	ssh $(USER)@$(HOST).com mkdir -p $(HOST).com/$(PG)
	scp -r im/* $(USER)@$(HOST).com:$(HOST).com/$(PG)
	@echo "####################################################################"
	@echo "### NOTE: you may want to also 'make pushpg' from $(HOST)-ide"
	@echo "####################################################################"

TIDY_TARGETS=$(wildcard im/*.html)
.PHONY: $(TIDY_TARGETS)
tidy: $(TIDY_TARGETS)
$(TIDY_TARGETS):
	@# First run of tidy will insert 'alt=""' text on images.  We run is
	@# separately so we can ignore its error.
	tidy -quiet --alt-text "" -m $@ >/dev/null 2>&1; exit 0

	$(eval TIDYOPTS=-w 80 -quiet --indent-spaces 1 --indent auto)
	@echo tidy $(TIDYOPTS) $@
	@tidy $(TIDYOPTS) -f /tmp/tidyerrors -m $@; \
		if [ $$? -gt 0 ]; then \
			sed 's/^/    /' /tmp/tidyerrors; \
			if [ $$? -gt 1 ]; then \
				exit $$?; \
			fi \
		fi

	@# tidy mucks with &mdash;.  Convert all mdash/ndash UTF-8 chars back to &mdash;
	gsed -i 's/\xe2\x80\x93/\&mdash;/' $@
	gsed -i 's/\xe2\x80\x94/\&mdash;/' $@

	@# Add extra line spacing before paragraphs
	gawk -i inplace '/<p>/{print ""}1' $@

	# Force opening <textarea> EOL
	@# (tidy doesn't do it, and this is needed for the following compile test)
	gsed -i 's/\(<textarea>\)\(..*\)/\1\n\2/' $@

	# Verify that code compiles without syntaxerrors
	@# To do so
	@#	1) extra code from textareas,
	@#	2) remove leading '*' if exists (we use that for highlight arrows in the PG),
	@#  3) use php to decode html entities
	@#  4) use python to test compile
	gawk '/<textarea>/{on=1;next}/<\/textarea>/{on=0;next}on' $@ | \
		sed 's/^\*//' | \
		php -r 'while(($$line=fgets(STDIN)) !== FALSE) echo html_entity_decode($$line, ENT_QUOTES|ENT_HTML401);' > .compile.py
	python3 -m py_compile .compile.py || (echo; echo $@; nl -ba .compile.py; exit 1)
	rm .compile.py

SPELL_TARGETS=$(addsuffix .spell,$(basename $(wildcard im/*.html)))
.PHONY: $(SPELL_TARGETS)
spell: $(SPELL_TARGETS)
$(SPELL_TARGETS):
	@$(eval TARGET=$(addsuffix .html,$(basename $@)))
	@ln -sf $(CURDIR)/dict.pws  ~/.aspell.en.pws
	@echo $(TARGET)
	@gawk '/<textarea[ >]/,/<\/textarea>/{next}1' $(TARGET) | \
		gawk 'BEGIN{RS="<span[^>]*class=[^>]*nospell[^>]*>"}{sub(".*</span>","")}1' | \
		gawk 'BEGIN{RS="<pre[ >]"}{sub(".*</pre>","")}1' | \
		gawk 'BEGIN{RS="<code>"}{sub(".*</code>","")}1' | \
		aspell list --mode html | \
		sort --ignore-case | uniq -i | \
		gsed 's/^/\t/'

upload:
	$(SETUP) sdist upload

register:
	$(SETUP) register

targets:
	@echo $(TARGETS)

uninstall:
	$(RUNONPI) sudo $(PIP) uninstall -y $(NAME)

install:
	scp $(PRJ_TAR) $(PI):/tmp
	-$(RUNONPI) sudo $(PIP) uninstall -y $(NAME)
	$(RUNONPI) sudo $(PIP) install /tmp/$(notdir $(PRJ_TAR))

clean:
	rm NAME VERSION
	rm -f *.tar.gz
	rm -rf *.egg-info
	rm -rf __pycache__
	rm -rf dist
	rm -f $(TARGETS)
	rm -rf $(BUILDDIR)

.PHONY: $(BUILDDIR)
$(BUILDDIR):
	@if [ -z "$(FORCE)" -a `git clean -n $(PROJECTSDIR) | wc -l` -gt 0 ]; then \
		echo "Refusing to build.  The $(PROJECTSDIR) directory is not git clean"; \
		echo "To force: make FORCE=1"; \
		exit 1; \
	fi
	@#
	@# Weirdo race condition.  Sometimes this rm fails with "Directory not
	@# empty".  The file in there is a Mac .DS_Store.  So we retry if it fails.
	@#
	if ! rm -rf $@; then \
		sleep 1 ; \
		rm -rf $@ ; \
	fi
	mkdir -p $@
	cp -r $(PROJECTSDIR)/* $@

$(PRJ_TAR): $(BUILDDIR) Makefile
	$(SETUP) sdist
	mv dist/$(notdir $@) $@
