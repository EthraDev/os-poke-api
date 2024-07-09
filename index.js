import getPokemonCapacity from './src/getCapacity.js';
import getRandomPokemon from "./src/getRandomPokemon.js"
import filterByID from './src/filterID.js';
import filterByType from './src/filterType.js';
import filterByName from './src/filterName.js';

console.log(getPokemonCapacity(5).then(data => console.log(data.abilities)));
console.log(filterByID(10120).then(data => console.log(data.name)));
console.log(filterByName('butterfree').then(data => console.log(data)));
console.log(filterByType('fire').then(data => console.log(data.pokemon.slice(0, 10))));
getRandomPokemon().then(pokemon => console.log(pokemon))
