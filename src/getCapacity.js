/**
 * Fetches abilities of Pokémon pick by it's ID from the PokeAPI.
 * 
 * @returns {Promise<Object>} A promise that resolves to a table containing all abilities form a Pokémon like this:
 *  
 *  [
 *       {
 *           ability: {
 *               name: 'blaze',
 *               url: 'https://pokeapi.co/api/v2/ability/66/'
 *           },
 *           is_hidden: false,
 *           slot: 1
 *       }
 *  ]
 * 
 *  - {string[]} abilities - An array of abilities that the Pokémon has.
 *  
 * @throws Will throw an error if the network request fails or if the response is not ok.
 */


export default async function getPokemonCapacity(pokemonID)  {

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`

    if (typeof pokemonID !== 'number') {
        throw new Error("Le param doit être un entier");
    }
    
    const response = await fetch(url)

    return response.json()
}