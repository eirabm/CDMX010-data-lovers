import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

var poks = data;
var pokemons = poks.pokemon; 
var evoluciones = pokemons.evolution;

console.log(evoluciones);

var arrayNombres = [];


 for (let i = 0; i < pokemons.length; i++){
    
    let name= pokemons[i].name;
    let imagen= pokemons[i].img;

    document.getElementById("pokemonss").innerHTML += `
        <li class= "cadaPokemon"> 
        <img src="${imagen}">
        <h2> ${name} </h2>
        </li>
    `

   arrayNombres.push(name);
}

arrayNombres.sort();
console.log("hola", arrayNombres);

