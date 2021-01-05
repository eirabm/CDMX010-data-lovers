import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const poks = data;
const pokemons = poks.pokemon;
//Definimos una variable donde se empujarán y guardarán los nombres de los pokemons *****************
var names = [];

const colors = {
	fire: '#FDDFDF',
	grass: '#b4ecb4',
	electric: '#fcfc5c',
	water: '#BED2F8',
	ground: '#CEB493',
	rock: '#d5d5d4',
	fairy: '#F6D7DE',
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

/*ADQUIRIR VARIABLES POR MEDIO DE MAP
let name = pokemons.map((pokeName) => pokeName.name);
let pokeTypes = pokemons.map((pokeType) => pokeType.type[0]);
let imagen = pokemons.map((pokeImg) => pokeImg.img);
let number = pokemons.map((pokeNum) => pokeNum.num);*/

document.getElementById("pokemonss").innerHTML = `
${pokemons.map(pokeCard).join('')}
`
function pokeCard(pokemones){
   return `
   <div class="pokemonCard" style="background-color:${colors[pokemones.type[0]]}; cursor: pointer">
   <div class="imgContainer">
   <img src="${pokemones.img}"/> </div>
   <div class="info">
   <span class= "number"> # ${pokemones.num} </span>
   <h3 class = "name">${pokemones.name[0].toUpperCase()+pokemones.name.slice(1)} </h3>
   <small class="type"> Tipo: <span>${pokemones.type[0]} </span></small>
   </div>
   </div>`
}



//******************************************************************************* */
//Definimos un "For" para iniciar con un ciclo.
for (let i = 0; i < pokemons.length; i++){
   //Obtenemos el nombre de cada objeto del arreglo
   let name = pokemons[i].name;
   //Empujamos los nombres obtenidos a la variable
   names.push(name);  
};

//alfabeticamente
names.sort();
console.log("hola", names)
//reversible alfabeticamente
names.reverse();
console.log("adios", names)




/*BOTON BUSCAR POR NOMBRE*/
let searchByName = document.getElementById("searchName");
searchByName.onclick = function(){

    let nameToSearch = document.getElementById("nameToSearch").value.toLowerCase();

    let foundName = pokemons.filter((filterName) => filterName.name == nameToSearch)

    document.getElementById("pokemonss").innerHTML = `
    ${foundName.map(pokeCard).join('')}
    `
   }


/*BOTON BUSCAR*/
let searchFilters = document.getElementById("search");
searchFilters.onclick = function(){

   let waterFinder = document.getElementById("water").checked;
   let ghostFinder = document.getElementById("ghost").checked;

   if (waterFinder == true){

      let pokemonTypeWater = pokemons.filter((pokeWater) => pokeWater.type[0] === 'water')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeWater.map(pokeCard).join('')}
      `

   } else if(ghostFinder == true) {
      var pokemonTypeGhost = pokemons.filter((pokeWater) => pokeWater.type[0] === 'ghost')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeGhost.map(pokeCard).join('')}
      `
   }
}

/* OBTENER DATOS Y MOSTRARLOS POR MEDIO DE LOOP
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
    <h3 class = "name">${name} </h3>
    <small class="type"> Tipo: <span>${pokeTypes} </span></small>
    </div>
    </div>
    `
   /*nombres.push(name);
   imagenes.push(imagen);*/



/* ESTO LOS ORDENA ALFABETICAMENTE
arrayNombres.sort();
console.log(arrayNombres);*/ 