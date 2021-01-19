//En esta sección se filtra la información.

//Obtener a los pokemones con solo las casillas de los dulces seleccionadas.
let getcandy = (filterby, pokemons, pokeCard) => {
  
  let pokemonsWithEvolution = pokemons.filter ((filtro) => filtro.evolution['next-evolution']);

  let filterCandy = filterby.map ((filtro) => pokemonsWithEvolution.filter ((pokemon) => 
  pokemon.evolution['next-evolution'][0]['candy-cost'] === filtro));

  let candyMappedPokemons = filterCandy.map ((poke) => poke.map(pokeCard).join(''));

  return candyMappedPokemons;
};



export let getpokemoncito = (filterbyType, filterbyCandy, pokemons, pokeCard) => {
  //Si tenemos un input de "type" seleccionado.
  if (filterbyType.length > 0) {

    let filteredType = filterbyType.map ((filtro) => pokemons.filter ((pokemon) => pokemon.type[0] === filtro));

    let mappedPokemons = filteredType.map ((poke) => poke.map (pokeCard).join('')).join('');

    //Si no tenemos ningun input de "candys" seleccionados, entonces regresa los de input "type".
    if (filterbyCandy.length == 0) {
        return mappedPokemons
    }
    //Si tenemos un input de "candys" seleccionado
    else if (filterbyCandy.length > 0 ){

        let pokemonsWithEvolution = filteredType.map ((evoPoke) => evoPoke.filter ((filtro) => filtro.evolution['next-evolution']));

        let filterCandy = filterbyCandy.map ((filtro) => pokemonsWithEvolution.map ((pokeEvoCandy) => pokeEvoCandy.filter ((pokemon) => 
        pokemon.evolution['next-evolution'][0]['candy-cost'] === filtro)));

        let candyMappedPokemons = filterCandy.map ((mapCandy) => mapCandy.map((poke) => poke.map(pokeCard).join('')).join(''));

        return candyMappedPokemons;
    }
    //Si solo tenemos input "candy" seleccionados
  } else if (filterbyCandy.length > 0) {      
    return getcandy (filterbyCandy, pokemons, pokeCard)};
};

