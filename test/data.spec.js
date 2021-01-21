import {filterAZ, filterZA, getpokemoncito, searchName} from '../src/data.js';

let mock= [{
     "num": "223",
     "name": "remoraid",
     "type": [
      "water"
    ],
    "evolution": {
      "candy": "remoraid candy",
      "next-evolution": [{
        "num": "224",
        "name": "octillery",
        "candy-cost": "50"
      }]
    }},

    {"num": "093",
    "name": "haunter",
    "type": [
      "ghost",
      "poison"
    ],
    "evolution": {
      "candy": "gastly candy",
      "next-evolution": [{
        "num": "094",
        "name": "gengar",
        "candy-cost": "100"
      }]
    }}

  ]
    


describe('esta prueba es para checar el funcionamiento de los filtros por tipo y dulces', () => {
  it('con el tipo y dulce definido el pokemon debe ser un objeto conteniendo a remoraid', () => {
    expect(getpokemoncito(['water'], ['50'] , mock)).toEqual(expect.arrayContaining([
      expect.arrayContaining([
        expect.arrayContaining([
          expect.objectContaining({
            "name" : "remoraid"
          })
        ])
      ])
    ]))
  });

  it('con el tipo definido el pokemon debe ser un objeto conteniendo a haunter', () => {
    expect(getpokemoncito(['ghost'], [] , mock)).toEqual(expect.arrayContaining([
      expect.arrayContaining([
          expect.objectContaining({
            "name" : "haunter"
          })
        ])
    ]))
  });
});

describe('esta prueba checa el buscador por nombre del pokemons', () =>{
  it('busca y devuelve el pokemon con nombre Haunter', () =>{
    expect(searchName(mock, 'haunter')).toEqual(expect.arrayContaining([expect.objectContaining({"name" : "haunter"})]))
  })
})


describe('esta prueba checa el funcionamiento de la funcion sort', () => {
  it('se organizan alfabeticamente de A-Z', () => {
    expect(filterAZ(mock)).toEqual(expect.arrayContaining([expect.objectContaining({"name" : "remoraid"}), expect.objectContaining({"name" : "haunter"})]));
  });

  it('se organizan alfabeticamente Z-A', () => {
    expect(filterZA(mock)).toEqual(expect.arrayContaining([expect.objectContaining({"name" : "remoraid"}), expect.objectContaining({"name" : "haunter"})]));
  });
});
