// import { example, anotherExample } from '../src/data.js';


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

import { encontrarDiez, saludar } from '../src/data.js';

describe('encontrarDiez', ()=>{
  it('is a function',()=>{
    expect(typeof encontrarDiez).toBe('function')
  });

  it('debería retornar true para "1234"', () => {
    expect(encontrarDiez('1234')).toBe(true);
  });

  // it('debería retornar true para "1234"', () => {
  //   expect(encontrarDiez()).toBe(undefined);
  // });

})

describe('saludar', ()=>{
  it('is a function',()=>{
    expect(typeof saludar).toBe('function')
  });

  it('debería retornar "Hola Norberto cómo estás" para "Norberto"', () => {
    expect(saludar('Norberto')).toBe("Hola Norberto cómo estás");
  });

  
})


