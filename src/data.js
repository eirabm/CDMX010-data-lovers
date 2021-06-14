//Filtrar cuando se buscan solo los dules de pos pokemones.
let getcandy = (filterby, pokemons)=>{
  
  let pokemonsWithEvolution = pokemons.filter ((filtro) => filtro.evolution['next-evolution']);

  let filterCandy = filterby.map((filtro) => candy(filtro, pokemonsWithEvolution));
  return filterCandy
};

const candy = (filtro, pokemonsWithEvolution) => pokemonsWithEvolution.filter ((pokemon) => 
pokemon.evolution['next-evolution'][0]['candy-cost'] === filtro)

export let getpokemoncito = (filterbyType, filterbyCandy, pokemons) => {

  if (filterbyType.length > 0) {

    let filteredType = filterbyType.map ((filtro) => pokemons.filter ((pokemon) => pokemon.type[0] === filtro));

        if (filterbyCandy.length == 0) {

          return filteredType

        }else if (filterbyCandy.length > 0 ){

          let pokemonsWithEvolution = filteredType.map ((evoPoke) => evoPoke.filter ((filtro) => filtro.evolution['next-evolution']))

          let filterCandy = filterbyCandy.map((filtro)=> pokemonsWithEvolution.map((pokeEvoCandy) => candy(filtro, pokeEvoCandy)))
          
          return filterCandy
        }
  }else if (filterbyCandy.length > 0) {    
      
    return getcandy(filterbyCandy, pokemons)}

}

export let searchName = (pokemons, nameToSearch) =>{
  let foundName = pokemons.filter((filterName) => filterName.name.includes(nameToSearch));
  return foundName
}

export let filterAZ = (pokemons)=>{
  let sortedPokemons = pokemons.sort (function (a,b) { 

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
  console.log(sortedPokemons)
  return sortedPokemons
}

export let filterZA = (pokemons) =>{
  let sortedPokemons = pokemons.sort (function (a,b) { 

    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  })
  
  return sortedPokemons
}

