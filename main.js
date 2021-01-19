import {getpokemoncito} from './data.js';
import {pokeCard, pokeIndividualInfo} from './pokeCards.js';

import data from './data/pokemon/pokemon.js';

const poks = data;
const pokemons = poks.pokemon;

let typesToFilter = [];
let CandyToFilter = [];

document.getElementById("pokemonss").innerHTML = pokemons.map(pokeCard).join('')


let pokeContainer = document.getElementById("pokemonss");
pokeContainer.addEventListener("click", getAPokemon);

function getAPokemon(e) {
	if (e.target !== e.currentTarget){
   
		let clickedItem = e.target.id;
		let getThisPokemon = pokemons.filter((searchThisPokemon) => searchThisPokemon.num === clickedItem)

		document.getElementById("pokemonss").innerHTML = getThisPokemon.map(pokeIndividualInfo).join('')
	}   
}


/*BOTON PARA BUSCAR POR NOMBRE*/

let searchByName = document.getElementById("searchName");
searchByName.onclick = function(){

	let nameToSearch = document.getElementById("nameToSearch").value.toLowerCase();
	let foundName = pokemons.filter((filterName) => filterName.name == nameToSearch)
	
    document.getElementById("pokemonss").innerHTML = foundName.map(pokeIndividualInfo).join('')
   }


/*BOTON PARA BUSCAR CON LOS FILTROS*/

let searchFilters = document.getElementById("search");
searchFilters.onclick = function(){  

	typesToFilter.length = 0;
	CandyToFilter.length = 0;

   let arrangeAZ = document.getElementById("az").checked;
   let arrangeZA = document.getElementById("za").checked;


   let typeCheckboxes = document.getElementsByName("tFilter")
   for (let i=0; i<typeCheckboxes.length; i++) {
		if (typeCheckboxes[i].checked){
        typesToFilter.push(typeCheckboxes[i].id)}}
	
	let candyCheckboxes = document.getElementsByName("cFilter")
	for (let i=0; i<candyCheckboxes.length; i++) {
		if (candyCheckboxes[i].checked){
		CandyToFilter.push(candyCheckboxes[i].id)}}


	if (arrangeAZ == true){

		let sortedPokemons = pokemons.sort(function(a,b){
  
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		})

		document.getElementById("pokemonss").innerHTML = sortedPokemons.map(pokeCard).join('') 
	}
  
	if (arrangeZA == true){
		let sortedPokemons = pokemons.sort(function(a,b){
			if (a.name < b.name) return 1;
			if (a.name > b.name) return -1;
			return 0;
		});
  
		document.getElementById("pokemonss").innerHTML = sortedPokemons.map(pokeCard).join('') 
	}

	let uniqueTypeFilters = [...new Set(typesToFilter)];
	let uniqueCandyFilters = [...new Set(CandyToFilter)];

	document.getElementById("pokemonss").innerHTML = getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons, pokeCard)
	}

   let refrescar = document.getElementById("regresar");
   refrescar.onclick = function(){   
    document.getElementById("pokemonss").innerHTML = pokemons.map(pokeCard).join('') 
   }

   //query del navbar

   let desplegar = document.getElementById("menu");

   desplegar.onclick = function(){

      var navbar = document.getElementById("nav");
      
      navbar.classList.toggle("show");
   }
