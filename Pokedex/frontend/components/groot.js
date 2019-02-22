import React from 'react';
import {Provider} from 'react-redux';
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container';

const Groot = ({store}) => (
  <Provider store={store}>
    <PokemonIndexContainer myProp={"something"}/>
  </Provider>
);

export default Groot;