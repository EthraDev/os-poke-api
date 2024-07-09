export default async function getPokemonCapacity(pokemonID)  {

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`

    if (typeof pokemonID !== 'number') {
        throw new Error("Le param doit être un entier");
    }
    
    const response = await fetch(url)

    return response.json()
}