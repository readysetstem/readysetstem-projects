F2=120
LEFT=123
RIGHT=124
UP=126
DOWN=125
ENTER=36

SLEEP=0.2

function key() {
    sleep $SLEEP
    osascript -e 'tell application "System Events" to keystroke "'$1'"'
}
 
function ctrlkey() {
    sleep $SLEEP
    osascript -e 'tell application "System Events" to keystroke "'$1'" using {control down}'
}

function cmdkey() {
    sleep $SLEEP
    osascript -e 'tell application "System Events" to keystroke "'$1'" using {command down}'
}

function shiftcmdkey() {
    sleep $SLEEP
    osascript -e \
        'tell application "System Events" to keystroke "'$1'" using {command down, shift down}'
}

function keycode() {
    sleep $SLEEP
    osascript -e 'tell application "System Events" to key code '$1
}
 
function ctrlkeycode() {
    sleep $SLEEP
    osascript -e 'tell application "System Events" to key code '$1' using {control down}'
}

function raise_lower_breadboard() {
    # 
    # select breadboard
    #

    # CTRL-F2 menu
    ctrlkeycode $F2
    # (P)art menu (requires down arrow)
    key p
    keycode $DOWN
    # (F)ind Part in sketch
    key f
    keycode $ENTER
    key breadboard1
    keycode $ENTER

    #
    # Raise or lower (']' or '[' character)
    #
    sleep 0.5
    if [ $1 == 'top' ]; then
        shiftcmdkey ']'
    else
        shiftcmdkey '['
    fi

    #
    # Deselect breadboard
    #
    # CTRL-F2 menu
    ctrlkeycode $F2
    # (E)dit menu
    key e
    keycode $DOWN
    key s
    keycode $DOWN
    keycode $ENTER

    #
    # Export PNG
    #

    # CTRL-F2 menu
    ctrlkeycode $F2
    # (F)ile menu (requires down arrow)
    key f
    keycode $DOWN
    # (E)xport
    key e
    # Right, right to get to Export PNG
    keycode $RIGHT
    keycode $RIGHT
    keycode $ENTER
    sleep 1 
    keycode $RIGHT
    keycode $LEFT
    keycode $LEFT
    key $1
    key _
    keycode $ENTER
}

if [ $# -eq 1 ]; then
    BOT_CROP=0
    LEFT_CROP=0
elif [ $# -eq 3 ]; then
    BOT_CROP=$(($2*10))
    LEFT_CROP=$(($3*17))
else
    echo "Usage: $0 <FZZ> [ <bot_crop> <left_crop> ]"
fi
FILE="$1"
EXT="${FILE##*.}"
BASE="${FILE%.*}"

open "$FILE"
sleep 16

rm -f "$BASE"_*.png
raise_lower_breadboard top
raise_lower_breadboard bot
sleep 2
cmdkey w
sleep 2
key d

./bb_stitch "$BASE"
convert "$BASE"_bb.png -crop 100%x+$LEFT_CROP-$BOT_CROP -quality 30 -sharpen 0x0.7 "$BASE"_bb.jpg
rm -f "$BASE"_*.png
sleep 2

mv "$BASE"_bb.jpg ../../im/img
