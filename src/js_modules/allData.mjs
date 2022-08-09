// allData.mjs - Extract characters information to process it
class ProcessData {
  constructor (data) {
    // Importing characters and books from the dataset file
    this.characters = data.characters;
    this.books = data.books;
  }

  // Creating the list of characters ordered by the number of books they appear in
  getOrderedNamesList() {
    let importanceLevel1 = [];
    let importanceLevel2 = [];
    let importanceLevel3 = [];
    let importanceLevel4 = [];
    let importanceLevel5 = [];

    let characterData = [...this.characters]

    characterData.forEach(character => {
      let characterName = character//.name;
      let characterBooks = character.books_featured_in;

      switch (characterBooks.length) {
        case 7:
          importanceLevel1.push(characterName);
          break;
        case 6:
          importanceLevel2.push(characterName);
          break;
        case 5:
          importanceLevel3.push(characterName);
          break;
        case 4:
          importanceLevel4.push(characterName);
          break;
        default:
          importanceLevel5.push(characterName);
          break;
      }
    });

    let allCharacters = importanceLevel1.concat(importanceLevel2).concat(importanceLevel3).concat(importanceLevel4).concat(importanceLevel5);
    
    return allCharacters;
  }
}

export default ProcessData;