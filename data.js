// EN ESTA SECCIÓN SE FILTRA LA INFORMACIÓN.

/*OBTENER LOS POKEMONES FILTRADOS POR UNICAMENTE PORSUS CARAMELOS*/


let getcandy = (filterby, pokemons, pokeCard)=>{
  // Vamos a acceder a la información de los pokemóns, en reación a su tipo "filteredType.map (evoPoke)"
  // Vamos a acceder al tipo del pokemón y de ahí lo filtraremos, verificando que el pokemón al ue accedimos cuente con una evolución "next-evolution"  
  let pokemonsWithEvolution = pokemons.filter((filtro)=> filtro.evolution['next-evolution'])
  // Ahora vamos a filtrar los caramelos, para esto vamos a acceder a los objetos de los dulces, si es que si se seleccionó una casilla.
  // Accederemos a los pokemones que si tienen evolución y cuentan con el número de dulces que se seleccionó en el input.
  // Accedemos a la iformación de la data, a fin de igualarla al tipo de dulces que se seleccionó. 
  let filterCandy = filterby.map((filtro)=> pokemonsWithEvolution.filter((pokemon) => 
  pokemon.evolution['next-evolution'][0]['candy-cost'] === filtro))
  // Accedemos a los objetos de "filterCandy" y le definimos el formato de la pokecard.
  let candyMappedPokemons = filterCandy.map((poke) => poke.map(pokeCard).join(''))

  return candyMappedPokemons
};




/*OBTENER LOS POKEMONES FILTRADOS POR LOS TIPOS SELECCIONADOS*/

// Función general donde se definen los filtros por tipo de Pokemón y los caramelos que necesitan para evolucionar.
export let getpokemoncito=(filterbyType, filterbyCandy, pokemons, pokeCard)=>{

/* SI SE SELECCIONA SOLO EL TIPO DE POKEMÓN, SIN HABER SELECCIONADO CARAMELOS, SE EJECUTA LO SIGUIENTE */

// Aqui se esta indicando que si "filterbyType" no esta vacío (es mayor que 0), entonces va a ejecutar lo siguiente:
if(filterbyType.length > 0){
  //Accedemos a cada Pokemón en relación a su tipo.
 
   // filterby.map (filtro) = Esto significa que: "Supongamos que queremos filtrar los pokemones de tipo Agua"
   // pokemons.filter (pokemon) = Esto significa que: "Para obtener el objeto agua, accederemos a filtrar la información de "Pokemons""
   // pokemon.type [0] === filtro = Esto significa que: "Al ingresar a la información Pokemons, vamos a acceder ahora a su tipo, que este tipo debe ser igual al de "Agua""
   // Nota 1. Todo esto es como un ciclo, donde esto se ejecutará varias veces por todos los tipos en relación a cada Pokemón.
  let filteredType = filterbyType.map((filtro)=> pokemons.filter((pokemon) => pokemon.type[0] === filtro))

   //Accedemos nuevamente a cada Pokemon en relación a su tipo y a cada uno le definimos el diseño de la pokecard.

     // "let filters" cuando termina de hacer el ciclo, nos regresa un arreglo. -> FILTER Y MAP SIEMPRE REGRESA COMO RESULTADO ARREGLOS.
     // Nota 1. Como ahora tenemos un nuevo arreglo que es diferente al que nos presenta la base de datos (me refiero a que la estructura no es la misma), no coincidirá con el diseño de la pokeCard.
     // para que el arreglo coincida con la pokeCard, es ingresar a cada elemento de "filters" y definirle el diseño de la pokeCard.
  let mappedPokemons = filteredType.map((poke) => poke.map(pokeCard).join('')).join('')

    /* SI NO SE SELECCIONA NINGUN CARAMELO */

    // Se agrega una condicional donde se menciona que si no se selecciona ningun input de caramelos, entonces regresarán los pokemones mapeados "mappedPokemons"
    if(filterbyCandy.length == 0){

      return mappedPokemons
    }
    /* SI SE SELECCIONA EL TIPO DE POKEMÓN Y LOS DULCES SE EJECUTA LO SIGUIENTE */

    // Sin embargo, si si se selecciona un input de los caramelos "es mayor que 0" entonces se va a filtrar la información:
    else if(filterbyCandy.length > 0){
      // Vamos a acceder a la información de los pokemóns, en reación a su tipo "filteredType.map (evoPoke)"
      // Vamos a acceder al tipo del pokemón y de ahí lo filtraremos, verificando que el pokemón al ue accedimos cuente con una evolución "next-evolution"      
      let pokemonsWithEvolution = filteredType.map((evoPoke) => evoPoke.filter((filtro)=> filtro.evolution['next-evolution']))
      // Ahora vamos a filtrar los caramelos, para esto vamos a acceder a los objetos de los dulces, si es que si se seleccionó una casilla.
      // Accederemos a los pokemones que si tienen evolución y cuentan con el número de dulces que se seleccionó en el input.
      // Accedemos a la iformación de la data, a fin de igualarla al tipo de dulces que se seleccionó.
      // Como resultado, tenemos un arreglo con 2 arreglos adentro. 1 arreglo con la información general, 2. Arreglo con los pokemones que cuentan con siguiente evolución, 3. Arreglo con los dulces de la siguiente evolución seleccionados.
      let filterCandy = filterbyCandy.map((filtro)=> pokemonsWithEvolution.map((pokeEvoCandy) => pokeEvoCandy.filter((pokemon) => 
      pokemon.evolution['next-evolution'][0]['candy-cost'] === filtro)))

      console.log(filterCandy)
      // Requerimos 3 funciones, ya que son 3 niveles a los que tenemos que ingresar (Niveles explicados anteriormente)
      // Obtenemos los dulces filtrados, en relación al pokemon seleccionado por tipo y le definimos el formato de la pokecard.
      // Nota 1. Con los "join" evitamos que salan las comas entre cada objeto.
      let candyMappedPokemons = filterCandy.map((mapCandy) => mapCandy.map((poke) => poke.map(pokeCard).join('')))
      // Nos regresará e formato ya establecido, filtrado.
      return candyMappedPokemons
     }

     /* SI SOLO SE SELECCIONAN LOS CARAMEOS, PERO SIN TIPO DE POKEMON */
     
  //Si se seleccinó algun input de caramelos, sucede lo siguiente:   
} else if( filterbyCandy.length > 0) {
  // Nos regresará la función de "getcandy", la cual solo filtra los caramelos (se encuentra en la parte de abajo)  
  return getcandy(filterbyCandy, pokemons, pokeCard)}
};

// /*OBTENER LOS POKEMONES FILTRADOS POR UNICAMENTE PORSUS CARAMELOS*/


// let getcandy = (filterby, pokemons, pokeCard)=>{
//   // Vamos a acceder a la información de los pokemóns, en reación a su tipo "filteredType.map (evoPoke)"
//   // Vamos a acceder al tipo del pokemón y de ahí lo filtraremos, verificando que el pokemón al ue accedimos cuente con una evolución "next-evolution"  
//   let pokemonsWithEvolution = pokemons.filter((filtro)=> filtro.evolution['next-evolution'])
//   // Ahora vamos a filtrar los caramelos, para esto vamos a acceder a los objetos de los dulces, si es que si se seleccionó una casilla.
//   // Accederemos a los pokemones que si tienen evolución y cuentan con el número de dulces que se seleccionó en el input.
//   // Accedemos a la iformación de la data, a fin de igualarla al tipo de dulces que se seleccionó. 
//   let filterCandy = filterby.map((filtro)=> pokemonsWithEvolution.filter((pokemon) => 
//   pokemon.evolution['next-evolution'][0]['candy-cost'] === filtro))
//   // Accedemos a los objetos de "filterCandy" y le definimos el formato de la pokecard.
//   let candyMappedPokemons = filterCandy.map((poke) => poke.map(pokeCard).join(''))

//   return candyMappedPokemons
// };