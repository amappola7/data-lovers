import ProcessData from '../src/data.js'
import CreateContainersForCharactersSection from '../src/js_modules/displayList'

const processData = new ProcessData
const creatingHTMLElements = new CreateContainersForCharactersSection();

const dataUnordered = {characters:[
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human",},
  {"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7], "house": "Slytherin", "species": "Human"},
  {"id":3, "name":"Betty Marmol", "books_featured_in": [2,3,5,6,7], "house": "Ravenclaw", "species": "Centaur"},
  {"id":4, "name":"Pablo Marmol", "books_featured_in": [1,2,3,4,5,6,7], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":5, "name":"Sr. Rajuela", "books_featured_in": [1,2,3,4,5,6,7], "house": "Slytherin", "species": "Basilisk"},
  {"id":6, "name":"Harvey Specter", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":7, "name":"Donna Paulsen", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor (likely)", "species": "Human"},
  {"id":8, "name":"Louis Litt", "books_featured_in": [2,3,4], "house": "Slytherin", "species": "Acromantula"},
  {"id":9, "name":"Jessica Pearson", "books_featured_in": [1,2,3,4], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":10, "name":"Mike Ross", "books_featured_in": [1,3,6], "house": "Ravenclaw", "species": "Mermaid"}
]};

/**Compute stats */
const dataOrderedComputeStats = {characters:[
  {"id":4, "name":"Pablo Marmol", "books_featured_in": [1,2,3,4,5,6,7], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":5, "name":"Sr. Rajuela", "books_featured_in": [1,2,3,4,5,6,7], "house": "Slytherin", "species": "Basilisk"},
  {"id":3, "name":"Betty Marmol", "books_featured_in": [2,3,5,6,7], "house": "Ravenclaw", "species": "Centaur"},
  {"id":6, "name":"Harvey Specter", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":7, "name":"Donna Paulsen", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor (likely)", "species": "Human"},
  {"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7], "house": "Slytherin", "species": "Human"},
  {"id":9, "name":"Jessica Pearson", "books_featured_in": [1,2,3,4], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":8, "name":"Louis Litt", "books_featured_in": [2,3,4], "house": "Slytherin", "species": "Acromantula"},
  {"id":10, "name":"Mike Ross", "books_featured_in": [1,3,6], "house": "Ravenclaw", "species": "Mermaid"},
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"}
]};


/**Sort */
const dataOrderedSortData_AZ = {characters:[
  {"id": 3,"name": "Betty Marmol","books_featured_in": [2,3,5,6,7],"house": "Ravenclaw","species": "Centaur"},
  {"id": 7,"name": "Donna Paulsen","books_featured_in": [1,3,4,6,7],"house": "Gryffindor (likely)","species": "Human"},
  {"id": 6,"name": "Harvey Specter","books_featured_in": [1,3,4,6,7],"house": "Gryffindor","species": "Human"},
  {"id": 9,"name": "Jessica Pearson","books_featured_in": [1,2,3,4],"house": "Hufflepuff","species": "Ghoul"},
  {"id": 8,"name": "Louis Litt","books_featured_in": [2,3,4],"house": "Slytherin","species": "Acromantula"},
  {"id": 10,"name": "Mike Ross","books_featured_in": [1,3,6],"house": "Ravenclaw","species": "Mermaid"},
  {"id": 4,"name": "Pablo Marmol","books_featured_in": [1,2,3,4,5,6,7],"house": "Hufflepuff","species": "Ghoul"},
  {"id": 1,"name": "Pedro Picapiedras","books_featured_in": [5],"house": "Gryffindor","species": "Human"},
  {"id": 5,"name": "Sr. Rajuela","books_featured_in": [1,2,3,4,5,6,7],"house": "Slytherin","species": "Basilisk"},
  {"id": 2,"name": "Vilma Picapiedras","books_featured_in": [1,2,5,7],"house": "Slytherin","species": "Human"}
]}

const dataOrderedSortData_ZA_House = {characters:[
  {"id": 8,"name": "Louis Litt","books_featured_in": [2,3,4],"house": "Slytherin","species": "Acromantula"},
  {"id": 5,"name": "Sr. Rajuela","books_featured_in": [1,2,3,4,5,6,7],"house": "Slytherin","species": "Basilisk"},
  {"id": 2,"name": "Vilma Picapiedras","books_featured_in": [1,2,5,7],"house": "Slytherin","species": "Human"},
  {"id": 10,"name": "Mike Ross","books_featured_in": [1,3,6],"house": "Ravenclaw","species": "Mermaid"},
  {"id": 3,"name": "Betty Marmol","books_featured_in": [2,3,5,6,7],"house": "Ravenclaw","species": "Centaur"},
  {"id": 9,"name": "Jessica Pearson","books_featured_in": [1,2,3,4],"house": "Hufflepuff","species": "Ghoul"},
  {"id": 4,"name": "Pablo Marmol","books_featured_in": [1,2,3,4,5,6,7],"house": "Hufflepuff","species": "Ghoul"},
  {"id": 7,"name": "Donna Paulsen","books_featured_in": [1,3,4,6,7],"house": "Gryffindor (likely)","species": "Human"},
  {"id": 6,"name": "Harvey Specter","books_featured_in": [1,3,4,6,7],"house": "Gryffindor","species": "Human"},
  {"id": 1,"name": "Pedro Picapiedras","books_featured_in": [5],"house": "Gryffindor","species": "Human"},
]}


const filteredByHouses = {characters:[
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"},
  {"id":6, "name":"Harvey Specter", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
]};

const filteredByBooks = {characters:[
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"},
  {"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7], "house": "Slytherin", "species": "Human"},
  {"id":3, "name":"Betty Marmol", "books_featured_in": [2,3,5,6,7], "house": "Ravenclaw", "species": "Centaur"},
  {"id":4, "name":"Pablo Marmol", "books_featured_in": [1,2,3,4,5,6,7], "house": "Hufflepuff", "species": "Ghoul"},
  {"id":5, "name":"Sr. Rajuela", "books_featured_in": [1,2,3,4,5,6,7], "house": "Slytherin", "species": "Basilisk"},
]};

const filteredBySpecies = {characters:[
  {"id":1, "name":"Pedro Picapiedras", "books_featured_in": [5], "house": "Gryffindor", "species": "Human"},
  {"id":2, "name":"Vilma Picapiedras", "books_featured_in": [1,2,5,7], "house": "Slytherin", "species": "Human"},
  {"id":6, "name":"Harvey Specter", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor", "species": "Human"},
  {"id":7, "name":"Donna Paulsen", "books_featured_in": [1,3,4,6,7], "house": "Gryffindor (likely)", "species": "Human"},
]};

/**Compute Stats */
describe('ProcessData', ()=>{
  it('is an object',()=>{
    expect(typeof ProcessData).toEqual('function');
  });

  it('The processData instance should be an object',()=>{
    expect(typeof processData).toEqual('object');
  });
});

describe('getOrderedNamesList', () => {
  it('is a function',()=>{
    expect(typeof processData.getOrderedNamesList(dataUnordered)).toEqual('object');
  });
  it('its parameters should be an object(array)',()=>{
    expect(typeof processData.getOrderedNamesList(dataUnordered)).toEqual('object');
  });
  it('should order the characters according to the number of books where they appear',()=>{
    expect(processData.getOrderedNamesList(dataUnordered)).toEqual(dataOrderedComputeStats.characters);
  });

  it('The argument should not be a string',()=>{
    expect(typeof dataUnordered).toEqual('object')
  });
})

describe('goToNextPage', () => {
  it('is a function',()=>{
    expect(typeof processData.goToNextPage(dataUnordered)).toEqual('object');
  });
  it('its parameters should be an object(array)',()=>{
    expect(typeof processData.goToNextPage(dataUnordered)).toEqual('object');
  });
   it('The argument should not be a string',()=>{
    expect(typeof dataUnordered).toEqual('object')
  });
})

describe('goToPreviousPage', () => {
  it('is a function',()=>{
    expect(typeof processData.goToPreviousPage(dataUnordered)).toEqual('object');
  });
  it('its parameters should be an object(array)',()=>{
    expect(typeof processData.goToPreviousPage(dataUnordered)).toEqual('object');
  });
  it('The argument should not be a string',()=>{
    expect(typeof dataUnordered).toEqual('object')
  });
})

/**Sort */
describe('sortCharactersBy', () => {
  it('is a function',()=>{
    expect(typeof processData.sortCharactersBy(dataUnordered.characters,"name", 1)).toEqual('object');
  });
  it('its parameters should be an object(array), a string, and a number',()=>{
    expect(typeof processData.sortCharactersBy(dataUnordered.characters,"name", 1)).toEqual('object','string','number');
  });

  it('should order the characters from A to Z',()=>{
    expect(processData.sortCharactersBy(dataUnordered.characters,"name", 1)).toEqual(dataOrderedSortData_AZ.characters);
  });

  it('should order the characters from Z to A and by house',()=>{
    expect(processData.sortCharactersBy(dataUnordered.characters,"house", -1)).toEqual(dataOrderedSortData_ZA_House.characters);
  });
})


// Tests for filterCharactersBy()
describe('filterCharactersBy', () => {
  it ('is a function', () => {
    expect(typeof processData.filterCharactersBy(dataUnordered.characters, "house", "Gryffindor")).toEqual('object');
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


describe('CreateContainersForCharactersSection', ()=>{
  it('is an object',()=>{
    expect(typeof CreateContainersForCharactersSection).toEqual('function');
  });

  it('The CreateContainersForCharactersSection instance should be an object',()=>{
    expect(typeof creatingHTMLElements).toEqual('object');
  });
});
