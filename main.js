import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

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


/*ADQUIRIR VARIABLES POR MEDIO DE MAP
let name = pokemons.map((pokeName) => pokeName.name);
let pokeTypes = pokemons.map((pokeType) => pokeType.type[0]);
let imagen = pokemons.map((pokeImg) => pokeImg.img);
let number = pokemons.map((pokeNum) => pokeNum.num);*/

document.getElementById("pokemonss").innerHTML = `
${pokemons.map(pokeCard).join('')}
`

function pokeCard (pokemones, index){

   return `
   <div class="pokemonCard" id= "pokemonCard" style="background-color:${colors[pokemones.type[0]]}; cursor: pointer" onclick= "getPokemon()">
   <div class="imgContainer">
   <img src="${pokemones.img}"/> </div>
   <div class="info">
   <span class= "number"> # ${pokemones.num} </span>
   <h3 class = "name">${pokemones.name[0].toUpperCase()+pokemones.name.slice(1)} </h3>
   <small class="type"> Tipo: <span>${pokemones.type[0]} </span></small>
   </div>
   </div>`
}

function pokeIndividualInfo (pokemones){
   return `
   <div class="individualPokeCard">
   <div class="imgContainter">
   <img src="${pokemones.img}"/> </div>
   <div class="info" style="background-color:${colors[pokemones.type[0]]}">
   <span class= "number"> # ${pokemones.num} </span>
   <h3 class = "name">${pokemones.name[0].toUpperCase()+pokemones.name.slice(1)} </h3>
   <small class="type"> Tipo: <span>${pokemones.type[0]} </span></small>
   <p class = "about">${pokemones.about}</p>
   <p>${pokemones.evolution}</p>
   </div>
   `
}

window.getPokemon = function showThisPokemon(){
   
   for (let i=0; i < document.getElementById("pokemonss").children.length ; i++){
      document.getElementById("pokemonss").children[i].onclick = function(){

         let pokemonIndex = i;

         let getThisPokemon = pokemons.filter((searchThisPokemon) => searchThisPokemon.num == (i + 1))

         document.getElementById("pokemonss").innerHTML = `
         ${getThisPokemon.map(pokeIndividualInfo).join('')}
         `
        }
      };
   }



/*BOTON BUSCAR POR NOMBRE*/
let searchByName = document.getElementById("searchName");
searchByName.onclick = function(){

    let nameToSearch = document.getElementById("nameToSearch").value.toLowerCase();

    let foundName = pokemons.filter((filterName) => filterName.name == nameToSearch)

    document.getElementById("pokemonss").innerHTML = `
    ${foundName.map(pokeIndividualInfo).join('')}
    `
   }


/*BOTON BUSCAR*/
let searchFilters = document.getElementById("search");
searchFilters.onclick = function(){

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

   if (bugFinder == true){

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