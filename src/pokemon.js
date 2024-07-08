/**
* Represents a Pokémon with its stats and abilities.
*/
class Pokemon {
  /**
  * Creates a new Pokémon.
  * @param {string} name - The name of the Pokémon.
  * @param {number} hp - The base HP of the Pokémon.
  * @param {number} attack - The base attack of the Pokémon.
  * @param {number} defense - The base defense of the Pokémon.
  * @param {number} speed - The base speed of the Pokémon.
  * @param {string[]} abilities - An array of abilities that the Pokémon has.
  */
  constructor(name, hp, attack, defense, speed, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.abilities = abilities;
  }

  /**
  * Attacks another Pokémon, calculating and inflicting damage based on the attacker's attack and the defender's defense.
  * @param {Pokemon} pokemon - The Pokémon to be attacked.
  */
  attackOther(pokemon) {
    const damage = this.attack - pokemon.defense;
    pokemon.receiveDamage(damage);
    console.log(`${this.name} deals ${damage} damage to ${pokemon.name}!`);
  }

  /**
  * Reduces the Pokémon's HP by the specified damage amount.
  * If HP falls to or below zero, logs that the Pokémon has been defeated.
  * @param {number} damage - The amount of damage to inflict.
  */
  receiveDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      console.log(`${this.name} has been slain!`);
    }
  }
}