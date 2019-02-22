import React from 'react';


class PokemonIndex extends React.Component {
  render() {
    return (
      <ul>
      {this.props.pokemon.map((poke) => (
        <li key={poke.id}><img className='poke-image' src={poke.image_url}/>{poke.name}</li>
      ))}
      </ul>
    )
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;