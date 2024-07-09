import getPokemonCapacity from '../src/getCapacity.js';

describe('getPokemonCapacity', () => {
    it('should return the abilities of a pokemon', async () => {
        const data = await getPokemonCapacity(5);
        expect(data.abilities).toEqual([
            {
                ability: {
                    name: 'blaze',
                    url: 'https://pokeapi.co/api/v2/ability/66/'
                },
                is_hidden: false,
                slot: 1
            },
            {
                ability: {
                    name: 'solar-power',
                    url: 'https://pokeapi.co/api/v2/ability/94/'
                },
                is_hidden: true,
                slot: 3
            }
        ]);
    });

    // it('should return a error', async () => {
    //     expect(() => getPokemonCapacity('aze')).toThrow("Le param doit être un entier");
    // });

    it('should return the abilities of a pokemon', async () => {
        const data = await getPokemonCapacity(1);
        expect(data.abilities).toEqual([
            {
                ability: {
                    name: 'overgrow',
                    url: 'https://pokeapi.co/api/v2/ability/65/'
                },
                is_hidden: false,
                slot: 1
            },
            {
                ability: {
                    name: 'chlorophyll',
                    url: 'https://pokeapi.co/api/v2/ability/34/'
                },
                is_hidden: true,
                slot: 3
            }
        ]);
    });

})