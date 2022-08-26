class ProcessData {
  constructor() {
    // Importing characters and books from the dataset file
    this.characters = [];
    this.characterPosition = 0;
    this.characterPositionInFilter = 0;
  }

  /**
   * 
   * @param {Array} data contains of the raw data
   * @returns {Array} with the characters ordered according to the number of books where they appear
   * 
   */
  // Creating the list of characters ordered by the number of books they appear in
  getOrderedNamesList(data) {
    let importanceLevel1 = [];
    let importanceLevel2 = [];
    let importanceLevel3 = [];
    let importanceLevel4 = [];
    let importanceLevel5 = [];
    let importanceLevel6 = [];
    let importanceLevel7 = [];

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
        case 3:
          importanceLevel5.push(characterName);
          break;
        case 2:
          importanceLevel6.push(characterName);
          break;
        case 1:
          importanceLevel7.push(characterName);
          break;
      }
    });

    return importanceLevel1.concat(importanceLevel2).concat(importanceLevel3).
          concat(importanceLevel4).concat(importanceLevel5).concat(importanceLevel6).
          concat(importanceLevel7);
    // return allArrayCharacters

  }

  // Creating array with ordered characters
  /**
   * @param {array} charactersData Array with characters
   * @param {string} category Keyword to sort the array of characters. Use name as condition to sort alphabetically
   * @param {number} order 1 for ascending order and any other number for descending order (preferably use -1)
   * @returns Array with characters ordered by certain category
   */

  sortCharactersBy(charactersData, category, order) {
    let newCharactersData = charactersData.map(character => {
      character[category] === null ? character[category] = "Unknown" : character[category];
      return character;
    });
    //Ordering characters
    let orderedCharactersList = [...newCharactersData].sort((a, b) => {
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
        return true;
      }
    });
    return filteredCharactersList;
  }

  /**
   * 
   * @param {Array} allCharacters receives the ordered data according to what is returned by sortCharacterBy or getOrderedNamesList
   * @param {Boolean} resetPagination 
   * @param {Number} paginationElement contains the number of elements the page should display, depending on the width of the viewport
   * @returns {Array} returns the number of characters to display, paginated, according to the size of the viewport
   */

  goToNextPage(allCharacters, resetPagination = false, paginationElement = 7) {
    let pageCharacters = [];
    let maxCharactersPerPage = 0;
    maxCharactersPerPage = this.characterPosition + paginationElement

    if (resetPagination === true) {
      this.characterPosition = 0
      maxCharactersPerPage = paginationElement
    }
    for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
      pageCharacters.push(allCharacters[i]);
    }

    this.characterPosition = maxCharactersPerPage + 1;

    return pageCharacters;
  }

  goToPreviousPage(allCharacters, paginationElement = 7) {
    let pageCharacters = [];

    this.characterPosition -= (paginationElement * 2) + 2;
    let maxCharactersPerPage = this.characterPosition + paginationElement;

    if (this.characterPosition >= 0) {
      for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
        pageCharacters.push(allCharacters[i]);
      }
    } else {
      this.characterPosition = 0;
      maxCharactersPerPage = this.characterPosition + paginationElement;
      for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
        pageCharacters.push(allCharacters[i]);
      }
    }

    this.characterPosition += paginationElement + 1;
    return pageCharacters;
  }

  goToNextPageInFilter(allCharacters, resetPagination = false) {
    let pageCharacters = [];
    let maxCharactersPerPage = 0

    if (resetPagination === true) {
      this.characterPositionInFilter = 0
    }

    for (let i = this.characterPositionInFilter; i < allCharacters.length && maxCharactersPerPage <= 7; i++) {
      if (i < allCharacters.length) {
        pageCharacters.push(allCharacters[i]);
        this.characterPositionInFilter++
        maxCharactersPerPage++
      }
    }

    this.characterPositionInFilter++

    return pageCharacters;
  }
/**
 * 
 * @param {Array} charactersData contains the filtered data
 * @returns 7 elements filtered
 */
  goToPreviousPageInFilter(charactersData) {
    let pageCharacters = [];

    this.characterPositionInFilter -= 16;
    let maxCharactersPerPage = this.characterPositionInFilter + 7;

    if (this.characterPositionInFilter >= 0) {
      for (let i = this.characterPositionInFilter; i <= maxCharactersPerPage; i++) {
        pageCharacters.push(charactersData[i]);
      }
    } else {
      this.characterPositionInFilter = 0;
      maxCharactersPerPage = this.characterPositionInFilter + 7;
      for (let i = this.characterPositionInFilter; i < charactersData.length && i < maxCharactersPerPage; i++) {
        pageCharacters.push(charactersData[i]);
      }
    }
    this.characterPositionInFilter += 8;
    return pageCharacters;
  }
}

export default ProcessData;

