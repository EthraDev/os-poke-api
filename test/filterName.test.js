import filterByName from '../src/filterName.js';

describe('filterByName', () => {
    it('should return the right pokemon', async () => {
        const data = await filterByName('butterfree');
        expect(data.id).toEqual(12);
    });

    // it('should return a error', async () => {
    //     expect(() => filterByName(3)).toThrow("Le param doit être une chaine de ce caractère");
    // });

    it('should return the right pokemon', async () => {
        const data = await filterByName('gible');
        expect(data.id).toEqual(443);
    });
})