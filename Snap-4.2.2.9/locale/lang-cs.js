/*

	lang-cs.js

	Czech translation for SNAP!

	written by Michal Moc

	Copyright (C) 2012 by Michal Moc

	This file is part of Snap!.

	Snap! is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation, either version 3 of
	the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.



    Note to Translators:
    --------------------
    At this stage of development, Snap! can be translated to any LTR language
    maintaining the current order of inputs (formal parameters in blocks).

    Translating Snap! is easy:


    1. Download

    Download the sources and extract them into a local folder on your
    computer:

        <http://snap.berkeley.edu/snapsource/snap.zip>

    Use the German translation file (named 'lang-de.js') as template for your
    own translations. Start with editing the original file, because that way
    you will be able to immediately check the results in your browsers while
    you're working on your translation (keep the local copy of snap.html open
    in your web browser, and refresh it as you progress with your
    translation).


    2. Edit

    Edit the translation file with a regular text editor, or with your
    favorite JavaScript editor.

    In the first non-commented line (the one right below this
    note) replace "de" with the two-letter ISO 639-1 code for your language,
    e.g.

        fr - French => SnapTranslator.dict.fr = {
        it - Italian => SnapTranslator.dict.it = {
        pl - Polish => SnapTranslator.dict.pl = {
        pt - Portuguese => SnapTranslator.dict.pt = {
        es - Spanish => SnapTranslator.dict.es = {
        el - Greek => => SnapTranslator.dict.el = {

    etc. (see <http://en.wikipedia.org/wiki/ISO_639-1>)


    3. Translate

    Then work through the dictionary, replacing the German strings against
    your translations. The dictionary is a straight-forward JavaScript ad-hoc
    object, for review purposes it should be formatted as follows:

        {
            'English string':
                'Translation string',
            'last key':
        }       'last value'

    and you only edit the indented value strings. Note that each key-value
    pair needs to be delimited by a comma, but that there shouldn't be a comma
    after the last pair (again, just overwrite the template file and you'll be
    fine).

    If something doesn't work, or if you're unsure about the formalities you
    should check your file with

        <http://JSLint.com>

    This will inform you about any missed commas etc.


    4. Accented characters

    Depending on which text editor and which file encoding you use you can
    directly enter special characters (e.g. Umlaut, accented characters) on
    your keyboard. However, I've noticed that some browsers may not display
    special characters correctly, even if other browsers do. So it's best to
    check your results in several browsers. If you want to be on the safe
    side, it's even better to escape these characters using Unicode.

        see: <http://0xcc.net/jsescape/>


    5. Block specs:

    At this time your translation of block specs will only work
    correctly, if the order of formal parameters and their types
    are unchanged. Placeholders for inputs (formal parameters) are
    indicated by a preceding % prefix and followed by a type
    abbreviation.

    For example:

        'say %s for %n secs'

    can currently not be changed into

        'say %n secs long %s'

    and still work as intended.

    Similarly

        'point towards %dst'

    cannot be changed into

        'point towards %cst'

    without breaking its functionality.


    6. Submit

    When you're done, rename the edited file by replacing the "de" part of the
    filename with the two-letter ISO 639-1 code for your language, e.g.

        fr - French => lang-fr.js
        it - Italian => lang-it.js
        pl - Polish => lang-pl.js
        pt - Portuguese => lang-pt.js
        es - Spanish => lang-es.js
        el - Greek => => lang-el.js

    and send it to me for inclusion in the official Snap! distribution.
    Once your translation has been included, Your name will the shown in the
    "Translators" tab in the "About Snap!" dialog box, and you will be able to
    directly launch a translated version of Snap! in your browser by appending

        lang:xx

    to the URL, xx representing your translations two-letter code.


    7. Known issues

    In some browsers accents or ornaments located in typographic ascenders
    above the cap height are currently (partially) cut-off.

    Enjoy!
    -Jens
*/

/*global SnapTranslator*/

SnapTranslator.dict.cs = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    ??, ??   \u00c4, \u00e4
    ??, ??   \u00d6, \u00f6
    ??, ??   \u00dc, \u00fc
    ??      \u00df
*/

    // translations meta information
    'language_name':
        '??esky', // the name as it should appear in the language menu
    'language_translator':
        'Michal Moc, Jan Tomsa', // your name for the Translators tab
    'translator_e-mail':
        'info@iguru.eu, jan.tomsa.1976@gmail.com', // optional
    'last_changed':
        '2015-11-16', // this, too, will appear in the Translators tab

    // GUI
    // control bar:
    'untitled':
        'Bez n??zvu',
    'development mode':
        'V??vojov?? m??d',

    // categories:
    'Motion':
        'Pohyb',
    'Looks':
        'Vzhled',
    'Sound':
        'Zvuk',
    'Pen':
        'Pero',
    'Control':
        'Ovl??d??n??',
    'Sensing':
        'Vn??m??n??',
    'Operators':
        'Oper??tory',
    'Variables':
        'Prom??nn??',
    'Lists':
        'Seznamy',
    'Other':
        'Ostatn??',

    // editor:
    'draggable':
        'p??etahovateln??',

    // tabs:
    'Scripts':
        'Skripty',
    'Costumes':
        'Kost??my',
    'Sounds':
        'Zvuky',

    // names:
    'Sprite':
        'Sprite',
    'Stage':
        'Sc??na',

    // rotation styles:
    'don\'t rotate':
        'neot????et',
    'can rotate':
        'lze oto??it',
    'only face left/right':
        'jen vlevo/vpravo',

    // new sprite button:
    'add a new sprite':
        'p??idat nov?? sprite',
    'add a new Turtle sprite':
        'p??idat nov?? sprite ??elvy',

    // tab help
    'costumes tab help':
        'Nahrajte obr??zek odjinud z webu\n'
            + 'nebo nahrajte soubor z Va??eho po????ta??e p??eta??en??m sem.',
    'import a sound from your computer\nby dragging it into here':
        'Nahrajte zvuk z Va??eho po????ta??e p??eta??en??m sem.',

    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // motion:
    'Stage selected:\nno motion primitives':
        'Vybran?? sc??na:'
            + '????dn?? pohybov?? bloky',

    'move %n steps':
        'posu?? se o %n krok??',
    'turn %clockwise %n degrees':
        'oto?? se o %clockwise %n stup????',
    'turn %counterclockwise %n degrees':
        'oto?? se o %counterclockwise %n stup????',
    'point in direction %dir':
        'zami?? sm??rem %dir',
    'point towards %dst':
        'zami?? k %dst',
    'go to x: %n y: %n':
        'jdi na pozici x: %n y: %n',
    'go to %dst':
        'jdi na %dst',
    'glide %n secs to x: %n y: %n':
        'plachti %n sekund na pozici x: %n y: %n',
    'change x by %n':
        'zm???? x o %n',
    'set x to %n':
        'nastav x na %n',
    'change y by %n':
        'zm???? y o %n',
    'set y to %n':
        'nastav y na %n',
    'if on edge, bounce':
        'pokud naraz???? na okraj, odsko??',
    'x position':
        'pozice x',
    'y position':
        'pozice y',
    'direction':
        'sm??r',

    // looks:
    'switch to costume %cst':
        'obl??kni kost??m %cst',
    'next costume':
        'dal???? kost??m',
    'costume #':
        'kost??m ????slo',
    'say %s for %n secs':
        'pov??dej %s p??????t??ch %n sekund',
    'say %s':
        'pov??dej %s',
    'think %s for %n secs':
        'pomysli si %s dal????ch %n sekund',
    'think %s':
        'pomysli si %s',
    'Hello!':
        'Ahoj!',
    'Hmm...':
        'Hmm...',
    'change %eff effect by %n':
        'zm???? efekt %eff o %n',
    'set %eff effect to %n':
        'nastav efekt %eff na %n',
    'clear graphic effects':
        'odstra?? grafick?? efekty',
    'change size by %n':
        'zm???? velikost o %n',
    'set size to %n %':
        'zm???? velikost na %n %',
    'size':
        'velikost',
    'show':
        'uka?? se',
    'hide':
        'schovej se',
    'go to front':
        'jdi do pop??ed??',
    'go back %n layers':
        'jdi do pozad?? o %n ??rovn??',
    'development mode \ndebugging primitives:':
        'v??vojov?? m??d \nlad??n?? primitiv',
    'console log %mult%s':
        'v??stup do konsole: %mult%s',
    'alert %mult%s':
        'Upozorn??n??: %mult%s',

    // sound:
    'play sound %snd':
        'hraj zvuk %snd',
    'play sound %snd until done':
        'hraj zvuk %snd a po??kej',
    'stop all sounds':
        'vypni v??echny zvuky',
    'rest for %n beats':
            'pauza %n dob(y)',
        'play note %n for %n beats':
            'zahraj t??n %n po %n dob(y)',
        'change tempo by %n':
            'zm???? tempo o %n',
        'set tempo to %n bpm':
            'nastav tempo na %n bpm.',
        'tempo':
            'tempo',

    // pen:
    'clear':
        'sma??',
    'pen down':
        'pero dol??',
    'pen up':
        'pero nahoru',
    'set pen color to %clr':
        'nastavit barvu pera na %clr',
    'change pen color by %n':
        'zm???? barvu pera o %n',
    'set pen color to %n':
        'nastav barvu pera na %n',
    'change pen shade by %n':
        'zm???? odst??n pera o %n',
    'set pen shade to %n':
        'nastav odst??n pera na %n',
    'change pen size by %n':
        'zm???? tlou????ku pera o %n',
    'set pen size to %n':
        'nastav tlou????ku pera na %n',
    'stamp':
        'raz??tko',

    // control:
    'when %greenflag clicked':
        'Po klepnut?? na %greenflag',
    'when %keyHat key pressed':
        'po stisku kl??vesy %keyHat',
    'when I am %interaction':
        'kdy?? %interaction',
    'clicked':
        'na m?? kliknou',
    'pressed':
        'm?? stisknou',
    'dropped':
        'm?? upust??',
    'mouse-entered':
        'na m?? najede my??',
    'mouse-departed':
        'ze m?? sjede my??',
    'when I receive %msgHat':
        'po p??ijet?? zpr??vy %msgHat',
    'broadcast %msg':
        'poslat v??em %msg',
    'broadcast %msg and wait':
        'poslat v??em %msg a ??ekat',
    'Message name':
        'n??zev zpr??vy',
    'message':
        'zpr??va',
    'any message':
        'jak??koli zpr??va',
    'wait %n secs':
        '??ekej %n sekund',
    'wait until %b':
        '??ekej dokud nenastane %b',
    'forever %c':
        'st??le opakuj %c',
    'repeat %n %c':
        'opakuj %n kr??t %c',
    'repeat until %b %c':
        'opakuj dokud nenastane %b %c',
    'if %b %c':
        'kdy?? %b %c',
    'if %b %c else %c':
        'kdy?? %b %c jinak %c',
    'report %s':
        'vr??tit %s',
    'stop %stopChoices':
        'stop %stopChoices',
    'all':
        'v??e',
    'this script':
        'tento skript',
    'this block':
        'tento blok',
    'stop %stopOthersChoices':
        'stop %stopOthersChoices',
    'run %cmdRing %inputs':
        'spus?? %cmdRing %inputs',
    'launch %cmdRing %inputs':
        'zah??jit %cmdRing %inputs',
    'call %repRing %inputs':
        'zavolat %repRing %inputs',
    'run %cmdRing w/continuation':
        'spustit %cmdRing s pokra??ov??n??m',
    'call %cmdRing w/continuation':
        'zavolat %cmdRing s pokra??ov??n??m',
    'warp %c':
        'obal %c',
    'when I start as a clone':
        'za????t po naklonov??n??',
    'create a clone of %cln':
        'vytvo??it klon %cln',
    'myself':
        'sama sebe',
    'delete this clone':
        'odstranit klon',
    'all but this script':
        'v??e krom?? tohoto skriptu',
    'other scripts in sprite':
        'ostatn?? skripty tohoto objektu',
    'pause all %pause':
        'zastavit v??e %pause',


    // sensing:
    'touching %col ?':
        'dot??k?? se %col ?',
    'touching %clr ?':
        'dot??k?? se barvy %clr ?',
    'color %clr is touching %clr ?':
        'barva %clr je na barv?? %clr ?',
    'ask %s and wait':
        'zeptej se %s a ??ekej',
    'what\'s your name?':
        'Jak se jmenuje???',
    'answer':
        'odpov????',
    'mouse x':
        'sou??adnice my??i x',
    'mouse y':
        'sou??adnice my??i y',
    'mouse down?':
        'stisknuto tla????tko my??i?',
    'key %key pressed?':
        'stisknuta kl??vesa %key ?',
    'distance to %dst':
        'vzd??lenost od %dst',
    'reset timer':
        'vynulovat stopky',
    'timer':
        'stopky',
    '%att of %spr':
        '%att z %spr',
    'http:// %s':
        'http:// %s',
    'turbo mode?':
        'turbo m??d?',
    'set turbo mode to %b':
        'nastavit turbo m??d na %b',
    'current %dates':
        'aktu??ln?? %dates',
            'year' : 'rok',
            'month' : 'm??s??c',
            'date' : 'datum',
            'day of week' : 'den v t??dnu',
            'hour' : 'hodina',
            'minute' : 'minuta',
            'second' : 'sekunda',
            'time in milliseconds' : '??as v milisekund??ch',

    'filtered for %clr':
        'filtrovan?? pro %clr',
    'stack size':
        'velikost z??sobn??ku',
    'frames':
        'sn??mky',

    // operators:
    '%n mod %n':
        '%n modulo %n',
    'round %n':
        'zaokrouhli %n',
    '%fun of %n':
        '%fun z %n',
    'pick random %n to %n':
        'zvol n??hodn?? ????slo od %n do %n',
    '%b and %b':
        '%b a %b',
    '%b or %b':
        '%b nebo %b',
    'not %b':
        'nen?? %b',
    'true':
        'pravda',
    'false':
        'nepravda',
    'join %words':
        'spoj %words',
    'hello':
        'ahoj',
    'world':
        'sv??te',
    'split %s by %delim':
        'rozd??l %s podle %delim',
    'letter %idx of %s':
        'p??smeno %idx z %s',
    'length of %s':
        'd??lka %s',
    'unicode of %s':
        'Unicode %s',
    'unicode %n as letter':
        'Unicode %n jako znak',
    'is %s a %typ ?':
        'je %s typu %typ ?',
    'is %s identical to %s ?':
        'je %s stejn?? jako %s ?',

    'type of %s':
        'Typ %s',

    // variables:
    'Make a variable':
        'Vytvo?? prom??nnou',
    'Variable name':
        'Jm??no prom??nn??',
    'Script variable name':
        'Jm??no skriptov?? prom??nn??',
    'Delete a variable':
        'Sma?? prom??nnou',

    'set %var to %s':
        'nastav %var na %s',
    'change %var by %n':
        'zm???? %var o %n',
    'show variable %var':
        'uka?? prom??nnou %var',
    'hide variable %var':
        'schovej prom??nnou %var',
    'script variables %scriptVars':
        'Vytvo?? skriptov?? prom??nn?? %scriptVars',

    // lists:
    'list %exp':
        'seznam %exp',
    '%s in front of %l':
        '%s na za????tek %l',
    'item %idx of %l':
        'polo??ka %idx z %l',
    'all but first of %l':
        'v??e krom?? prvn?? polo??ky z %l',
    'length of %l':
        'd??lka %l',
    '%l contains %s':
        '%l obsahuje %s',
    'thing':
        'v??c',
    'add %s to %l':
        'p??idat %s do %l',
    'delete %ida of %l':
        'smazat %ida z %l',
    'insert %s at %idx of %l':
        'vlo??it %s na %idx pozici v %l',
    'replace item %idx of %l with %s':
        'nahra?? polo??ku %idx v %l hodnotou %s',

    // other
    'Make a block':
        'Vytvo?? blok',

    // menus
    // snap menu
    'About...':
        'O programu...',
    'Snap! website':
        'Str??nky Snap!',
    'Download source':
        'St??hnout zdrojov?? k??dy',
    'Switch back to user mode':
        'p??epnout zp??t do u??ivatelsk??ho m??du',
    'disable deep-Morphic\ncontext menus\nand show user-friendly ones':
        'zobrazovat jednoduch?? menu',
    'Switch to dev mode':
        'p??epnout do v??voj????sk??ho m??du',
    'enable Morphic\ncontext menus\nand inspectors,\nnot user-friendly!':
        'zobrazovat pokro??il?? menu',
    'Reference manual':
        'Referen??n?? p????ru??ka',

    // project menu
    'Project notes...':
        'Pozn??mky k projektu...',
    'New':
        'Nov??',
    'Open...':
        'Otev????t...',
    'Save':
        'Ulo??it',
    'Save As...':
        'Ulo??it jako...',
    'Import...':
        'Importovat...',
    'file menu import hint':
        'Na????st exportovan?? projekt, '
            + 'knihovnu blok??, kost??my nebo zvuky',
    'Export project as plain text...':
        'Exportovat projekt jako prost?? text...',
    'Export project...':
        'Exportovat projekt...',
    'show project data as XML\nin a new browser window':
        'zobrazit data projektu jako xml  XML\n v nov??m okn?? prohl????e??e',
    'Export blocks...':
        'Exportovat bloky...',
    'show global custom block definitions as XML\nin a new browser window':
        'Zobrazit definici vlastn??ch blok?? jako\nXML v nov??m okn?? prohl????e??e',
    'Import tools':
        'Importovat n??stroje',
    'load the official library of\npowerful blocks':
        'nahraje oficialn?? knihovnu\npokro??il??ch blok??',
    'Libraries...':
        'Knihovny...',
    'Import library':
        'Importovat knihovnu',
        
	  'Select a costume from the media library':
		    'Vyberte kost??m z knihovny m??di??',
    'Select a sound from the media library':
        'Vyberte si zvuk z knihovny m??di??',

    // cloud menu
    'Login...':
        'P??ihl??sit...',
    'Signup...':
        'Vytvo??it ????et...',
    'Reset Password...':
        'Resetovat heslo...',

    'Sign in':
        'P??ihl??sit se',
    'User name:':
        'U??ivatelsk?? jm??no:',
    'Password:':
        'Heslo:',
    'stay signed in on this computer\nuntil logging out':
        'z??sta?? p??ihl????en na tomto po????ta??i\na?? do odhl????en??',
    'Reset password':
        'Resetuj heslo',
    'Sign up':
        'Vytvo??it ????et',
    'Birth date:':
        'Datum narozen??:',
    'year:':
        'rok:',
    'E-mail address:':
        'E-mailov?? adresa:',
    'E-mail address of parent or guardian:':
        'E-mailov?? adresa rodi??e ??i opatrovn??ka:',
    'Terms of Service...':
        'Podm??nky slu??by...',
    'Privacy...':
        'Politika soukrom??...',
    'I have read and agree\nto the Terms of Service':
        '??etl jsem a souhlas??m s pod??mkami slu??by',
    'January':
        'leden',
    'February':
        '??nor',
    'March':
        'b??ezen',
    'April':
        'duben',
    'May':
        'kv??ten',
    'June':
        '??erven',
    'July':
        '??ervenec',
    'August':
        'srpen',
    'September':
        'z??????',
    'October':
        '????jen',
    'November':
        'listopad',
    'December':
        'prosinec',
    'please fill out\nthis field':
        'pros??m vypl??te\ntoto pole',
    'please agree to\nthe TOS':
        'pros??m za??krtn??te souhlas\ns Podm??nkami slu??by',
    'User name must be four\ncharacters or longer':
        'U??ivatelsk?? jm??no mus?? b??t\ndlouh?? alespo?? ??ty??i znaky.',
    'please provide a valid\nemail address':
        'Zadejte, pros??m, platnou emailovou adresu.',
    'password must be six\ncharacters or longer':
        'Heslo mus?? b??t dlouh??\nalespo?? ??est znak??.',
    'passwords do\nnot match':
        'Hesla se neshoduj??.',
                        
    // settings menu
    'Language...':
        'Jazyk...',
    'Zoom blocks...':
        'Velikost blok??...',
    'Stage size...':
        'Velikost sc??ny...',
    'Stage size':
        'Velikost sc??ny',
    'Stage width':
        '??????ka sc??ny',
    'Stage height':
        'V????ka sc??ny',
    'Blurred shadows':
        'M??kk?? st??ny',
    'uncheck to use solid drop\nshadows and highlights':
        'od??krtnut??m se pou??ij??\nostr?? st??ny a sv??tla',
    'check to use blurred drop\nshadows and highlights':
        'za??krtni pro pou??it?? \nm??kk??ch st??n?? a sv??tel',
    'Zebra coloring':
        'St????dav?? barvy',
    'check to enable alternating\ncolors for nested blocks':
        'Za??krtnut?? zapne st????dav??\nbarvy pro vlo??en?? bloky',
    'uncheck to disable alternating\ncolors for nested block':
        'Od??krtnut?? zru???? pou??it?? st????dav??ch barev pro vlo??en?? bloky',
    'Prefer empty slot drops':
        'Preferovat pr??zdn?? slot pro pu??t??n??',
    'settings menu prefer empty slots hint':
        'Za??krtnut??m bude preferov??no pr??zdn?? m??sto na um??st??n??',
    'uncheck to allow dropped\nreporters to kick out others':
        'od??krtnut??m bude up??ednost??ov??no nahrazen?? cel?? podm??nky',
    'Long form input dialog':
        'Velk?? formul????e',
    'check to always show slot\ntypes in the input dialog':
        'Za??krtnut??m povolit zobrazov??n?? typ?? slot?? ve vstupn??m dialogu',
    'uncheck to use the input\ndialog in short form':
        'od??krtnut?? pou??ije vstupn?? dialogy v kr??tk?? form??',
    'Plain prototype labels':
        'Prost?? nadpisy prototyp??',
    'uncheck to always show (+) symbols\nin block prototype labels':
        'od??krtn??te pro pou????v??n?? symbol?? (+) v editoru blok??',
    'check to hide (+) symbols\nin block prototype labels':
        'za??krtn??te pro skryt?? symbol?? (+) v editoru blok??',
    'Virtual keyboard':
        'Virtu??ln?? kl??vesnice',
    'uncheck to disable\nvirtual keyboard support\nfor mobile devices':
        'od??krtnut?? zak????e\npodporu virtu??ln?? kl??vesnice\n'
            + 'na mobiln??ch za????zen??ch',
    'check to enable\nvirtual keyboard support\nfor mobile devices':
        'za??krtnut?? povol?? pou??it?? virtu??ln?? kl??vesnice\nna mobiln??ch za????zen??ch',
    'Input sliders':
        'Posuvn??ky',
    'uncheck to disable\ninput sliders for\nentry fields':
        'od??krtnut?? vypne pou??it?? posuvn??k?? pro vstupn?? pole',
    'check to enable\ninput sliders for\nentry fields':
        'za??krtnutn?? povol?? pou??it?? posuvn??k?? pro vstupn?? pole',
    'Clicking sound':
        'Zvuk kliknut??',
    'uncheck to turn\nblock clicking\nsound off':
        'od??krtnut?? vypne zvuk p??i p??icvaknut?? bloku',
    'check to turn\nblock clicking\nsound on':
        'za??krtnut?? zapne zvuk p??icvaknut?? bloku',
    'Thread safe scripts':
        'Vl??knov?? bezpe??n?? skripty',
    'uncheck to allow\nscript reentrance':
        'od??krtnut?? povol?? v??ce vl??ken',
    'check to disallow\nscript reentrance':
        'za??krtnut?? zak????e v??ce vl??ken',
    'Turbo mode':
        'Turbo m??d',
    'uncheck to run scripts\nat normal speed':
        'od??krtnut?? spust?? skript\nnorm??ln?? rychlost??',
    'check to prioritize\nscript execution':
        'za??krtnut?? spust?? skripty\nzv????enou rychlost??',
    'Flat design':
        'Ploch?? design',
    'check for alternative\nGUI design':
        'za??krtn??te pro alternativn?? design GUI',
    'uncheck for default\nGUI design':
        'od??krtn??te pro v??choz?? design GUI',
    'Keyboard Editing':
        'Editace kl??vesnic??',
    'uncheck to disable\nkeyboard editing support':
        'od??krtn??te pro vypnut?? podpory editace kl??vesnic??',
    'check to enable\nkeyboard editing support':
        'za??krtn??te pro podporu editace kl??vesnic??',
    'Prefer smooth animations':
        'Zapnout plynulou animaci',
    'uncheck for greater speed\nat variable frame rates':
        'od??krtn??te pro vy?????? rychlost',
    'check for smooth, predictable\nanimations across computers':
        'za??krtn??te pro plynul??, p??edv??dateln??\nanimace nap?????? po????ta??i',
    'Flat line ends':
        'Ploch?? konce ??ar',
    'check for flat ends of lines':
        'za??krtn??te pro ploch?? konce ??ar',
    'uncheck for round ends of lines':
        'od??krtn??te pro zakulacen?? konce ??ar',
    'Codification support':
        'Podpora kodifikace',
    'uncheck to disable\nblock to text mapping features':
        'od??krtn??te pro vypnut?? funkc??\nmapov??n?? blok?? na text',
    'check for block\nto text mapping features':
        'za??krtn??te pro funkce\nmapov??n?? blok?? na text',
    'Inheritance support':
        'Podpora d??di??nosti',
    'uncheck to disable\nsprite inheritance features':
        'od??krtn??te pro vypnut?? funkc??\nd??di??nosti sprit??',
    'check for sprite\ninheritance features':
        'za??krtn??te pro funkce\nd??di??nosti sprit??',

    // inputs
    'with inputs':
        's polo??kami',
    'input names:':
        'prom??nn??:',
    'Input Names:':
        'Prom??nn??:',

    // context menus:
    'help':
        'n??pov??da',

    // blocks:
    'help...':
        'n??pov??da...',
    'relabel...':
            'Zam??nit blok za...',
    'duplicate':
        'kop??rovat',
    'make a copy\nand pick it up':
        'vytvo??it kopii a dr??et ji',
    'only duplicate this block':
            'kop??rovat pouze tento blok',
    'delete':
        'smazat',
    'script pic...':
        'obr??zek skriptu...',
    'open a new window\nwith a picture of this script':
        'otev????t nov?? okno\ns obr??zkem tohoto skriptu',
    'ringify':
        'obalit',
    'unringify':
        'zru??it zabalen??',

    // custom blocks:
    'delete block definition...':
        'smazat definici bloku',
    'edit...':
        'upravit...',

    // sprites:
    'edit':
        'upravit',
    'move':
        'p??esunout',
    'export...':
        'export...',
    'paint a new sprite':
        'nakreslit nov?? sprite',

      // stage:
    'show all':
        'Zobrazit v??e',

    // scripting area
    'clean up':
        'Srovnat',
    'arrange scripts\nvertically':
        'zarovnat skripty vertik??ln??',
    'add comment':
        'p??idat koment????',
    'make a block...':
        'vytvo??it blok...',

    // costumes
    'rename':
        'p??ejmenovat',
    'export':
        'exportovat',
    'rename costume':
        'p??ejmenovat kost??m',
    'Paint a new costume':
        'Nakresli nov?? kost??m',

    // sounds
    'Play sound':
        'spustit p??ehr??v??n??',
    'Stop sound':
        'zastavit p??ehr??v??n??',
    'Stop':
        'zastavit',
    'Play':
        'spustit',
    'rename sound':
        'p??ejmenovat zvuk',

    // dialogs
    // buttons
    'OK':
        'OK',
    'Ok':
        'OK',
    'Cancel':
        'Zru??it',
    'Yes':
        'Ano',
    'No':
        'Ne',

    // help
    'Help':
        'N??pov??da',

    // zoom blocks
    'Zoom blocks':
        'Velikost blok??',
    'build':
        'vytvo?? si',
    'your own':
        'sv?? vlastn??',
    'blocks':
        'bloky',
    'normal (1x)':
        'norm??ln?? (1x)',
    'demo (1.2x)':
        'demo (1.2x)',
    'presentation (1.4x)':
        'prezentace (1.4x)',
    'big (2x)':
        'velk?? (2x)',
    'huge (4x)':
        'obrovsk?? (4x)',
    'giant (8x)':
        'gigantick?? (8x)',
    'monstrous (10x)':
        'monstr??zn?? (10x)',

    // Project Manager
    'Untitled':
        'Nepojmenovan??',
    'Open Project':
        'Otev????t projekt',
    '(empty)':
        '(pr??zdn??)',
    'Saved!':
        'Ulo??eno!',
    'Delete Project':
        'Smazat projekt',
    'Are you sure you want to delete':
        'Jste si jisti, ??e chcete projekt smazat?',
    'rename...':
        'p??ejmenovat...',

    // costume editor
    'Costume Editor':
        'Editor kost??m??',
    'click or drag crosshairs to move the rotation center':
        'klikni nebo p??et??hni k?????? pro p??esunut?? centra ot????en??',

    // project notes
    'Project Notes':
        'Pozn??mky k projektu',

    // new project
    'New Project':
        'Nov?? projekt',
    'Replace the current project with a new one?':
        'Nahradit st??vaj??c?? projekt nov??m?',

    // save project
    'Save Project As...':
        'Ulo??it projekt jako...',

    // export blocks
    'Export blocks':
        'Export blok??',
    'this project doesn\'t have any\ncustom global blocks yet':
        'Tento projekt nyn?? nem?? ????dn?? glob??ln?? bloky',
    'select':
        'vybrat',
    'all':
        'v??e',
    'none':
        'nic',

    // variable dialog
    'for all sprites':
        'pro v??echny sprite',
    'for this sprite only':
        'pouze pro tento sprite',

    // block dialog
    'Change block':
        'Zm??nit blok',
    'Command':
        'P????kaz',
    'Reporter':
        'Funkce',
    'Predicate':
        'Podm??nka',

    // block editor
    'Block Editor':
        'Editor blok??',
    'Apply':
        'Pou????t',

    // block deletion dialog
    'Delete Custom Block':
        'smazat vlastn?? blok',
    'block deletion dialog text':
        'Smaz??n??m tohoto bloku se odstran?? v??echna jeho pou??it??.\n' +
            'Opravdu chcete tento blok smazat?',

    // input dialog
    'Create input name':
        'Vytvo??it vstup',
    'Edit input name':
        'Upravit vstup',
    'Edit label fragment':
        'Upravit n??pis',
    'Title text':
        'Nadpis',
    'Input name':
        'Vstup',
    'Delete':
        'Smazat',
    'Object':
        'Objekt',
    'Number':
        '????slo',
    'Text':
        'Text',
    'List':
        'Seznam',
    'Any type':
        'Libovoln??',
    'Boolean (T/F)':
        'Boolean (P/N)',
    'Command\n(inline)':
        'P????kaz\n(vno??en??)',
    'Command\n(C-shape)':
        'P????kaz\n(C-tvar)',
    'Any\n(unevaluated)':
        'Cokoliv\n(nevyhodnoceno)',
    'Boolean\n(unevaluated)':
        'Boolean\n(nevyhodnoceno)',
    'Single input.':
        'Jednoduch?? vstup.',
    'Default Value:':
        'V??choz?? hodnota:',
    'Multiple inputs (value is list of inputs)':
        'V??ce vstup?? (hodnoty v seznamu)',
    'Upvar - make internal variable visible to caller':
        'Vnit??n?? prom??nn?? viditeln?? pro vol??n??',

    // About Snap
    'About Snap':
        'O programu Snap',
    'Back...':
        'Zp??t...',
    'License...':
        'Licence...',
    'Modules...':
        'Moduly...',
    'Credits...':
        'P??isp??vatel??...',
    'Translators...':
        'P??ekladatel??',
    'License':
        'Licence',
    'current module versions:':
        'aktu??ln?? verze modul??:',
    'Contributors':
        'P??isp??vatel??',
    'Translations':
        'P??eklady',

    // variable watchers
    'normal':
        'norm??ln??',
    'large':
        'velk??',
    'slider':
        'posuvn??k',
    'slider min...':
        'minimum...',
    'slider max...':
        'maximum...',
    'Slider minimum value':
        'minim??ln?? hodnota posuvn??ku',
    'Slider maximum value':
        'Maxim??ln?? hodnota posuvn??ku',

    // list watchers
    'length: ':
        'd??lka: ',

    // coments
    'add comment here...':
        'p??idat sem koment????...',

    // drow downs
    // directions
    '(90) right':
        '(90) doprava',
    '(-90) left':
        '(-90) doleva',
    '(0) up':
        '(0) nahoru',
    '(180) down':
        '(180) dol??',

    // collision detection
    'mouse-pointer':
        'kurzor my??i',
    'edge':
        'okraj',
    'pen trails':
        'stopa pera',

    // costumes
    'Turtle':
        '??elva',

    // graphical effects
    'brightness':
        'jas',
    'ghost':
        'duch',
    'negative':
        'negativ',
    'comic':
        'moar??',
    'confetti':
        'barevnost',


    // keys
    'space':
        'mezern??k',
    'up arrow':
        '??ipka nahoru',
    'down arrow':
        '??ipka dol??',
    'right arrow':
        '??ipka doprava',
    'left arrow':
        '??ipka doleva',
    'a':
        'a',
    'b':
        'b',
    'c':
        'c',
    'd':
        'd',
    'e':
        'e',
    'f':
        'f',
    'g':
        'g',
    'h':
        'h',
    'i':
        'i',
    'j':
        'j',
    'k':
        'k',
    'l':
        'l',
    'm':
        'm',
    'n':
        'n',
    'o':
        'o',
    'p':
        'p',
    'q':
        'q',
    'r':
        'r',
    's':
        's',
    't':
        't',
    'u':
        'u',
    'v':
        'v',
    'w':
        'w',
    'x':
        'x',
    'y':
        'y',
    'z':
        'z',
    '0':
        '0',
    '1':
        '1',
    '2':
        '2',
    '3':
        '3',
    '4':
        '4',
    '5':
        '5',
    '6':
        '6',
    '7':
        '7',
    '8':
        '8',
    '9':
        '9',

    // messages
    'new...':
        'Nov??...',

    // math functions
    'abs':
        'absolutn?? hodnota',
    'ceiling':
        'zaokrouhlit nahoru',
    'floor':
        'zaokrouhlit dol??',
    'sqrt':
        'odmocnina',
    'sin':
        'sin',
    'cos':
        'cos',
    'tan':
        'tan',
    'asin':
        'asin',
    'acos':
        'acos',
    'atan':
        'atan',
    'ln':
        'ln',
    'e^':
        'e^',

    // data types
    'number':
        '????slo',
    'text':
        'text',
    'Boolean':
        'boolean',
    'list':
        'seznam',
    'command':
        'blok p????kaz??',
    'reporter':
        'blok funkc??',
    'predicate':
        'podm??nky',

    // list indices
    'last':
        'posledn??',
    'any':
        'kter??koli'
};
