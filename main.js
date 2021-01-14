import {getpokemoncito} from './data.js';

import data from './data/pokemon/pokemon.js';

let typesToFilter= [];

let CandyToFilter= [];

const poks = data;

const pokemons = poks.pokemon;


//Definimos una variable donde se empujarán y guardarán los nombres de los pokemons *****************
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

/*ADQUIRIR VARIABLES POR MEDIO DE MAP********************
let name = pokemons.map((pokeName) => pokeName.name);
let pokeTypes = pokemons.map((pokeType) => pokeType.type[0]);
let imagen = pokemons.map((pokeImg) => pokeImg.img);
let number = pokemons.map((pokeNum) => pokeNum.num);*/

/*TARJETAS DE POKEMONES EN LA PANTALLA PRINCIPAL*/

//Indicamos que en la sección "pokemonss" se va a pintar la información de los pokemons con el diseño de la pokeCard.
//Nota 1. "map" sirve para ****************
//Nota 2. "join('')" sirve para que existan espacios entre cada objeto.

	document.getElementById("pokemonss").innerHTML = `
	${pokemons.map(pokeCard).join('')}
	`

//Se define una función donde se diseña lo que contendrán las tarjetas pokemón y la información filtrada de cada pokemón que se requiere.
//Nota. "toUpperCase" esta indicando que la letra sea en mayuscula y con "slice" lo cortamos para que las siguientes se sigan viendo en minusculas.
function pokeCard(pokemones){
	return `
	<div class="pokemonCard" id="${pokemones.num}" style="background-color:${colors[pokemones.type[0]]}; cursor: pointer">
	<div class="imgContainer" id="${pokemones.num}">
	<img src="${pokemones.img}"/> </div>
	<div class="info" id="${pokemones.num}>
	<span class= "number"> ${pokemones.num} </span>
	<h3 class = "name">${pokemones.name[0].toUpperCase()+pokemones.name.slice(1)} </h3>
	<small class="type"> Tipo: <span>${pokemones.type[0]} </span></small>
	</div>
	</div>`
}


function pokeIndividualInfo (pokemones){
	return `
	<div class="individualPokeCard">
	<div class="imgContainter">
	<img class="pokemon" src="${pokemones.img}"/>
	</div> 
	<div class="cardText"> 
	   <p class="pokename" style="background-color:${colors[pokemones.type[0]]}"> ${[pokemones.name[0].toUpperCase()+pokemones.name.slice(1)]} </p>
	   <p class="information"> Tipo: ${pokemones.type[0]} <br>
	   Lugar de aparición: ${pokemones.generation['name']} <br>
	   <p class = "about">${pokemones.about}</p>
	</div>
	<div class="extra">
	<div class="info" style="background-color:${colors[pokemones.type[0]]}">
	 <div class="stats">         
	  <h5 class = "height"> Altura: <br> ${pokemones.size['height']} </h5> 
	  <span class="linee"></span>      
	  <h5 class = "weight"> Peso: <br> ${pokemones.size['weight']} </h5>     
	  <span class="linee"></span> 
	  <h5 class = "attack"> Estadísticas <br> de ataque: <br> ${pokemones.stats['base-attack']} </h5>  
	  <span class="linee"></span>       
	  <h5 class = "defense"> Estadísticas <br> de defensa: <br> ${pokemones.stats['base-defense']} </h5>  
	  <span class="linee></span>     
	</div>   
	</div>   
	`
 }    



/*BOTON BUSCAR POR NOMBRE*/

//Definimos una variable para traer el id del botón.
let searchByName = document.getElementById("searchName");
//Definimos el evento del DOM "onclick" del botón.
searchByName.onclick = function(){
    //Al darle click al botón se obtendrá la información que el usuario ingreso en el input de búsqueda y se escribirá en minuscula gracias a "toLowerCase" para que coincida con la información del array.
    let nameToSearch = document.getElementById("nameToSearch").value.toLowerCase();
   //Filtramos los nombres de los pokemones para que coincida con el nombre que ingreso el usuario.
    let foundName = pokemons.filter((filterName) => filterName.name == nameToSearch)
   //Pintamos la información en el espacio seleccionado y le damos el formato de las "pokeCard"
    document.getElementById("pokemonss").innerHTML = `
    ${foundName.map(pokeIndividualInfo).join('')}
    `
   }

let setFilters = document.getElementById("search");
setFilters.onclick = function(){

	typesToFilter.length= 0;

	CandyToFilter.length= 0;


	let arrangeAZ = document.getElementById("az").checked;
    let arrangeZA = document.getElementById("za").checked;

	document.getElementById("bug").checked ? typesToFilter.push('bug') : '';
	document.getElementById("dark").checked ? typesToFilter.push('dark') : '';
	document.getElementById("dragon").checked ? typesToFilter.push('dragon') : '';
	document.getElementById("electric").checked ? typesToFilter.push('electric') : '';
	document.getElementById("fairy").checked ? typesToFilter.push('fairy') : '';
	document.getElementById("fighting").checked ? typesToFilter.push('fighting') : '';
	document.getElementById("fire").checked ? typesToFilter.push('fire') : '';
	document.getElementById("ghost").checked ? typesToFilter.push('ghost') : '';
	document.getElementById("grass").checked ? typesToFilter.push('grass') : '';	
	document.getElementById("ground").checked ? typesToFilter.push('ground') : '';
	document.getElementById("ice").checked ? typesToFilter.push('ice') : '';
	document.getElementById("normal").checked ? typesToFilter.push('normal') : '';
	document.getElementById("poison").checked ? typesToFilter.push('poison') : '';
	document.getElementById("psychic").checked ? typesToFilter.push('psychic') : '';
	document.getElementById("rock").checked ? typesToFilter.push('rock') : '';
	document.getElementById("steel").checked ? typesToFilter.push('steel') : '';
	document.getElementById("water").checked ? typesToFilter.push('water') : '';

	document.getElementById("twelveCandy").checked ? CandyToFilter.push('12') : '';
   	document.getElementById("twentyFiveCandy").checked ? CandyToFilter.push('25') : '';
    document.getElementById("fiftyCandy").checked ? CandyToFilter.push('50') : '';
    document.getElementById("aHundredCandy").checked ? CandyToFilter.push('100') : '';
    document.getElementById("fourhundredCandy").checked ? CandyToFilter.push('400') : '';

	if (arrangeAZ == true){

		let sortedPokemons = pokemons.sort(function(a,b){
  
		   if (a.name < b.name) return -1;
		   if (a.name > b.name) return 1;
		   return 0;
		});
		document.getElementById("pokemonss").innerHTML = `
		${sortedPokemons.map(pokeCard).join('')}
		` 
	 }
  
	 if (arrangeZA == true){
		let sortedPokemons = pokemons.sort(function(a,b){
		   if (a.name < b.name) return 1;
		   if (a.name > b.name) return -1;
		   return 0;
		});
  
		document.getElementById("pokemonss").innerHTML = `
		${sortedPokemons.map(pokeCard).join('')}
		` 
	 }

	
	let uniqueTypeFilters = [...new Set(typesToFilter)];
	let uniqueCandyFilters = [...new Set(CandyToFilter)];

	

	document.getElementById("pokemonss").innerHTML = getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons, pokeCard)

}

let regresar = document.getElementById("regresar");
//Definimos el evento del DOM "onclick" del botón.

regresar.onclick = function(){   
	document.getElementById("pokemonss").innerHTML = `
	${pokemons.map(pokeCard).join('')}
	`
}


 
let pokeContainer = document.getElementById("pokemonss");
pokeContainer.addEventListener("click", getAPokemon);

function getAPokemon(poke) {

	if(poke.target !== poke.currentTarget){

		let clickedItem = poke.target.id;

		let getThisPokemon = pokemons.filter((searchThisPokemon) => searchThisPokemon.num === clickedItem)
		
		document.getElementById("pokemonss").innerHTML = `
		${getThisPokemon.map(pokeIndividualInfo).join('')}
		`
	   }
}
 
 
 
 
 
 

