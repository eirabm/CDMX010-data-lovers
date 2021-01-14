// estas funciones son de ejemplo

let getcandy = (filterby, pokemons, pokeCard)=>{
  
    let pokemonsWithEvolution = pokemons.filter((filtro)=> filtro.evolution['next-evolution'])

    let filterCandy = filterby.map((filtro)=> pokemonsWithEvolution.filter((pokemon) => 
    pokemon.evolution['next-evolution'][0]['candy-cost'] === filtro))

    let candyMappedPokemons = filterCandy.map((poke) => poke.map(pokeCard).join(''))

   return candyMappedPokemons
}



export let getpokemoncito=(filterbyType, filterbyCandy, pokemons, pokeCard)=>{


  if(filterbyType.length > 0){

    let filteredType = filterbyType.map((filtro)=> pokemons.filter((pokemon) => pokemon.type[0] === filtro))

    let mappedPokemons = filteredType.map((poke) => poke.map(pokeCard).join('')).join('')

    
      if(filterbyCandy.length == 0){

        return mappedPokemons
      }
      else if(filterbyCandy.length > 0){

        let pokemonsWithEvolution = filteredType.map((evoPoke) => evoPoke.filter((filtro)=> filtro.evolution['next-evolution']))

        let filterCandy = filterbyCandy.map((filtro)=> pokemonsWithEvolution.map((pokeEvoCandy) => pokeEvoCandy.filter((pokemon) => 
        pokemon.evolution['next-evolution'][0]['candy-cost'] === filtro)))

        let candyMappedPokemons = filterCandy.map((mapCandy) => mapCandy.map((poke) => poke.map(pokeCard).join('')).join(''))


        return candyMappedPokemons
       }
  }else if(filterbyCandy.length > 0) {
      
    return getcandy(filterbyCandy, pokemons, pokeCard)}
}
    
    