//Ejecución general del programa.

import {getpokemoncito} from './data.js';
import {pokeCard, pokeIndividualInfo} from './pokeCards.js'
import data from './data/pokemon/pokemon.js';

const poks = data;
const pokemons = poks.pokemon;

let typesToFilter = [];
let candyToFilter = [];

/* VISUALIZAR LAS TARJETAS DE LOS POKEMONES EN LA PANTALLA PRINCIPAL. */
document.getElementById("pokemonss").innerHTML = pokemons.map(pokeCard).join('');

/*TARJETAS INFORMATIVAS DE CADA POKEMÓN AL DARLE CLICK. */

//Evento "onclick" a fin de ejecutar la función "getAPokemon" y ver las tarjetas informativas de cada pokemón.
let pokeContainer = document.getElementById ("pokemonss");
pokeContainer.addEventListener ("click", getAPokemon);

// La "e" es un parámetro que en este caso se refiere al "evento"
function getAPokemon (e) {
   //Si donde le estamos dando click ("e.target" muestra la información que tiene la sección al que le damos click) es diferente al contenedor general, entonces se ejecutará lo siguiente:
	if (e.target !== e.currentTarget) {     
      //Variable que contendra el "id" del objeto al que le demos click, en este caso a la tarejeta del Pokemón.
		let clickedItem = e.target.id;
      //Filtraremos la información del Pokemón y buscaremos su "num" = "id", el cual debe ser igual al "clickedItem" que definimos anteriormente.
		let getThisPokemon = pokemons.filter ((searchThisPokemon) => searchThisPokemon.num === clickedItem);
		
		document.getElementById("pokemonss").innerHTML = getThisPokemon.map(pokeIndividualInfo).join('');		
	}   
}

/*BUSCAR POR EL NOMBRE INDIVIDUAL DE POKEMÓN*/

let searchByName = document.getElementById ("searchName");

searchByName.onclick = function () {
    //la busqueda se escribirá en minuscula gracias a "toLowerCase" para que coincida con la información del array.
    let nameToSearch = document.getElementById ("nameToSearch").value.toLowerCase ();  
    let foundName = pokemons.filter ((filterName) => filterName.name == nameToSearch);
   
    document.getElementById("pokemonss").innerHTML = foundName.map(pokeIndividualInfo).join('');
};

/*BOTON PARA BUSCAR CON LOS FILTROS*/

let searchFilters = document.getElementById ("search");

searchFilters.onclick = function () {  
   //Borrar la información si ya no se quiere seleccionar algún el filtro de un input y solo queden los seleccionados.
	typesToFilter.length = 0;
	candyToFilter.length = 0;
  
	//Orden alfabético.
let arrangeAZ = document.getElementById("az").checked;
let arrangeZA = document.getElementById("za").checked;
   
    //Tipo de Pokemón.
	let typeCheckboxes = document.getElementsByName ("tFilter");

	for (let i=0; i<typeCheckboxes.length; i++) {
		if (typeCheckboxes[i].checked){
			typesToFilter.push(typeCheckboxes[i].id); 
		}
	}
	//Número de dulces.
	let candyCheckboxes = document.getElementsByName ("cFilter");

	for (let i=0; i<candyCheckboxes.length; i++) {
		if (candyCheckboxes[i].checked){
			candyToFilter.push(candyCheckboxes[i].id);
		}
	}

	//Filtrar por orden alfabético.
	if (arrangeAZ == true){
		//"sort" ordena los elementos de forma alfabética, todo depende del valor definido (1 y -1).
		let sortedPokemons = pokemons.sort (function (a,b) { 

			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		})	

		document.getElementById("pokemonss").innerHTML = sortedPokemons.map(pokeCard).join('');		
	}
	if (arrangeZA == true){

		let sortedPokemons = pokemons.sort(function(a,b){

			if (a.name < b.name) return 1;
			if (a.name > b.name) return -1;
			return 0;
		});
  
		document.getElementById("pokemonss").innerHTML = `${sortedPokemons.map(pokeCard).join('')}`
	}

	let uniqueTypeFilters = [...new Set(typesToFilter)]		//eslint-disable-line 
	let uniqueCandyFilters = [...new Set(candyToFilter)]	//eslint-disable-line 

	if(uniqueTypeFilters.length == 0 && uniqueCandyFilters.length == 0){
		return
	}else{
		document.getElementById("pokemonss").innerHTML = getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons, pokeCard)
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