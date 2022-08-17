class ProcessData {
    constructor () {
      // Importing characters and books from the dataset file
      this.characters = [];
      // this.books = data.books;
      this.characterPosition = 0;
    }

    // Creating the list of characters ordered by the number of books they appear in
    getOrderedNamesList(data) {
      let importanceLevel1 = [];
      let importanceLevel2 = [];
      let importanceLevel3 = [];
      let importanceLevel4 = [];
      let importanceLevel5 = [];

      this.characters = data.characters
      this.characters.forEach(character => {
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

      let allArrayCharacters =  importanceLevel1.concat(importanceLevel2).concat(importanceLevel3).concat(importanceLevel4).concat(importanceLevel5);
      return allArrayCharacters

    }

    // Creating array with characters to pagination to the next page
    goToNextPage(data) {
      const allCharacters = this.getOrderedNamesList(data);
      let pageCharacters = [];
      let maxCharactersPerPage = this.characterPosition + 7;
      for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
        pageCharacters.push(allCharacters[i]);
      }

      this.characterPosition = maxCharactersPerPage + 1;
      return pageCharacters;
    }

    // Creating array with characters to pagination to the previous page
    goToPreviousPage(data) {
      const allCharacters = this.getOrderedNamesList(data);

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

    // Creating array with characters ordered by houses
    sortCharactersByHouses (data) {
      let charactersOrderedByHouses = data.characters.sort((a, b) => {
        if (a.house > b.house) {
          return 1;
        }
        if (a.house < b.house) {
          return -1;
        }
        return 0;
      });

      return charactersOrderedByHouses;
      }

    // Creating array with characters alphabetically arranged
    sortCharactersByAlphabet (data, order) {
      let charactersOrderedByAlphabet = data.characters.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });

      if (order === 1) {
        return charactersOrderedByAlphabet;
      } else {
        let reverse = [...charactersOrderedByAlphabet];
        return reverse.reverse();
      }
    }

    // EN PROGRESO
    // Creating array with characters filtered by books
    filterCharactersByBooks (data, bookNumber) {
      let charactersFilteredByBooks = [];

      data.characters.forEach(character => {
      });

      return charactersFilteredByBooks;
    }

    // Creating array with characters filtered by houses
    filterCharactersByHouses(data, house) {
      let charactersFilteredByHouses = [];

      data.characters.forEach(character => {
        if (character.house === house) {
          charactersFilteredByHouses.push(character);
        }

      })

      return charactersFilteredByHouses;
    }

    // Creating array with characters filtered by species
    filterCharactersBySpecies (data, species) {
      let charactersFilteredBySpecies = [];

      data.characters.forEach(character => {
        if (character.species === species) {
          charactersFilteredBySpecies.push(character);
        }
      })

      return charactersFilteredBySpecies;
    }
  }

export default ProcessData

