class Pokemon {
  constructor(name, hp, attack, defense, speed, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.abilities = abilities;
  }

  attackOther(pokemon) {
    const damage = this.attack - pokemon.defense;
    pokemon.receiveDamage(damage);
    console.log(`${this.name} inflige ${damage} points de dégâts à ${pokemon.name}!`);
  }

  receiveDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      console.log(`${this.name} a été vaincu!`);
    }
  }
}