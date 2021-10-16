const generateSkelleton = require('../Scripts/content');

describe('content', () => {
    it('should return a string with a substitution for data of cards', () => {
        const data = `--This string is for testing--`;

        const str = generateSkelleton(data);
        expect(str).toContain(data);        

    });
})