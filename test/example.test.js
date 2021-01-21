import {sumar} from '../src/data.js'
import {getpokemoncito} from '../src/data.js'

let mock={
    a:10,
    b:20,
    c:'tierra',
}; //Estamos inventando el mock

describe('Esta coleccion es para revisar suma, resta multiplicacion y divisio',()=>{
    test('Usamos sumar y esperamos 4',function(){
        expect(sumar(2,2)).toBe(4)
    });
    test('Esto es un error',()=>{
        expect(sumar(1,1)).toEqual(3)
    })
    it('Esto es un mock',()=>{
        expect(sumar(mock.a,mock.b)).toBe(30)
    })
})

// describe ('Verificar que la funcion retorne un valor', () => {
//     test('Debe retornar una funcion con los pokemones', function () {
//         expect(typeof getpokemoncito).toEqual('function')
//     });
//     test('Esto es un error donde no se debe retornar un objeto', () => {
//         expect(getpokemoncito()).toEqual('object')
//     })
//     it('Retornar tipo tierra', () => {
//         expect(typeof (mock.c)).toEqual('tierra')
//     })
// })

// describe('Descripción del tema', () => {
//     test('funcion de getpokemoncito', () => {
//         expect(getpokemoncito('')).toBe('tierra');
//     })
// })

jest.mock('searchByName')

test('Desplegar los pokemones despues de un click', () => {
    
})