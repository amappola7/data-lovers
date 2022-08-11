// allData.mjs - Extract characters information to process it
class ProcessData {
  constructor (data) {
    // Importing characters and books from the dataset file
    this.characters = data.characters;
    this.books = data.books;
    this.characterPosition = 0;
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
      let characterName = character;
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

  // Creating array with characters to pagination to the next page
  goToNextPage() {
    console.log("Next", this.characterPosition);
    const allCharacters = this.getOrderedNamesList();
    let pageCharacters = [];
    let maxCharactersPerPage = this.characterPosition + 7;
    for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
      pageCharacters.push(allCharacters[i]);
    }

    this.characterPosition = maxCharactersPerPage + 1;
    return pageCharacters;
  }

  // Creating array with characters to pagination to the previous page
  goToPreviousPage() {
    const allCharacters = this.getOrderedNamesList();
    let pageCharacters = [];
    this.characterPosition -= 16;
    let maxCharactersPerPage = this.characterPosition + 7;

    if (this.characterPosition >= 0) {
      for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
        pageCharacters.push(allCharacters[i]);
      }
    } else {
      this.characterPosition = 0;
      maxCharactersPerPage = this.characterPosition + 7;
      for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
        pageCharacters.push(allCharacters[i]);
      }
    }

    this.characterPosition += 8;
    return pageCharacters;
  }
}

export default ProcessData;



