import processEntry from './processEntry';


describe('processEntry()', () => {

    test('cleans whitespace correctly', () => {
        const input = '   Raiders    of the   Lost   Ark     ';
        const result = processEntry(input);
        expect(result).toBe('Raiders of the Lost Ark');
    });

    test('handles empty and null inputs', () => {
        let input = '         ';
        let result = processEntry(input);
        expect(result).toBe('');

        input = '';
        result = processEntry(input);
        expect(result).toBe('');

        input = null;
        result = processEntry(input);
        expect(result).toBe('');
    });

    // test('parses words out', () => {
    //     const input = ' Raiders of the Lost Ark ';
    //     const result = processEntry(input);
    //     expect(result.words.length).toBe(3);
    //     expect(result.words.indexOf('ark')).toBeGreaterThan(-1);
    // });

    // test('removes quote characters', () => {
    //     const input = `work "friends" and 'enemies'`;
    //     const result = processEntry(input);
    //     expect(result.words.length).toBe(3);
    //     expect(result.words.indexOf('friends')).toBeGreaterThan(-1);
    // });

    // test('case insensitivity on stop words', () => {
    //     const input = 'I think I get duplicates duplicates';
    //     const result = processEntry(input);
    //     // [think, get, duplicates, duplicates]
    //     expect(result.words.length).toBe(4);
    // });

    // test('removes punctuation', () => {
    //     const input = 'Something SUPER Exciting!!!';
    //     const result = processEntry(input);
    //     // [something, super, exciting]
    //     expect(result.words.indexOf('exciting')).toBeGreaterThan(-1);
    // });
});
