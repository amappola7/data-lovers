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
});
