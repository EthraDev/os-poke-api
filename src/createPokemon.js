import Pokemon from './Pokemon.js';
import getRandomPokemon from './getRandomPokemon.js';
import getPokemonCapacity from './getCapacity.js';

/**
 * Creates a Pokémon instance from the API.
 * 
 * @returns {Promise<Pokemon>} - Returns a promise that resolves to a Pokémon instance.
 */
const createPokemonFromAPI = async () => {
    const pokemonData = await getRandomPokemon();
    console.log('Pokemon Data ID:', pokemonData.id); // Ajoutez cette ligne pour déboguer
    const capacities = await getPokemonCapacity(pokemonData.id); // Utilisation de l'ID du Pokémon
    return new Pokemon(
        pokemonData.name,
        pokemonData.hp,
        pokemonData.attack,
        pokemonData.defense,
        pokemonData.speed,
        capacities
    );
};

export default createPokemonFromAPI;
