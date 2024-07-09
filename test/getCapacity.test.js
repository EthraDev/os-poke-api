import getPokemonCapacity from '../src/getCapacity.js';

describe('getPokemonCapacity', () => {
    it('should return the abilities of a pokemon', async () => {
        const data = await getPokemonCapacity(5);
        expect(data).toEqual([
            'blaze',
            'solar-power'
        ]);
    });

    // it('should return a error', async () => {
    //     expect(() => getPokemonCapacity('aze')).toThrow("Le param doit être un entier");
    // });

    it('should return the abilities of a pokemon', async () => {
        const data = await getPokemonCapacity(1);
        expect(data).toEqual([
            'overgrow',
            'chlorophyll'
        ]);
    });

})