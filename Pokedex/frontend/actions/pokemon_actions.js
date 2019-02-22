export const RECEIVE_ALL_POKEMON = 'RECEIEVE_ALL_POKEMON';
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const requestAllPokemon = () => (dispatch, getState) => (
  APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)


// dispatch(requestAllPokemon())
// dispatch(requestOnePokemon(4))

// rootReducer action = function
// thunk hey! action === function!
//   function() 