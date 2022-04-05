import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./pokemonMultipleReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer
});

export default RootReducer;