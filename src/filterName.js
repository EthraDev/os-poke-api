/**
 * Fetches a pokemon from the PokeAPI with its name.
 * 
 * @returns {Promise<Object>} A promise that resolves to an object containing the Pokemon whose name was passed as a parameter:
 *   {
 *       "abilities":[
 *           {},
 *           {}
 *       ],
 *       "base_experience":198,
 *       "cries":{},
 *       "forms":[],
 *       "game_indices":[],
 *       "height":11,
 *       "held_items":[],
 *       "id":12,
 *       "is_default":true,
 *       "location_area_encounters":"https://pokeapi.co/api/v2/pokemon/12/encounters",
 *       "moves":[],
 *       "name":"butterfree",
 *       "order":16,
 *       "past_abilities":[],
 *       "past_types":[],
 *       "species":{},
 *       "sprites":{},
 *       "stats":[],
 *       "types":[],
 *       "weight":320
 *   }
 * 
 *   - {string[]} abilities - An array of abilities that the Pokémon has.
 * @throws Will throw an error if the network request fails or if the response is not ok.
 */


export default async function filterByName(pokemonName){

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    if (typeof pokemonName !== 'string') {
        throw new Error("Le param doit être un string");
    }
    
    const response = await fetch(url)

    return response.json()
}