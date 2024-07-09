import filterByID from '../src/filterID.js';

describe('filterByID', () => {
    it('should return the abilities of a pokemon', async () => {
        const data = await filterByID(203);
        expect(data.name).toEqual("girafarig");
    });

    // it('should return a error', async () => {
    //     expect(() => filterByID('aze')).toThrow("Le param doit être un entier");
    // });

    it('should return the abilities of a pokemon', async () => {
        const data = await filterByID(503);
        expect(data.name).toEqual("samurott");
    });
})