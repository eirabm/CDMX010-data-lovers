import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

var poks = data;
 var pokemons = poks.pokemon; 


 for (let i = 0; i < pokemons.length; i++){
    
    let name= (pokemons[i].name);
    let imagen= (pokemons[i].img);
    let candys= (pokemons[i].candy-cost);

    document.getElementById("pokemonss").innerHTML += `
        <div class = "cadaPokemon"> 
        <img src="${imagen}">
        <h2> ${name} </h2>
        <p> ${candys} </p>
        </div>
    `
}