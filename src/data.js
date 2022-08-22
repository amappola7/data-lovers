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
    /**
     * @param {array} data Array with characters. It can be a function that returns an array
     * @returns {array} Returns an array with characters
     */

    goToNextPage(data) {
      const allCharacters = data;
      let pageCharacters = [];
      let maxCharactersPerPage = this.characterPosition + 7;
      for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
        pageCharacters.push(allCharacters[i]);
      }

      this.characterPosition = maxCharactersPerPage + 1;
      return pageCharacters;
    }

    // Creating array with characters to pagination to the previous page
    /**
     * @param {array} data Array with characters. It can be a function that returns an array
     * @returns {array} Returns an array with characters
     */

    goToPreviousPage(data) {
      const allCharacters = data;

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

    // Creating array with ordered characters
    /**
     * @param {array} charactersData Array with characters
     * @param {string} category Keyword to sort the array of characters. Use name as condition to sort alphabetically
     * @param {number} order 1 for ascending order and any other number for descending order (preferably use -1)
     * @returns Array with characters ordered by certain category
     */

    sortCharactersBy(charactersData, category, order) {
      // Changing null values for "Unknown"
      
      let newCharactersData = charactersData.map(character => {
        character[category] === null ? character[category] = "Unknown" : character[category];
        return character;
      });

      //Ordering characters
      let orderedCharactersList = newCharactersData.sort((a, b) => {
        if (a[category] > b[category]) {
          return 1;
        }
        if (a[category] < b[category]) {
          return -1;
        }
        return 0;
      });
      
     //Return ordered characters list ascending or descending
      if (order === 1) {
         return orderedCharactersList;
      } else {
        let reverse = [...orderedCharactersList];
        return reverse.reverse();
      }

      
    }

    // Creating array with characters filtered
    /**
     * @param {array} charactersData Array with characters
     * @param {string} category Category to filter the array of characters (house, books_featured_in, species...)
     * @param {string} condition Keyword with the specific condition to filter the array of characters (Gryffindor, 2, Human...)
     * @returns {array} Array with characters filtered by certain condition
     */

    filterCharactersBy(charactersData, category, condition) {
      let filteredCharactersList = charactersData.filter(character => {
        if (category === "books_featured_in") {
          condition = parseInt(condition);
          if (character[category].includes(condition)) {
            
             return true;
          }
        } else if (character[category] === condition) {
          console.log('categoria',character[category])
            console.log('condicion',condition)
            return true;
        }
      });
console.log(filteredCharactersList)
      return filteredCharactersList;
    }

  }

export default ProcessData;

