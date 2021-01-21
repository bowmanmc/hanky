import StopWords from './stopwords';

const EMPTY = { entry: '', words: [] };

const processEntry = (input) => {
    // check for nulls and other weirdness
    if (!input) {
        return EMPTY;
    }

    // check for string of all whitespace chars
    const text = input.trim();
    if (text === '') {
        return EMPTY;
    }

    // take out any extra internal whitespace
    const entry = text.replace(/\s\s+/g, ' ');

    // take out any stop words
    const words = [];
    const inputs = entry.split(/\s/);
    for (let i = 0; i < inputs.length; i++) {
        if (StopWords.indexOf(inputs[i]) < 0) {
            let word = inputs[i].toLowerCase();
            word = word.replace(/\"/g, '');
            word = word.replace(/\'/g, '');
            words.push(word);
        }
    }

    /*
        Input: "Raiders    of the     Lost Ark    "
        Result: {
            entry: 'Radiers of the Lost Ark',
            words: ['raiders', 'lost', 'ark']
        }
     */
    return {
        entry: entry,
        words: words,
    };
};

export default processEntry;
