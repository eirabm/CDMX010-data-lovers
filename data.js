// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// let buttonSearchAlphabet = document.getElementById("search");

// buttonSearchAlphabet.onclick = function(){
//   let alphabet = names.sort();
//   document.getElementById("pokemonss").innerHTML = alphabet;
// };
let algoalpokemon=(pokemon)=>{
  let estudiante=`Eira y ale ya usen los pokemones ${pokemon}`
  return estudiante
}

export let  getpokemoncito=(filterby,orderby)=>{
  if(filterby){
    filterby.map(pokemon=>{
      console.error(algoalpokemon(pokemon))
    })
//los poquemones filtrados

return filterby.length
  }else{
//los poquemones sin filtro
return "ale"
  }

}