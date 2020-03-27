const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        //https://jestjs.io/docs/en/expect
        // npm test 
        // https://jestjs.io/docs/en/expect
        //expect(2+2).toBe(5)

        const id = generateUniqueId();
        expect(id).toHaveLength(8);

    })
}); 