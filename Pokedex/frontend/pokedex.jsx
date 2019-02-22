import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Groot from './components/groot';
import {HashRouter, Route} from 'react-router-dom';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const grootEl = document.getElementById('groot');
  ReactDOM.render(<Groot store={store}/>, grootEl);


  window.receiveAllPokemon = receiveAllPokemon
  window.fetchAllPokemon = fetchAllPokemon
  window.getState = store.getState; 
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
});
