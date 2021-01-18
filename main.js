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
//Definimos una constante con un arreglo de colores.
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

/*TARJETAS DE POKEMONES EN LA PANTALLA PRINCIPAL*/

//Indicamos que en la sección "pokemonss" se va a pintar la información de los pokemons con el diseño de la pokeCard.
//Nota 1. "map" sirve para transformar / conservar el arreglo original. En este caso esta accediendo a cada pokemon del arreglo.
//Nota 2. "join('')" sirve para que existan espacios entre cada objeto.
document.getElementById("pokemonss").innerHTML = `
${pokemons.map(pokeCard).join('')}
`
/*ESTILO DE LAS TARJETAS PRINCIPALES  DE LOS POKEMONES */

//Se define una función, indicando el siseño que contendrá cada tarjeta Pokemón de la pantalla principal, usando un "literal Template"
//Nota 1. "toUpperCase" esta indicando que las letra sea en mayuscula y con "slice" lo cortamos para que las siguientes se sigan viendo en minusculas.
//Nota 2. "span" se utiliza para utilizar/enfatizar unicamente en una parte del texto y no todo un bloque como lo hace "div"
//Nota 3. "small" se utiliza para hacer pequeño una parte del texto.

function pokeCard(pokemones){
   return `
   <div class="pokemonCard" id= "${pokemones.num}" style="background-color:${colors[pokemones.type[0]]}; cursor: pointer" onclick= "getPokemon()">
   <div class="imgContainer">
   <img src="${pokemones.img}"/> </div>
   <div class="info">
   <span class= "number"> # ${pokemones.num} </span>
   <h3 class = "name">${pokemones.name[0].toUpperCase()+pokemones.name.slice(1)} </h3>
   <small class="type"> Tipo: <span>${pokemones.type[0]} </span></small>
   </div>
   </div>`
};


/*ESTILO DE LAS TARJETAS INFORMATIVAS  DE LOS POKEMONES */

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
   </div>  
   </div> 
   </div>   
   </div>   
   `
};

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
   
   //Filtro por tipo de Pokemón
   //Utilizamos un operador ternario para definir las condiciones = Si el input de "bug" se encuentra checked, entonces se va a empujar ese insecto a la variable vacia "typesToFilter" que definimos al principio, si no no va a realizar nada.
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

   /*FILTRAR POKEMONES SEGÚN SU TIPO* ************************************/   
   // Los 3 puntos indican que estamos obteniendo los Pokemones que se guardaron en la constante "typesToFilter" y de todos los pokemones, se hace un "new set" del arreglo que corresponda a los filtros según el tipo que seleccionamos
   // Nota 1. Con "new" estamos indicando que vamos a crear un nuevo arreglo de los Pokemones ya filtrados en "typesTofIlter"
   // Nota 2. Con "set" nos aseguramos que no se repitan Pokemones, si es que se presiona 2 veces el botón buscar.
   let uniqueTypeFilters = [...new Set(typesToFilter)];

   /*FILTRAR POR EL NÚMERO DE CARAMELOS QUE NECESITA CADA POKEMON PARA EVOLUCIONAR */	
	let uniqueCandyFilters = [...new Set(CandyToFilter)];

   // Aqui estamos imprimiendo la función de getpokemoncito(que se encuentra en data), en relación a "uniquefilters (let definida con los pokemons)", "pokemons (const de los pokemones)" y "pokecard (diseño de las tarjetas)"
   console.log (getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons, pokeCard));

      //Definimos una variable con la información ya filtrada totalmente de los pokemones.
      let filteredMappedPokemons = getpokemoncito(uniqueTypeFilters, uniqueCandyFilters, pokemons, pokeCard)

       console.log("hola", filteredMappedPokemons)

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
