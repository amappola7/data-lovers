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
        console.log('Lista de libros',books)
        return books
    }
    getBooksListById(bookIdArray){
        let booksName = []
        this.dataBooks.forEach((elem) => {
            if(bookIdArray.includes(elem.id))
            booksName.push(elem.title)
        })
        console.log('Lista de libros por id',booksName)
        return booksName
    }
    getSpeciesList(){
        let species = []
        this.dataCharacters.forEach((elem) => {
            species.push(elem.species)
        })
        console.log('Lista de especies',species)
        return species
    }
    //This method return an array with all the houses
    getHousesList(){
        let houses = []
        this.dataCharacters.forEach((elem) => {
            houses.push(elem.house === null ? 'Unknown': elem.house)
        })
        console.log('Lista de casas',houses)
        return houses
    }
}

export default RawData