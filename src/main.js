//Ejecución general del programa.
import data from './data/pokemon/pokemon.js';
import {filterAZ, filterZA, getpokemoncito, searchName} from './data.js';
import {pokeCard, pokeIndividualInfo} from './pokeCards.js'

const poks = data;
const pokemons = poks.pokemon;


let typesToFilter = [];
let candyToFilter = [];

/* VISUALIZAR LAS TARJETAS DE LOS POKEMONES EN LA PANTALLA PRINCIPAL. */
document.getElementById("pokemonss").innerHTML = pokemons.map(pokeCard).join('');

/*TARJETAS INFORMATIVAS DE CADA POKEMÓN AL DARLE CLICK. */
let pokeContainer = document.getElementById ("pokemonss");
pokeContainer.addEventListener ("click", getAPokemon);

function getAPokemon (e) {
	if (e.target !== e.currentTarget && e.target.id !== '') { 
		let clickedItem = e.target.id;
		let getThisPokemon = pokemons.filter ((searchThisPokemon) => searchThisPokemon.num === clickedItem);
		
		document.getElementById("pokemonss").innerHTML = getThisPokemon.map(pokeIndividualInfo).join('');		
	}   
}

/*BUSCAR POR EL NOMBRE INDIVIDUAL DE POKEMÓN*/

let searchByName = document.getElementById ("nameToSearch");
searchByName.oninput = function () {
	let nameToSearch = document.getElementById ("nameToSearch").value.toLowerCase(); 

    let filteredPokemon = searchName(pokemons, nameToSearch)
    document.getElementById("pokemonss").innerHTML = filteredPokemon.map(pokeCard).join('');
}

/*BOTON PARA BUSCAR CON LOS FILTROS*/
function getFilters() {
	typesToFilter.length = candyToFilter.length = 0;

	let typeCheckboxes = document.getElementsByName("tFilter");

	//Número de dulces.
	let candyCheckboxes = document.getElementsByName ("cFilter");

	for (let i=0; i<typeCheckboxes.length; i++) {
		if (typeCheckboxes[i].checked){
			typesToFilter.push(typeCheckboxes[i].id); 
		}
	}

	for (let i=0; i<candyCheckboxes.length; i++) {
		if (candyCheckboxes[i].checked){
			candyToFilter.push(candyCheckboxes[i].id);
		}		
	}
}


let searchFilters = document.getElementById("filter-list");
searchFilters.onclick = function () { 
	getFilters()

	//Filtrar por orden alfabético.
	if (document.getElementById("az").checked){
		let sortedPokemons = filterAZ(pokemons)
		document.getElementById("pokemonss").innerHTML = sortedPokemons.map(pokeCard).join('');		
	}
	
	if (document.getElementById("za").checked){
		let sortedPokemons = filterZA(pokemons)
		document.getElementById("pokemonss").innerHTML = sortedPokemons.map(pokeCard).join('');		
	}

	let uniqueTypeFilters = [...new Set(typesToFilter)]		//eslint-disable-line 
	let uniqueCandyFilters = [...new Set(candyToFilter)]	//eslint-disable-line 

	let filteredPokemons = getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons)


	if(uniqueTypeFilters.length == 0 && uniqueCandyFilters.length == 0){
		document.getElementById("pokemonss").innerHTML = pokemons.map(pokeCard).join('');
		return
	}else if(uniqueTypeFilters.length > 0 && uniqueCandyFilters.length > 0){
		document.getElementById("pokemonss").innerHTML = filteredPokemons.map((mapCandy) => mapCandy.map((poke) => poke.map(pokeCard).join('')).join(''))
	}else if (uniqueTypeFilters.length > 0 || uniqueCandyFilters.length > 0){
		document.getElementById("pokemonss").innerHTML = filteredPokemons.map ((poke) => poke.map (pokeCard).join('')).join('');

	}
}

let refrescar = document.getElementById("regresar");

refrescar.onclick = function () {   
	document.getElementById("pokemonss").innerHTML = pokemons.map(pokeCard).join('')  
}

/* QUERY DEL NAVBAR */

let desplegar = document.getElementById("menu");

desplegar.onclick = function () {
    var navbar = document.getElementById("nav");      
    navbar.classList.toggle("show");
};