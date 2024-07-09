import filterByType from '../src/filterType.js';

describe('filterByType', () => {
    it('should return the abilities of a pokemon', async () => {
        const data = await filterByType('fire');
        expect(data.pokemon.slice(0, 1)[0].pokemon.name).toEqual("charmander");
    });

    // it('should return a error', async () => {
    //     expect(() => filterByType(3)).toThrow("Le param doit être une chaine de ce caractère");
    // });

    it('should return the abilities of a pokemon', async () => {
        const data = await filterByType('water');
        expect(data.pokemon.slice(0, 1)[0].pokemon.name).toEqual("squirtle");
    });
})