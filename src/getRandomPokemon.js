/**
 * Fetches a random Pokémon from the PokeAPI.
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

function getRandomPokemon() {
  return new Promise((resolve, reject) => {
    const pokemonId = Math.floor(Math.random() * 898) + 1; // Génère un ID entre 1 et 898
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
        const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
        const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
        const speed = data.stats.find(stat => stat.stat.name === 'speed').base_stat;

        resolve({
          name: data.name,
          hp,
          attack,
          defense,
          speed,
          abilities: data.abilities.map(ability => ability.ability.name)
        });
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default getRandomPokemon;
