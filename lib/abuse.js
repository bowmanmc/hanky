
const banned = [
    'abbo',
    'abo',
    'beaner',
    'beaners',
    'beeyotch',
    'biatch',
    'bitch',
    'chinaman',
    'chinamen',
    'chink',
    'cock',
    'cocks',
    'coolie',
    'coon',
    'coons',
    'crip',
    'cuck',
    'cunt',
    'dago',
    'daygo',
    'dego',
    'dick',
    'douchebag',
    'dyke',
    'eskimo',
    'fag',
    'faggot',
    'fatass',
    'fatso',
    'gash',
    'gimp',
    'golliwog',
    'gook',
    'goy',
    'goyim',
    'gyp',
    'gypsy',
    'half-breed',
    'halfbreed',
    'heeb',
    'homo',
    'hooker',
    'jap',
    'kaffer',
    'kaffir',
    'kaffir',
    'kaffre',
    'kafir',
    'kike',
    'kraut',
    'lardass',
    'lesbo',
    'lunatic',
    'masturbate',
    'masturbating',
    'masturbation',
    'mick',
    'negress',
    'negro',
    'nig',
    'nig-nog',
    'nigga',
    'nigger',
    'nigguh',
    'nip',
    'pajeet',
    'paki',
    'pickaninnie',
    'pickaninny',
    'prostitute',
    'pubes',
    'pussie',
    'pussy',
    'raghead',
    'retard',
    'sambo',
    'shemale',
    'skank',
    'slut',
    'soyboy',
    'spade',
    'sperg',
    'spic',
    'spook',
    'squaw',
    'street-shitter',
    'tard',
    'tits',
    'titt',
    'trannie',
    'tranny',
    'twat',
    'wetback',
    'whore',
    'wigger',
    'wop',
    'yid',
    'zog',
];

const warning = [
    'ass',
    'asshole',
    'assholes',
    'bastard',
    'bastards',
    'bitch',
    'bitches',
    'crazy',
    'dumb',
    'fuck',
    'fucks',
    'fucker',
    'fuckin',
    'fucking',
    'fucktard',
    'fucktards',
    'piss',
    'pisses',
    'pissing',
    'pissed',
    'shit',
    'shithead',
    'shitheads',
    'shits',
    'shitty',
    'stupid',
];

export const checkEntry = (entry) => {
    const words = entry.split(/\s/);
    let hasBanned = false;
    let hasWarning = false;
    // Loop through the words once
    for (let i = 0; i < words.length; i++) {
        if (banned.indexOf(words[i]) > -1) {
            // contains a banned word
            hasBanned = true;
        }
        else if (warning.indexOf(words[i]) > -1) {
            hasWarning = true;
        }

        // if we found a banned word, no need
        // to continue
        if (hasBanned) {
            break;
        }
    }

    return {
        banned: hasBanned,
        warning: hasWarning,
    };
};
