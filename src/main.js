import {example} from './data.js';

import data from './data/pokemon/pokemon.js';

//Obtenemos todos los datos del arreglo en una variable.
const poks = data;
//Obtenemos solo la información de los pokemones del arreglo.
const pokemons = poks.pokemon;

// const nextEvolution = poks.evolution;
// console.log("HOLA", nextEvolution)

//Definimos una variable donde se empujarán y guardarán los nombres de los pokemons *****************
var names = [];
//Definimos los colores de cada pokemon según su tipo.
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
// for (let i = 0; i < pokemons.length; i++){
//    //Obtenemos el nombre de cada objeto del arreglo
//    let name = pokemons[i].name;
//    //Empujamos los nombres obtenidos a la variable
//    names.push(name);  
// };

// //alfabeticamente
// names.sort();
// console.log("hola", names)
// //reversible alfabeticamente
// names.reverse();
// console.log("adios", names)

//************************************************ */



// let searchAlphabet = document.getElementById("search");

// searchAlphabet.onclick = function(){

//    let nameAz = document.getElementById("az").checked;

//    if(nameAz == true){
//      let sortPokemons = pokemons.sort(function(a, b){
//          if (a.name < b.name) return -1;         
//          if (a.name > b.name) return 1;        
//          return 0;
//       });

//       document.getElementById("pokemonss").innerHTML = `
//       ${sortPokemons.map(pokeCard).join('')}
//       `
   
//    }
// };


//***************************************************** */

// let searchAlphabet = document.getElementById("search");
// searchAlphabet.onclick = function(){
   
//    let nameAz = document.getElementById("az").checked;
   
//    if (nameAz == true){
//       let pokemonNameAz = pokemons.sort();
//       console.log("boton", pokemonNameAZ)

//       document.getElementById("pokemonss").innerHTML = `
//     ${pokemonNameAz.join('')}
//     `
//    } 
// }



//********************************************************************************** */

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
    ${foundName.map(pokeCard).join('')}
    `
   }

/*BOTON BUSCAR*/

//Definimos una variable para obtener el id del botón.
let searchFilters = document.getElementById("search");
//Definimos el evento del DOM "onclick" del botón.
searchFilters.onclick = function(){
   //Se definen las variables.
   let arrangeAZ = document.getElementById("az").checked;
   let arrangeZA = document.getElementById("za").checked;

   let bugFinder = document.getElementById("bug").checked;
   let darkFinder = document.getElementById("dark").checked;
   let dragonFinder = document.getElementById("dragon").checked;
   let electricFinder = document.getElementById("electric").checked;
   let fairyFinder = document.getElementById("fairy").checked;
   let fightingFinder = document.getElementById("fighting").checked;
   let fireFinder = document.getElementById("fire").checked; 
   let ghostFinder = document.getElementById("ghost").checked;
   let grassFinder = document.getElementById("grass").checked;
   let groundFinder = document.getElementById("ground").checked;
   let iceFinder = document.getElementById("ice").checked;
   let normalFinder = document.getElementById("normal").checked;
   let poisonFinder = document.getElementById("poison").checked;
   let psychicFinder = document.getElementById("psychic").checked;
   let rockFinder = document.getElementById("rock").checked;
   let steelFinder = document.getElementById("steel").checked;
   let waterFinder = document.getElementById("water").checked;
  
   let twelveCandyFinder = document.getElementById("twelve").checked;

   /*ORDENAR ELEMENTOS DE LA A-Z*/

   //Si el "input" fue seleccionado entonces ejecutará lo siguiente
   if (arrangeAZ == true){
      //Se define una variable, donde se acomodarán alfabeticamente con "sort", sort recibe una función con 2 parámetros "a,b"
      let sortedPokemons = pokemons.sort(function(a,b){
         //Si el nombre ("name", se debe definir la informacion que se requiere)de a es menor al nombre de b, entonces será -1 (Comienzará en "A")
         if (a.name < b.name) return -1;
         //Si el nombre ("name", se debe definir la informacion que se requiere)de a es mayor al nombre de b, entonces será 1 (Comienzará en "Z")
         if (a.name > b.name) return 1;
         //Si ambos nombres son iguales, retornará 0.
         return 0;
      });
      //Se indica donde se momstrará la información pintada.
      document.getElementById("pokemonss").innerHTML = `
      ${sortedPokemons.map(pokeCard).join('')}
      ` 
   }

   /*ORDENAR ELEMENTOS DE LA Z-A*/

   //Es lo mismo que el filtro anterior, solo la posición de -1 y 1 cambió.
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

   /*ORDENAR ELEMENTOS SEGÚN SU TIPO*/

   //Si el "input" fue seleccionado entonces ejecutará lo siguiente
   if (bugFinder == true){
      //Se filtra la información del arreglo usando "filter", el cual recibe una función.
      //Nota 1. "pokeBug" es un parámetro que nosotros definimos, donde se guardarán los pokemones de tipo "bug" y comenzará desde el primero que encuentre "0"
      let pokemonTypeBug = pokemons.filter((pokeBug) => pokeBug.type[0] === 'bug')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeBug.map(pokeCard).join('')}
      `
   } 
   
   if(darkFinder == true) {
      let pokemonTypeDark = pokemons.filter((pokeDark) => pokeDark.type[0] === 'dark')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeDark.map(pokeCard).join('')}
      `
   }

   if(dragonFinder == true) {
      let pokemonTypeDragon = pokemons.filter((pokeDragon) => pokeDragon.type[0] === 'dragon')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeDragon.map(pokeCard).join('')}
      `
   }

   if(electricFinder == true) {
      let pokemonTypeElectric = pokemons.filter((pokeElectric) => pokeElectric.type[0] === 'electric')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeElectric.map(pokeCard).join('')}
      `
   }

   if(fairyFinder == true) {
      let pokemonTypeFairy = pokemons.filter((pokeFairy) => pokeFairy.type[0] === 'fairy')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeFairy.map(pokeCard).join('')}
      `
   }

   if(fightingFinder == true) {
      let pokemonTypeFighting = pokemons.filter((pokeFighting) => pokeFighting.type[0] === 'fighting')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeFighting.map(pokeCard).join('')}
      `
   }

   if(fireFinder == true) {
      let pokemonTypeFire = pokemons.filter((pokeFire) => pokeFire.type[0] === 'fire')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeFire.map(pokeCard).join('')}
      `
   }

   if(ghostFinder == true) {
      let pokemonTypeGhost = pokemons.filter((pokeGhost) => pokeGhost.type[0] === 'ghost')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeGhost.map(pokeCard).join('')}
      `
   }

   if(grassFinder == true) {
      let pokemonTypeGrass = pokemons.filter((pokeGrass) => pokeGrass.type[0] === 'grass')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeGrass.map(pokeCard).join('')}
      `
   }

   if(groundFinder == true) {
      let pokemonTypeGround = pokemons.filter((pokeGround) => pokeGround.type[0] === 'ground')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeGround.map(pokeCard).join('')}
      `
   }

   if(iceFinder == true) {
      let pokemonTypeIce = pokemons.filter((pokeIce) => pokeIce.type[0] === 'ice')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeIce.map(pokeCard).join('')}
      `
   }

   if(normalFinder == true) {
      let pokemonTypeNormal = pokemons.filter((pokeNormal) => pokeNormal.type[0] === 'normal')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeNormal.map(pokeCard).join('')}
      `
   }

   if(poisonFinder == true) {
      let pokemonTypePoison = pokemons.filter((pokePoison) => pokePoison.type[0] === 'poison')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypePoison.map(pokeCard).join('')}
      `
   }

   if(psychicFinder == true) {
      let pokemonTypePsychic = pokemons.filter((pokePsychic) => pokePsychic.type[0] === 'psychic')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypePsychic.map(pokeCard).join('')}
      `
   }

   if(rockFinder == true) {
      let pokemonTypeRock = pokemons.filter((pokeRock) => pokeRock.type[0] === 'rock')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeRock.map(pokeCard).join('')}
      `
   }

   if(steelFinder == true) {
      let pokemonTypeSteel = pokemons.filter((pokeSteel) => pokeSteel.type[0] === 'steel')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeSteel.map(pokeCard).join('')}
      `
   }

   if(waterFinder == true) {
      let pokemonTypeWater = pokemons.filter((pokeWater) => pokeWater.type[0] === 'water')

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonTypeWater.map(pokeCard).join('')}
      `
   }

   if(twelveCandyFinder == true) {      

      let evolucion = pokemons.evolution
      console.log(" AQUI", evolucion);

      let pokemonCandyTwelve = pokemons.filter((pokemon) => {
         console.log("1", pokemon) //acceder al pokemon
         console.log("2", pokemon.evolution) //acceder a la evolucion
         console.log("3", pokemon.evolution['next-evolution']) //acceder a la siguiente evolucion
         console.log("4", pokemon.evolution['next-evolution'][0]) 
         pokemon.evolution['next-evolution'][0]['candy-cost'] === "12"
      })
      console.log("hola", pokemonCandyTwelve)

      document.getElementById("pokemonss").innerHTML = `
      ${pokemonCandyTwelve.map(pokeCard).join('')}
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