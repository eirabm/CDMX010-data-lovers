import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

var poks = data;
 var pokemons = poks.pokemon; 

 for (let i = 0; i < pokemons.length; i++){
     let name= (pokemons[i].name);
     document.getElementById("pokemonss").innerHTML += name;
 }



//for (var i = 0; i < pokemones.length; i++){
//    console.log(pokemones.name[i]);
//}