class RawData{
    constructor(data){
        this.allData = data
        this.dataCharacters = data.characters
        this.dataBooks = data.books
    }
    //This method return an array with all the books
    getBooksList(){
        let books = []
        this.dataBooks.forEach((elem) => {
            books.push(elem.title)
        })
        // console.log('Lista de libros',books)
        return books
    }
    getBooksListById(bookIdArray){
        let booksName = []
        this.dataBooks.forEach((elem) => {
            if(bookIdArray.includes(elem.id))
            booksName.push(elem.title)
        })
        // console.log('Lista de libros por id',booksName)
        return booksName
    }
    getSpeciesList(){
        let species = []
        this.dataCharacters.forEach((elem) => {
            species.push(elem.species)
        })
        // console.log('Lista de especies',species)
        return species
    }

    /**
     * @param {array} data It takes as argument an array with the list of the species per character
     * @returns Returns an array with the 60 species of Harry Potter
     */
    getOnlySpeciesList(data) {
        let speciesList = [];

        data.forEach(specie => {
            if (speciesList.includes(specie)) {
                return false;
            } else {
                speciesList.push(specie);
            }
        })

        return speciesList;
    }

    //This method return an array with all the houses
    getHousesList(){
        let houses = []
        this.dataCharacters.forEach((elem) => {
            houses.push(elem.house === null ? 'Unknown': elem.house)
        })
        // console.log('Lista de casas',houses)
        return houses
    }

    getOnlyHousesList(data) {
        let housesList = [];

        data.forEach(house => {
            if (housesList.includes(house)) {
                return false;
            } else {
                housesList.push(house);
            }
        })

        return housesList;
    }
}

export default RawData