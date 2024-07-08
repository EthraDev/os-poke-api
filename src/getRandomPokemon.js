const getRandomPokemon = async () => {
  const pokemonId = Math.floor(Math.random() * 898) + 1; // Génère un ID entre 1 et 898
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();

  // Extraire les statistiques pertinentes (HP, attack, defense, speed, etc.)
  const hp = data.stats.find(stat => stat.stat.name === 'hp').base_stat;
  const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
  const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
  const speed = data.stats.find(stat => stat.stat.name === 'speed').base_stat;

  return {
    name: data.name,
    hp,
    attack,
    defense,
    speed,
    abilities: data.abilities.map(ability => ability.ability.name)
  };
};
  
export default getRandomPokemon;
