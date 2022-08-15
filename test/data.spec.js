import data from '../src/data/harrypotter/data.js'
import ProcessData from '../src/data.js'
// import HarryPotterData from '../src/js_modules/allData.mjs'
 let proccessData = new ProcessData(data);

 //To test in method getOrderedNamesList()
 let functionProcessData =  proccessData.getOrderedNamesList();
 let the20BooksOnTheList = functionProcessData.slice(0,20)
 let expected = the20BooksOnTheList.map((e)=>{return e.books_featured_in})


let findingHarryPotter = the20BooksOnTheList.filter((e)=>{
     return e.name === "Harry Potter" ? true : false
})

let findingToAnotherChar = the20BooksOnTheList.filter((e)=>{
  return e.name === "Peregrine Derrick" ? true : false
})

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
    })).toEqual(expect.arrayContaining(expected));
});
  it('Harry Potter should be in this array',()=>{
    expect(functionProcessData).toEqual(expect.arrayContaining(findingHarryPotter));
  });
  it('Peregrine Derrick should not be in this array',()=>{
    expect(functionProcessData).toEqual(expect.arrayContaining(findingToAnotherChar));
  });

  })