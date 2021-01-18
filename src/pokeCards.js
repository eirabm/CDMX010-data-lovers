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
 }
 
 
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
       <span class="linee></span>     
     </div>   
     </div>   
     `
  }    

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

	document.getElementById("twelveCandy").checked ? candyToFilter.push('12') : '';
	document.getElementById("twentyFiveCandy").checked ? candyToFilter.push('25') : '';
    document.getElementById("fiftyCandy").checked ? candyToFilter.push('50') : '';
    document.getElementById("aHundredCandy").checked ? candyToFilter.push('100') : '';
    document.getElementById("fourhundredCandy").checked ? candyToFilter.push('400') : '';