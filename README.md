# Pokemon Battle Arena

You always wanted to know which pokemon would win between the two random ones. With this API, you'll know everything!

![Texte alternatif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2h5M3FvYmRxbmp2aG16eHo1eGptenB2bmo5MDg0b2w5enNzeDAwYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xuXzcHMkuwvf2/giphy.gif)

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Project Structure](#project-structure)
6. [Tests](#tests)
7. [Contributing](#contributing)
8. [License](#license)

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

Clone the repository and install dependencies:

```bash
npm install os-poke-battle-arena
npm install os-poke-battle-arena
```

## Usage

```js
import simulatePokemonBattle from './src/combat.js';

simulatePokemonBattle();
```

## Features

- Random Pokémon retrieval: Uses the PokeAPI to fetch random Pokémon.
- Pokémon abilities retrieval: Extracts Pokémon abilities from the PokeAPI.
- Pokémon battle simulation: Simulates battles between two Pokémon using their statistics and abilities.

## Project Structure

```
os-poke-api/
│
├── src/
│   ├── getRandomPokemon.js
│   ├── getPokemonCapacities.js
│   ├── combat.js
│   └── pokemon.js
├── test/
│   ├── getRandomPokemon.test.js
│   └── getPokemonCapacities.test.js
├── package.json
├── README.md
└── index.js
```

## Tests

```bash
npm test
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

- Fork the repository
- Create a feature branch (git checkout -b feature/feature)
- Commit your changes (git commit -m 'Add some feature')
- Push to the branch (git push origin feature/feature)
- Open a Pull Request

## License

Distributed under the MIT License. See LICENSE for more information.