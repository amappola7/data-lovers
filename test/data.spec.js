import data from '../src/data/harrypotter/data.js'
import ProcessData from '../src/data.js'

//Get class instance ProcessData, whose parameter is the data
let proccessData = new ProcessData(data);
let functionProcessData =  proccessData.getOrderedNamesList();

//Start test in method getOrderedNamesList()
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

  it('should receive an object as an argument',()=>{
    expect(typeof data).toEqual('object');
  });

  it('the first 20 characters should appear in all 7 books',()=>{
    expect(functionProcessData.map((elem)=>{
        return elem.books_featured_in
    })).toEqual(expect.arrayContaining(functionProcessData.slice(0,20).map((e)=>{
        return e.books_featured_in
    })))
  });

  it('Harry Potter should be in the top 20 items in the array',()=>{
    expect(functionProcessData.slice(0,20)).
    toEqual(expect.arrayContaining(functionProcessData.filter((e)=>{
      if(e.name === "Harry Potter" ){
          return e
      }
    })));
  });

  it('Peregrine Derrick should not be in the top 20 items in the array',()=>{
    expect(functionProcessData.slice(0,20)).
    toEqual(expect.not.arrayContaining(functionProcessData.filter((e)=>{
      if(e.name === 'Peregrine Derrick'){
        return e
    }
    })));
  });

  })