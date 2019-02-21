class Api::PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end 

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    @items = @pokemon.items
    render :show
  end 

end 