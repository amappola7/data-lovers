import ProcessData from '../src/data.js'
const processData = new ProcessData

const dataUnordered = {characters:[{"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5]},{"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7]},{"id":3, "name":"Betty Marmol", "books_featured_in": [2,3,5,6,7]},{"id":4, "name":"Pablo Marmol", "books_featured_in": [1,2,3,4,5,6,7]},{"id":5, "name":"Sr. Rajuela", "books_featured_in": [1,2,3,4,5,6,7]}]}
const dataOrdered = {characters:[{"id":4, "name":"Pablo Marmol", "books_featured_in": [1,2,3,4,5,6,7]},{"id":5, "name":"Sr. Rajuela", "books_featured_in": [1,2,3,4,5,6,7]},{"id":3, "name":"Betty Marmol", "books_featured_in": [2,3,5,6,7]},{"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7]},{"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5]}]}


describe('ProcessData', ()=>{
  it('is a object',()=>{
    expect(typeof ProcessData).toEqual('function');
  });

  it('is a object',()=>{
    expect(typeof processData).toEqual('object');
  });
});

describe('getOrderedNamesList', ()=>{
  it('is a function',()=>{
    expect(typeof processData.getOrderedNamesList(dataUnordered)).toEqual('object');
  });

  it('should order the characters according to the number of books where they appear',()=>{
    expect(processData.getOrderedNamesList(dataUnordered)).toEqual(dataOrdered.characters);
  });

  it('The argument should not be a string',()=>{
    expect(typeof dataUnordered).toEqual('object')
  });
})