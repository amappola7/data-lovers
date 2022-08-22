import ProcessData from '../src/data.js'
const processData = new ProcessData

const dataUnordered = {characters:[
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"},
  {"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7], "house": "Slytherin", "species": "Human"},
  {"id":3, "name":"Betty Marmol", "books_featured_in": [2,3,5,6,7], "house": "Ravenclaw", "species": "Centaur"},
  {"id":4, "name":"Pablo Marmol", "books_featured_in": [1,2,3,4,5,6,7], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":5, "name":"Sr. Rajuela", "books_featured_in": [1,2,3,4,5,6,7], "house": "Slytherin", "species": "Basilisk"},
  {"id":6, "name":"Harvey Specter", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":7, "name":"Donna Paulsen", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":8, "name":"Louis Litt", "books_featured_in": [2,3,4], "house": "Slytherin", "species": "Acromantula"},
  {"id":9, "name":"Jessica Pearson", "books_featured_in": [1,2,3,4], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":10, "name":"Mike Ross", "books_featured_in": [1,3,6], "house": "Ravenclaw", "species": "Mermaid"}
]};

const dataOrdered = {characters:[
  {"id":4, "name":"Pablo Marmol", "books_featured_in": [1,2,3,4,5,6,7], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":5, "name":"Sr. Rajuela", "books_featured_in": [1,2,3,4,5,6,7], "house": "Slytherin", "species": "Basilisk"},
  {"id":3, "name":"Betty Marmol", "books_featured_in": [2,3,5,6,7], "house": "Ravenclaw", "species": "Centaur"},
  {"id":6, "name":"Harvey Specter", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":7, "name":"Donna Paulsen", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7], "house": "Slytherin", "species": "Human"},
  {"id":9, "name":"Jessica Pearson", "books_featured_in": [1,2,3,4], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":8, "name":"Louis Litt", "books_featured_in": [2,3,4], "house": "Slytherin", "species": "Acromantula"},
  {"id":10, "name":"Mike Ross", "books_featured_in": [1,3,6], "house": "Ravenclaw", "species": "Mermaid"},
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"}
]};

const filteredByHouses = {characters:[
  {"id":6, "name":"Harvey Specter", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":7, "name":"Donna Paulsen", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"}
]};

const filteredByBooks = {characters:[
  {"id":4, "name":"Pablo Marmol", "books_featured_in": [1,2,3,4,5,6,7], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":5, "name":"Sr. Rajuela", "books_featured_in": [1,2,3,4,5,6,7], "house": "Slytherin", "species": "Basilisk"},
  {"id":3, "name":"Betty Marmol", "books_featured_in": [2,3,5,6,7], "house": "Ravenclaw", "species": "Centaur"},
  {"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7], "house": "Slytherin", "species": "Human"},
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"}
]};

const filteredBySpecies = {characters:[
  {"id":6, "name":"Harvey Specter", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":7, "name":"Donna Paulsen", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7], "house": "Slytherin", "species": "Human"},
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"}
]};


describe('ProcessData', ()=>{
  it('is an object',()=>{
    expect(typeof ProcessData).toEqual('function');
  });

  it('is an object',()=>{
    expect(typeof processData).toEqual('object');
  });
});

describe('getOrderedNamesList', () => {
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

// Tests for filterCharactersBy()
describe('filterCharactersBy', () => {
  it ('is a function', () => {
    expect(typeof processData.filterCharactersBy(dataUnordered.characters, "category", "condition").toEqual('object'));
  });

  it ('should return characters filtered by houses', () => {
    expect(processData.filterCharactersBy(dataUnordered.characters,"house", "Gryffindor")).toEqual(filteredByHouses.characters);
  });

  it ('should return characters filtered by books', () => {
    expect(processData.filterCharactersBy(dataUnordered.characters,"books_featured_in", "5")).toEqual(filteredByBooks.characters);
  });

  it ('should return characters filtered by species', () => {
    expect(processData.filterCharactersBy(dataUnordered.characters,"species", "Human")).toEqual(filteredBySpecies.characters);
  });
})
