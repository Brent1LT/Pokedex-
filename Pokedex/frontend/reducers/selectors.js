

export const selectAllPokemon = ({entities: {pokemon}}) => {
  return Object.values(pokemon)
}