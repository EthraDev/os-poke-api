/**
 * Fetches the abilities of a Pokémon from the PokeAPI.
 *
 * @param {number} pokemonID - The ID of the Pokémon.
 * @returns {Promise<string[]>} - Returns a promise that resolves to an array of abilities.
 * @throws {Error} - Throws an error if the parameter is not a number or if the API request fails.
 */
export default async function getPokemonCapacity(pokemonID) {
    if (typeof pokemonID !== 'number') {
        throw new Error("Le param doit être un entier");
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const abilities = data.abilities.map(ability => ability.ability.name);
        return abilities;
        
    } catch (error) {
        console.error('Erreur lors de la récupération des capacités du Pokémon:', error);
        throw error;
    }
}
