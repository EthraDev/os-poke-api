/**
 * Fetches a specific Pokémon from the PokeAPI with its ID.
 * 
 * @returns {Promise<Object>} A promise that resolves to an object containing Pokémon details:
*   - {string} name - The name of the Pokémon.
 *   - {number} hp - The base HP of the Pokémon.
 *   - {number} attack - The base attack of the Pokémon.
 *   - {number} defense - The base defense of the Pokémon.
 *   - {number} speed - The base speed of the Pokémon.
 *   - {string[]} abilities - An array of abilities that the Pokémon has.
 * @throws Will throw an error if the network request fails or if the response is not ok.
 */


export default async function filterByID(pokemonID)  {

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`

    if (typeof pokemonID !== 'number') {
        throw new Error("Le param doit être un entier");
    }
    
    const response = await fetch(url)

    return response.json()
}