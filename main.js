import {getpokemoncito} from './data.js';
import data from './data/pokemon/pokemon.js';

//Obtenemos la información de la base de datos local y los definimos en la constante "poks".
const poks = data;
//Obtenemos el objeto de cada Pokemón y lo guardamos en otra constante.
const pokemons = poks.pokemon;
//Aqui se guatdan todos los pokemones cuando verificamos que el input esta cheked
let typesToFilter = [];
//Aqui guardamos lod dulces, cuando el input esta checked
let candyToFilter = [];

/*TARJETAS DE POKEMONES EN LA PANTALLA PRINCIPAL*/

//Indicamos que en la sección "pokemonss" se va a pintar la información de los pokemons con el diseño de la pokeCard.
//Nota 1. "map" sirve para transformar / conservar el arreglo original. En este caso esta accediendo a cada pokemon del arreglo.
//Nota 2. "join('')" sirve para que existan espacios entre cada objeto.
document.getElementById("pokemonss").innerHTML = `
${pokemons.map(pokeCard).join('')}
`
  

/* VER LA INFORMACIÓN GENERAL DE CADA POKEMÓN DE FORMA INDIVIDUAL*/

//Definimos la variable del contenedor.
let pokeContainer = document.getElementById("pokemonss");

//Al contenedor le definimos un "eventyListener", que al hacer "click" ejecutará la función "getAPokemon"
pokeContainer.addEventListener("click", getAPokemon);

// Cuando se haga "click" se va a ejecutar la función "getAPokemon", donde la "e" es un parámetro que en este caso se refiere al "evento"
function getAPokemon(e) {
   //Si donde le estamos dando click es diferente al contenedor general, entonces se ejecutará lo siguiente:
	if (e.target !== e.currentTarget){
      //Nos muestra en pantalla toda la información que tiene la sección que estamos seleccionado, en este caso de la pokecard//
      // console.log("adios", e.target)
      //Nos muestra en pantalla la información del contenedor del pokemon.
      // console.log("aqui", e.currentTarget)
      //Definimos una variable que contendra el "id" del objeto al que le demos click, en este caso a la tarejeta del Pokemón.
		let clickedItem = e.target.id;
      //Definimos una variable, donde filtraremos la información del Pokemón y buscaremos su "num" = "id", el cual debe ser igual al "clickedItem" que definimos anteriormente.
		let getThisPokemon = pokemons.filter((searchThisPokemon) => searchThisPokemon.num === clickedItem)
		//Pintamos la información en pantalla
		document.getElementById("pokemonss").innerHTML = `
		${getThisPokemon.map(pokeIndividualInfo).join('')}
		`
	}   
}

/********************************************************************************** */

/*BOTON PARA BUSCAR POR NOMBRE*/

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
   };



/*BOTON PARA BUSCAR CON LOS FILTROS*/

//Definimos una variable para obtener el id del botón.
let searchFilters = document.getElementById("search");
//Definimos el evento del DOM "onclick" del botón.
searchFilters.onclick = function(){  
   //Borrar la información si ya no se quiere seleccionar algún el filtro de un input y solo queden los seleccionados
	typesToFilter.length = 0;
	candyToFilter.length = 0;


   //Se definen las variables para filtrar la información en orden alfabético.
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

   /*FILTRAR POKEMONES SEGÚN SU TIPO* ************************************/   
   // Los 3 puntos indican que estamos obteniendo los Pokemones que se guardaron en la constante "typesToFilter" y de todos los pokemones, se hace un "new set" del arreglo que corresponda a los filtros según el tipo que seleccionamos
   // Nota 1. Con "new" estamos indicando que vamos a crear un nuevo arreglo de los Pokemones ya filtrados en "typesTofIlter"
   // Nota 2. Con "set" nos aseguramos que no se repitan Pokemones, si es que se presiona 2 veces el botón buscar.
   /*eslint no-undef: "error"*/
   let uniqueTypeFilters = [...new Set(typesToFilter)];

   /*FILTRAR POR EL NÚMERO DE CARAMELOS QUE NECESITA CADA POKEMON PARA EVOLUCIONAR */	
	let uniqueCandyFilters = [...new Set(candyToFilter)];

   // Aqui estamos imprimiendo la función de getpokemoncito(que se encuentra en data), en relación a "uniquefilters (let definida con los pokemons)", "pokemons (const de los pokemones)" y "pokecard (diseño de las tarjetas)"
   //console.log (getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons, pokeCard));

      //Definimos una variable con la información ya filtrada totalmente de los pokemones.
      let filteredMappedPokemons = getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons, pokeCard)

       //console.log("hola", filteredMappedPokemons)

      // Si no existen pokemones filtradsos por tipo que correspondan al numero de caramelos seleccionados, se verá el mensaje "No hay pokemones"
	if(filteredMappedPokemons.length == 0){
     
      document.getElementById("pokemonss").innerHTML = `<h1>No hay ningún Pokemon disponible!</h1>`
        // Si existen pokemones filtradsos por tipo que correspondan al numero de caramelos seleccionados, se desplegarán en la pantalla.
	}else{
		document.getElementById("pokemonss").innerHTML = filteredMappedPokemons
       }   
}

   //Refrescar la pantalla
   let refrescar = document.getElementById("regresar");
   //Definimos el evento del DOM "onclick" del botón, para que se vean todos los pokemones cuando lo presionen
   refrescar.onclick = function(){   
    document.getElementById("pokemonss").innerHTML = `
    ${pokemons.map(pokeCard).join('')}
    `  
   }

   //query del navbar

   let desplegar = document.getElementById("menu");

   desplegar.onclick = function(){

      var navbar = document.getElementById("nav");
      
      navbar.classList.toggle("show");
   }
