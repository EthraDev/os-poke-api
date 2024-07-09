/**
 * Simulates a Pokémon battle between two randomly generated Pokémon.
 * 
 * @param {Function} createPokemon - Function to create a Pokémon.
 * @param {number} [hpLimit=0] - HP limit to end the battle (optional).
 * @returns {Promise<void>} - Returns a promise that resolves when the battle is over.
 */
const simulatePokemonBattle = async (createPokemon, hpLimit = 0) => {
    try {
        const pokemon1 = await createPokemon();
        const pokemon2 = await createPokemon();

        const [first, second] = pokemon1.speed > pokemon2.speed ? [pokemon1, pokemon2] : [pokemon2, pokemon1];

        console.log(`The battle begins between ${pokemon1.name} and ${pokemon2.name}!\n`);

        while (pokemon1.hp > hpLimit && pokemon2.hp > hpLimit) {
            first.attackOther(second);
            if (second.hp > hpLimit) {
                second.attackOther(first);
            }
            console.log(`${pokemon1.name} (${pokemon1.hp} HP) vs ${pokemon2.name} (${pokemon2.hp} HP)\n`);
        }

        console.log('The battle is over!');
    } catch (error) {
        console.error('Error during battle simulation:', error);
    }
};

export default simulatePokemonBattle;

