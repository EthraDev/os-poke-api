import getPokemonCapacity from './src/getCapacity.js';

console.log(getPokemonCapacity(5).then(data => console.log(data.abilities)));