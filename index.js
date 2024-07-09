import getPokemonCapacity from './src/getCapacity.js';
import getRandomPokemon from "./src/getRandomPokemon.js"

console.log(getPokemonCapacity(5).then(data => console.log(data.abilities)));
getRandomPokemon().then(pokemon => console.log(pokemon))
