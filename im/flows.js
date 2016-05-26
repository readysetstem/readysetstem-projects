//{filename: "INTRODUCTION_TO_THE_PROJECTS_GUIDE.html", title: "INTRODUCTION TO THE PROJECTS GUIDE", concept: true, uid: "", section: "INTRO"},
//{filename: "INTRO_TO_FUNCTIONS.html",           title: "INTRO TO FUNCTIONS",                    concept: true, uid: ""},
//{filename: "FUNCTION_INPUTS.html",              title: "FUNCTION INPUTS",                       concept: true, uid: ""},
//{filename: "FUNCTION_OUTPUTS.html",             title: "FUNCTION OUTPUTS",                      concept: true, uid: ""},
var pg_flows =  {};

pg_flows.Main = [
    {filename: "INTRODUCTION_TO_THE_IDE.html",      title: "LET'S GET STARTED",             concept: true, uid: "", section: "YOUR FIRST CIRCUIT"},
    {filename: "HELLO,_WORLD.html",                 title: "HELLO, WORLD!",                 concept: false, uid: "hello"},
    {filename: "INTRO_TO_ELECTRONICS.html",         title: "INTRO TO ELECTRONICS",          concept: true, uid: "electronics"},
    {filename: "YOUR_FIRST_CIRCUIT.html",           title: "YOUR FIRST CIRCUIT",            concept: false, uid: "yfc"},
    {filename: "YOUR_FIRST_SCHEMATIC.html",         title: "BREADBOARDS & SCHEMATICS",      concept: true, uid: "breadboard"},
    {filename: "BREADBOARD_FIRST_CIRCUIT.html",     title: "USING THE BREADBOARD",          concept: false, uid: "yfcbreadboard"},
    {filename: "MAKING_ELECTRICITY.html",           title: "MAKING ELECTRICITY",            concept: true, uid: "sources"},
    {filename: "RASPBERRY_PI_POWER.html",           title: "POWER UP",                      concept: false, uid: "rpipower"},
    {filename: "INTRODUCING_BUTTONS.html",          title: "HOW BUTTONS WORK",              concept: true, uid: ""},
    {filename: "INTRODUCING_BUTTONS_PROJECT.html",  title: "ADDING A BUTTON",               concept: false, uid: ""},
    {filename: "CIRCUIT_THEORY.html",               title: "CIRCUIT THEORY",                concept: true, uid: "circuits"},
    {filename: "TWEAKING_YOUR_CIRCUIT.html",        title: "TWEAKING YOUR CIRCUIT",         concept: false, uid: "tweak"},
    {filename: "SERIES_PARALLEL.html",              title: "SERIES & PARALLEL",             concept: true, uid: ""},
    {filename: "SERIES_PARALLEL_PROJECT.html",      title: "SERIES & PARALLEL",             concept: false, uid: ""},

    {filename: "GPIO_CONCEPT.html",                 title: "GPIO OUTPUTS",                  concept: true, uid: "gpioc", section: "INPUT/OUTPUT"},
    {filename: "GENERAL_PURPOSE_INPUT-OUTPUT.html", title: "OUTPUTS (LIGHTING LEDS)",       concept: false, uid: "gpoutp"},
    {filename: "INPUT_CONCEPT.html",                title: "GPIO INPUTS",                   concept: true, uid: "gpioi"},
    {filename: "USING_INPUTS.html",                 title: "USING INPUTS",                  concept: false, uid: ""},
    {filename: "VARIABLES_-_ASSIGNMENTS.html",      title: "VARIABLES",                     concept: true, uid: "vars"},
    {filename: "IF_-_ELSE_STATEMENTS.html",         title: "IF STATEMENTS",                 concept: true, uid: "if"},
    {filename: "USING_BUTTONS_WITH_GPIO.html",      title: "INPUTS (READING BUTTONS)",      concept: false, uid: "button"},
    {filename: "BUILT-IN_FUNCTIONS.html",           title: "FUNCTIONS & MODULES",           concept: true, uid: ""},
    {filename: "FLASHLIGHT.html",                   title: "BUILDING A FLASHLIGHT",         concept: false, uid: "flashlight"},
    {filename: "WHILE_LOOPS.html",                  title: "WHILE LOOPS",                   concept: true, uid: "while"},
    {filename: "FLASHLIGHT2.html",                  title: "FLASHING FLASHLIGHT",           concept: false, uid: ""},
    {filename: "LISTS.html",                        title: "LISTS",                         concept: true, uid: "lists"},
    {filename: "FOR_LOOPS.html",                    title: "FOR LOOPS",                     concept: true, uid: ""},
    {filename: "MANY_BUTTONS.html",                 title: "READING MULTIPLE BUTTONS",      concept: false, uid: "manybuttons"},

    {filename: "SOUNDS_-_SPEAKER.html",             title: "HOW SPEAKERS WORK",             concept: true, uid: "", section: "SPEAKER"},
    {filename: "SOUNDS_-_SPEAKER_PROJECT.html",     title: "PLAYING NOTES",                 concept: false, uid: "playingnotes"},
    {filename: "NOTES_FUNCTION.html",               title: "MORE NOTES",                    concept: true, uid: "notes"},
    {filename: "MARY_HAD_A_LITTLE_LAMB.html",       title: "PLAYING A SONG",                concept: false, uid: "mary"},
    {filename: "SIMPLE_PIANO.html",                 title: "BUILD A SIMPLE PIANO",          concept: false, uid: "simplepiano"},
    {filename: "SOUNDS_FUNCTION.html",              title: "OTHER SOUNDS",                  concept: true, uid: ""},
    {filename: "BETTER_PIANO.html",                 title: "BUILD A BETTER PIANO",          concept: false, uid: "betterpiano"},
    {filename: "WALKABLE_PIANO.html",               title: "BUILD A WALKABLE PIANO",        concept: false, uid: ""},
    {filename: "STRING_THEORY.html",                title: "STRING THEORY",                 concept: true, uid: "strings"},
    {filename: "TEXT_TO_SPEECH.html",               title: "TEXT TO SPEECH (TTS)",          concept: true, uid: "tts"},
    {filename: "TEXT_TO_SPEECH_PROJECT.html",       title: "TTS SOUND MACHINE",             concept: false, uid: ""},

    {filename: "SIMON_PSEUDO.html",                 title: "SIMON SAYS 0",                  concept: true, uid: "simon0", section: "SIMON SAYS"},
    {filename: "SIMON_1.html",                      title: "SIMON SAYS 1",                  concept: false, uid: "simon1"},
    {filename: "CALCULATIONS.html",                 title: "CALCULATIONS",                  concept: true, uid: "calc"},
    {filename: "SIMON_2.html",                      title: "SIMON SAYS 2",                  concept: false, uid: "simon2"},
    {filename: "SIMON_3.html",                      title: "SIMON SAYS 3",                  concept: false, uid: "simon3"},
    {filename: "RANDOM.html",                       title: "RANDOM FUNCTIONS",              concept: true, uid: ""},
    {filename: "SIMON_4.html",                      title: "SIMON SAYS 4",                  concept: false, uid: "simon4"},
    {filename: "BUTTON_FUNCTIONS.html",             title: "MORE BUTTON FUNCTIONS",         concept: true, uid: "buttonfuncs"},
    {filename: "SIMON_5.html",                      title: "SIMON SAYS 5",                  concept: false, uid: "simon5"},
    {filename: "SIMON_6.html",                      title: "SIMON SAYS 6",                  concept: false, uid: "simon6"},
    {filename: "SIMON_7.html",                      title: "SIMON SAYS 7",                  concept: false, uid: "simon7"},

    {filename: "LED_MATRIX.html",                   title: "THE LED MATRIX",                concept: true, uid: "ledc", section: "LED MATRIX"},
    {filename: "LED_MATRIX_PROJECT.html",           title: "USING THE LED MATRIX",          concept: false, uid: "ledp"},
    {filename: "GAME_LOOPS.html",                   title: "GAME LOOPS",                    concept: true, uid: "gameloops"},
    {filename: "BOUNCING_BALL_1.html",              title: "BOUNCING BALL 1",               concept: false, uid: ""},
    {filename: "FRAMEBUFFERS.html",                 title: "FRAMEBUFFER",                   concept: true, uid: "fb"},
    {filename: "BOUNCING_BALL_2.html",              title: "BOUNCING BALL 2",               concept: false, uid: ""},
    {filename: "PULSATING_RECT.html",               title: "PULSATING RECTANGLE",           concept: false, uid: ""},
    {filename: "SPRITES.html",                      title: "SPRITES",                       concept: true, uid: ""},
    {filename: "RUNNING_MAN.html",                  title: "RUNNING MAN",                   concept: false, uid: ""},
    {filename: "TEXT.html",                         title: "TEXT",                          concept: true, uid: ""},
    {filename: "SCROLLING_TEXT.html",               title: "SCROLLING TEXT",                concept: false, uid: ""},

    {filename: "ACCELEROMETER.html",                title: "THE ACCELEROMETER",             concept: true, uid: "accel", section: "ACCELEROMETER"},
    {filename: "ACCELEROMETER_PROJECT.html",        title: "USING THE ACCELEROMETER",       concept: false, uid: ""},
    {filename: "BALANCING_DOT1.html",               title: "BALANCING DOT 1",               concept: false, uid: ""},
    {filename: "BALANCING_DOT2.html",               title: "BALANCING DOT 2",               concept: false, uid: ""},
    {filename: "SHAKE1.html",                       title: "SHAKE ME 1",                    concept: false, uid: ""},
    {filename: "SHAKE2.html",                       title: "SHAKE ME 2",                    concept: false, uid: ""},
    {filename: "SHAKE3.html",                       title: "SHAKE ME 3",                    concept: false, uid: ""},
    {filename: "SECRET_KNOCK1.html",                title: "SECRET KNOCK 1",                concept: false, uid: ""},
    {filename: "SECRET_KNOCK2.html",                title: "SECRET KNOCK 2",                concept: false, uid: ""},
    {filename: "SECRET_KNOCK3.html",                title: "SECRET KNOCK 3",                concept: false, uid: ""},

    {filename: "SPACE_INVADERS_PSEUDO.html",        title: "ALIEN INTRUDERS 0",              concept: true, uid: "", section: "ALIEN INTRUDERS"},
    {filename: "SPACE_INVADERS_1.html",             title: "ALIEN INTRUDERS 1",              concept: false, uid: "ai1"},
    {filename: "SPACE_INVADERS_2.html",             title: "ALIEN INTRUDERS 2",              concept: false, uid: ""},
    {filename: "SPACE_INVADERS_3.html",             title: "ALIEN INTRUDERS 3",              concept: false, uid: ""},
    {filename: "SPACE_INVADERS_4.html",             title: "ALIEN INTRUDERS 4",              concept: false, uid: ""},
    {filename: "SPACE_INVADERS_5.html",             title: "ALIEN INTRUDERS 5",              concept: false, uid: ""},
    {filename: "SPACE_INVADERS_6.html",             title: "ALIEN INTRUDERS 6",              concept: false, uid: ""},
    {filename: "SPACE_INVADERS_7.html",             title: "ALIEN INTRUDERS 7",              concept: false, uid: ""},
    {filename: "SPACE_INVADERS_8.html",             title: "ALIEN INTRUDERS 8",              concept: false, uid: ""},
    {filename: "SPACE_INVADERS_9.html",             title: "ALIEN INTRUDERS 9",              concept: false, uid: ""},

    {filename: "MINECRAFT_STARTING.html",    		title: "MINECRAFT - GETTING STARTED",     concept: false, uid: "", section: "MINECRAFT CONTROLLER"},
    {filename: "MINECRAFT_PROGRAMMING.html",        title: "MINECRAFT - PROGRAMMING",         concept: true, uid: ""},
    {filename: "MINECRAFT_HELLO_MINECRAFT.html",    title: "MINECRAFT - HELLO MINECRAFT",     concept: false, uid: ""},
    {filename: "MINECRAFT_KEYSTROKES.html",         title: "MINECRAFT - CHARACTER CONTROL",   concept: true, uid: ""},
    {filename: "MINECRAFT_CONTROLLER1.html",        title: "MINECRAFT - CONTROLLER 1",        concept: false, uid: ""},
    {filename: "DICTIONARIES.html",                 title: "MINECRAFT - DICTIONARIES",        concept: true, uid: ""},
    {filename: "MINECRAFT_CONTROLLER2.html",        title: "MINECRAFT - CONTROLLER 2",        concept: false, uid: ""},
    {filename: "MINECRAFT_CONTROLLER3.html",        title: "MINECRAFT - CONTROLLER 3",        concept: false, uid: ""},
    {filename: "MINECRAFT_VECTORS_BLOCKS.html",     title: "MINECRAFT - VECTORS & BLOCKS",    concept: true, uid: ""},
    {filename: "MINECRAFT_SHOVEL1.html",            title: "MINECRAFT - SHOVEL 1",            concept: false, uid: ""},
    {filename: "MINECRAFT_VECTORS.html",            title: "MINECRAFT - VECTORS",             concept: true, uid: ""},
    {filename: "MINECRAFT_SHOVEL2.html",            title: "MINECRAFT - SHOVEL 2",            concept: false, uid: ""},

    {filename: "MINECRAFT_LOCATION1.html",          title: "MINECRAFT - LOCATION 1",          concept: false, uid: "", section: "MINECRAFT EXAMPLES"},
    {filename: "MINECRAFT_LOCATION2.html",          title: "MINECRAFT - LOCATION 2",          concept: false, uid: ""},
    {filename: "MINECRAFT_DIRECTION.html",          title: "MINECRAFT - DIRECTION",           concept: true, uid: ""},
    {filename: "MINECRAFT_METAL_DETECTOR1.html",    title: "MINECRAFT - METAL DETECTOR 1",    concept: false, uid: ""},
    {filename: "MINECRAFT_METAL_DETECTOR2.html",    title: "MINECRAFT - METAL DETECTOR 2",    concept: false, uid: ""},
    {filename: "MINECRAFT_ANIMATION1.html",         title: "MINECRAFT - ANIMATION 1",         concept: false, uid: ""},
    {filename: "MINECRAFT_ANIMATION2.html",         title: "MINECRAFT - ANIMATION 2",         concept: false, uid: ""},
    {filename: "MINECRAFT_BOMB1.html",              title: "MINECRAFT - BOMB 1",              concept: false, uid: ""},
    {filename: "MINECRAFT_BOMB2.html",              title: "MINECRAFT - BOMB 2",              concept: false, uid: ""},
    {filename: "MINECRAFT_BRIDGE1.html",            title: "MINECRAFT - BRIDGE 1",            concept: false, uid: ""},
    {filename: "MINECRAFT_BRIDGE2.html",            title: "MINECRAFT - BRIDGE 2",            concept: false, uid: ""},

    {filename: "MINECRAFT_HOUSE1.html",             title: "MINECRAFT - HOUSE 1",             concept: false, uid: "", section: "MINECRAFT ADVANCED"},
    {filename: "MINECRAFT_HOUSE2.html",             title: "MINECRAFT - HOUSE 2",             concept: false, uid: ""},
    {filename: "MINECRAFT_HOUSE3.html",             title: "MINECRAFT - HOUSE 3",             concept: false, uid: ""},
    {filename: "MINECRAFT_PAINT1.html",             title: "MINECRAFT - PAINT 1",             concept: false, uid: ""},
    {filename: "MINECRAFT_PAINT2.html",             title: "MINECRAFT - PAINT 2",             concept: false, uid: ""},
    {filename: "MINECRAFT_PAINT3.html",             title: "MINECRAFT - PAINT 3",             concept: false, uid: ""},
    {filename: "MINECRAFT_PAINT4.html",             title: "MINECRAFT - PAINT 4",             concept: false, uid: ""},
    {filename: "MINECRAFT_BURIED_TREASURE1.html",   title: "MINECRAFT - BURIED TREASURE 1",   concept: false, uid: ""},
    {filename: "MINECRAFT_BURIED_TREASURE2.html",   title: "MINECRAFT - BURIED TREASURE 2",   concept: false, uid: ""},
    {filename: "MINECRAFT_BURIED_TREASURE3.html",   title: "MINECRAFT - BURIED TREASURE 3",   concept: false, uid: ""},
    {filename: "MINECRAFT_BURIED_TREASURE4.html",   title: "MINECRAFT - BURIED TREASURE 4",   concept: false, uid: ""},

    {filename: "CONGRATS.html",                     title: "CONGRATULATIONS!",                concept: true, uid: "", section: "APPENDIX"},
    {filename: "MORE_RESOURCES.html",               title: "MORE RESOURCES",                  concept: true, uid: ""},
    {filename: "HANDLING_ERRORS.html",              title: "HANDLING ERRORS",                 concept: true, uid: "errors"},
    {filename: "TROUBLESHOOTING.html",              title: "TROUBLESHOOTING",                 concept: true, uid: ""},
    {filename: "GLOSSARY.html",                     title: "GLOSSARY",                        concept: true, uid: ""},
    ];

