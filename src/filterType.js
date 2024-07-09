/**
 * Fetches all pokemon from the PokeAPI with the same type.
 * 
 * @returns {Promise<Object>} A promise that resolves to an object containing all Pokémons from the same type:
*   [
*     {
*       "pokemon":{
*         "name":"charmander",
*         "url":"https://pokeapi.co/api/v2/pokemon/4/"
*        },
*        "slot":1
*     },
*   ]
 *   - {string[]} abilities - An array of abilities that the Pokémon has.
 * @throws Will throw an error if the network request fails or if the response is not ok.
 */


export default async function filterByType(typeName)  {

    let url = `https://pokeapi.co/api/v2/type/${typeName}`

    if (typeof typeName !== 'string') {
        throw new Error("Le param doit être un string");
    }
    
    const response = await fetch(url)

    return response.json()
}