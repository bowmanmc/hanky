import StopWords from './stopwords';

const EMPTY = { entry: '', words: [] };

const processEntry = (input) => {
    // check for nulls and other weirdness
    if (!input) {
        return '';
    }

    // check for string of all whitespace chars
    const text = input.trim();
    if (text === '') {
        return '';
    }

    // take out any extra internal whitespace
    const entry = text.replace(/\s\s+/g, ' ');

    return entry;
};

export default processEntry;
