import {sumar} from '../src/data.js'
let mock={
    a:10,
    b:20,
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