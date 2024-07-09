import createPokemonFromAPI from "../src/createPokemon";

// test unitaire

describe('createPokemonFromAPI', () => {
    test("returns a Pokemon not null", async () => {
        const pokemon = await createPokemonFromAPI();
        expect(pokemon).not.toBeNull();
    });
})

describe('createPokemonFromAPI', () => {
    test("returns a Pokemon have good properties", async () => {
        const pokemon = await createPokemonFromAPI();
        expect(pokemon).toHaveProperty('name');
        expect(pokemon).toHaveProperty('hp');
        expect(pokemon).toHaveProperty('attack');
        expect(pokemon).toHaveProperty('defense');
        expect(pokemon).toHaveProperty('speed');
        expect(pokemon).toHaveProperty('abilities');
    });
})

describe('createPokemonFromAPI', () => {
    test("returns a Pokemon with capacity not null", async () => {
        const pokemon = await createPokemonFromAPI();
        expect(pokemon.capacities).not.toBeNull();
    });
})