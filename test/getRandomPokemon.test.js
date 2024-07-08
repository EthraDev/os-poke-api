import getRandomPokemon from '../src/getRandomPokemon.js';

describe('getRandomPokemon', () => {
  test('returns a random Pokémon with correct properties', async () => {
    const pokemon = await getRandomPokemon();
    
    expect(pokemon).toHaveProperty('name');
    expect(pokemon).toHaveProperty('hp');
    expect(pokemon).toHaveProperty('attack');
    expect(pokemon).toHaveProperty('defense');
    expect(pokemon).toHaveProperty('speed');
    expect(pokemon).toHaveProperty('abilities');
  });

  test('handles errors gracefully', async () => {
    // Mocking fetch to simulate a failed HTTP request
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('Failed to fetch')));

    await expect(getRandomPokemon()).rejects.toThrow('Failed to fetch');

    // Restore the original implementation of fetch after tests
    global.fetch.mockRestore();
  });
});
