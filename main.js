import {example, getpokemoncito} from './data.js';

import data from './data/pokemon/pokemon.js';

let typesToFilter=[];

const poks = data;

const pokemons = poks.pokemon;

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

document.getElementById("pokemonss").innerHTML = `
${pokemons.map(pokeCard).join('')}
`

function pokeCard(pokemones){
	return `
	<div class="pokemonCard" id= "pokemonCard" style="background-color:${colors[pokemones.type[0]]}; cursor: pointer" onclick= "getPokemon()">
	<div class="imgContainer">
	<img src="${pokemones.img}"/> </div>
	<div class="info">
	<span class= "number" id="number">${pokemones.num} </span>
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
	   Siguiente evolución: ${pokemones.evolution['next-evolution'][0]['name']}</p>     
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
 };

 window.getPokemon = function showThisPokemon(){
	for (let i=0; i < document.getElementById("pokemonss").children.length ; i++){

	   document.getElementById("pokemonss").children[i].onclick = function(){

		  let pokemonIndex = i;
		  let getThisPokemon = pokemons.filter((searchThisPokemon) => searchThisPokemon.num == (i + 1))

		  document.getElementById("pokemonss").innerHTML = `
		  ${getThisPokemon.map(pokeIndividualInfo).join('')}
		  `
		 }
	   }
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

   let candyTwelve = document.getElementById("twelveCandy").checked;
   let candyTwentyFive = document.getElementById("twentyFiveCandy").checked;
   let candyFifty = document.getElementById("fiftyCandy").checked;
   let candyAHundred = document.getElementById("aHundredCandy").checked;
   let candyFourHundred = document.getElementById("fourhundredCandy").checked;

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

	
	let uniqueFilters = [...new Set(typesToFilter)];
	document.getElementById("pokemonss").innerHTML = getpokemoncito(uniqueFilters, pokemons, pokeCard)

	if(candyTwelve == true) {

		let pokemonCandyTwelve = pokemons.filter((pokemon) => {
  
		   if(pokemon.evolution['next-evolution'] !== undefined){
  
		   return pokemon.evolution['next-evolution'][0]['candy-cost'] === '12'}
  
		})
  
		document.getElementById("pokemonss").innerHTML = `
		${pokemonCandyTwelve.map(pokeCard).join('')}
		`
	 }
  
	 if(candyTwentyFive == true) {
  
		let pokemonCandyTwentyFive = pokemons.filter((pokemon) => {
  
		   if(pokemon.evolution['next-evolution'] !== undefined){
  
		   return pokemon.evolution['next-evolution'][0]['candy-cost'] === '25'}
  
		})
  
		document.getElementById("pokemonss").innerHTML = `
		${pokemonCandyTwentyFive.map(pokeCard).join('')}
		`
	 }

	 if(candyFifty == true) {

		let pokemonCandyFifty = pokemons.filter((pokemon) => {
  
		   if(pokemon.evolution['next-evolution'] !== undefined){
  
		   return pokemon.evolution['next-evolution'][0]['candy-cost'] === '50'}
  
		})
  
		document.getElementById("pokemonss").innerHTML = `
		${pokemonCandyFifty.map(pokeCard).join('')}
		`
	 }
  
	 if(candyAHundred == true) {
  
		let pokemonCandyAHundred = pokemons.filter((pokemon) => {
  
		   if(pokemon.evolution['next-evolution'] !== undefined){
  
		   return pokemon.evolution['next-evolution'][0]['candy-cost'] === '100'}
  
		})
  
		document.getElementById("pokemonss").innerHTML = `
		${pokemonCandyAHundred.map(pokeCard).join('')}
		`
	 }

	 if(candyFourHundred == true) {

		let pokemonCandyFourHundred = pokemons.filter((pokemon) => {
  
		   if(pokemon.evolution['next-evolution'] !== undefined){
  
		   return pokemon.evolution['next-evolution'][0]['candy-cost'] === '400'}
  
		})
  
		document.getElementById("pokemonss").innerHTML = `
		${pokemonCandyFourHundred.map(pokeCard).join('')}
		`
	 }

}


