import data from '../src/data/harrypotter/data.js'
import ProcessData from '../src/data.js'
// import HarryPotterData from '../src/js_modules/allData.mjs'
 let proccessData = new ProcessData(data);
 let functionProcessData =  proccessData.getOrderedNamesList();

describe('ProcessData', ()=>{
  it('is a object',()=>{
    expect(typeof ProcessData).toEqual('function');
  });

  it('is a object',()=>{
    expect(typeof proccessData).toEqual('object');
  });
});

describe('functionProcessData', ()=>{
  it('is a function',()=>{
    expect(typeof functionProcessData).toEqual('object');
  });

  // it('should have Harry Potter between its top 50 objects',()=>{
  //   expect(functionProcessData.forEach((elem, index)=>{
  //     //Validar el nombre de harry potter en la propiedad name
  //     if(elem.name === 'Harry Potter'){
  //       let indexHarryPotter =index
  //        if(indexHarryPotter <= 50){
  //         return true
  //        }else{
  //         return false
  //        }
  //     }
  //   })
  //     ).toBe(true);
  // });
});


//Validar el nombre de harry potter en la propiedad name
//Encontra la posición del objeto de Harry Potter en el arreglo
//Validar que si la posición está dentro de los primeros 50 personajes
//Si se encuentra entre los primeros 50 retornar verdadero
//Si no se encuentra entre los primeros 50 retornar falso
