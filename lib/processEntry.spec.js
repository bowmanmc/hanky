import processEntry from './processEntry';


describe('processEntry()', () => {

    test('cleans whitespace correctly', () => {
        const input = '   Raiders    of the   Lost   Ark     ';
        const result = processEntry(input);
        expect(result.entry).toBe('Raiders of the Lost Ark');
    });

    test('handles empty and null inputs', () => {
        let input = '         ';
        let result = processEntry(input);
        expect(result.entry).toBe('');
        expect(result.words.length).toBe(0);

        input = '';
        result = processEntry(input);
        expect(result.entry).toBe('');
        expect(result.words.length).toBe(0);

        input = null;
        result = processEntry(input);
        expect(result.entry).toBe('');
        expect(result.words.length).toBe(0);
    });

    test('parses words out', () => {
        const input = ' Raiders of the Lost Ark ';
        const result = processEntry(input);
        expect(result.words.length).toBe(3);
        expect(result.words.indexOf('ark')).toBeGreaterThan(-1);
    });

    test('removes quote characters', () => {
        const input = `work "friends" and 'enemies'`;
        const result = processEntry(input);
        expect(result.words.length).toBe(3);
        expect(result.words.indexOf('friends')).toBeGreaterThan(-1);
    });

});
