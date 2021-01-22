import {filterAZ, filterZA, getpokemoncito, searchName} from '../src/data.js';
import {mock} from './helpers.js'


    //mock ordenado (con los datos ordenados)


describe('esta prueba es para checar el funcionamiento de los filtros por tipo y dulces', () => {
  it('con el tipo y dulce definido el pokemon debe ser un objeto conteniendo a remoraid', () => {
    expect(getpokemoncito(['water'], ['50'], mock)).toEqual(expect.arrayContaining([
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
    expect(getpokemoncito(['ghost'], [], mock)).toEqual(expect.arrayContaining([
      expect.arrayContaining([
          expect.objectContaining({
            "name" : "haunter"
          })
        ])
    ]))
  });
});

  it('con el numero de dulces definidos el pokemon debe ser un objeto conteniendo a bulbasaur con 25 dulces', () => {
    expect(getpokemoncito([], ['25'], mock)).toEqual(expect.arrayContaining([
      expect.arrayContaining([
        expect.objectContaining({
          "name" : "bulbasaur"
        })
      ])
    ]))
  });

describe('esta prueba checa el buscador por nombre del pokemons', () =>{
  it('busca y devuelve el pokemon con nombre Haunter', () =>{
    expect(searchName(mock, 'haunter')).toEqual(expect.arrayContaining([expect.objectContaining({"name" : "haunter"})]))
  })
});

describe('esta prueba checa el funcionamiento de la funcion sort', () => {
  it('se organizan alfabeticamente de A-Z', () => {
    expect(filterAZ(mock)).toStrictEqual(expect.arrayContaining([expect.objectContaining({"name" : "remoraid"}), expect.objectContaining({"name" : "haunter"})]));
    //expect(filterAZ(mock)).toBe(aqui van los datos odernados en una variable))
  });

  it('se organizan alfabeticamente Z-A', () => {
    expect(filterZA(mock)).toStrictEqual(expect.arrayContaining([expect.objectContaining({"name" : "remoraid"}), expect.objectContaining({"name" : "haunter"})]));
  });
});

[{"evolution": {"candy": "bulbasaur candy", "next-evolution":
 [{"candy-cost": "25", "name": "ivysaur", "num": "002"}]}, 
 "name": "bulbasaur", "num": "001", "type": ["grass"]}, 
 {"evolution": {"candy": "gastly candy", "next-evolution":
  [{"candy-cost": "100", "name": "gengar", "num": "094"}]}, 
  "name": "haunter", "num": "093", "type": ["ghost", "poison"]},
   {"evolution": {"candy": "remoraid candy", "next-evolution":
    [{"candy-cost": "50", "name": "octillery", "num": "224"}]},
     "name": "remoraid", "num": "223", "type": ["water"]}]