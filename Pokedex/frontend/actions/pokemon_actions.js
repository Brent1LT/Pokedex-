export const RECEIVE_ALL_POKEMON = 'RECEIEVE_ALL_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})