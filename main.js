import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const poks = data;
const pokemons = poks.pokemon; 

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: ' #98E690',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
   normal: '#F5F5F5',
   ice: '#B6EECF',
   steel: '#EDEAE4',
   dark: '#8A8985',
   ghost: '#E0BBE4'
};



 for (let i = 0; i < pokemons.length; i++){
    
    let name = pokemons[i].name[0].toUpperCase()+pokemons[i].name.slice(1);
    let pokeTypes = pokemons[i].type[0];
    let imagen = pokemons[i].img;
    let number = pokemons[i].num;

    let color = colors[pokeTypes];
    

    document.getElementById("pokemonss").innerHTML += `
    <div class= "pokemonCard" style="background-color:${color}"> 
    <div class="imgContainer">
    <img src="${imagen}"/> </div>
    <div class="info">
    <span class= "number"> # ${number} </span>
    <h3 class"name">${name} </h3>
    <small class="type"> Tipo: <span>${pokeTypes} </span></small>
    </div>
    </div>
    `

   /*nombres.push(name);
   imagenes.push(imagen);*/
}


/*arrayNombres.sort();
console.log(arrayNombres);*/ 

