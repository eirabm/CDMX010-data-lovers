// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};



export let getpokemoncito=(filterby, pokemons, pokeCard)=>{
  if(filterby){
  
   let filters = filterby.map((filtro)=> pokemons.filter((pokemon) => pokemon.type[0] === filtro))

   let manyfilters = filters.length

   let mappedPokemons = filters.map((poke) => poke.map(pokeCard))

   return mappedPokemons


//los poquemones filtrados
  }else{
//los poquemones sin filtro
return "ale"
  }

}