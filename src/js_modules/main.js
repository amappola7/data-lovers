// main.mjs - DOM Events
import dataSet from '../data/harrypotter/data.js';
import ProcessData from '../data.js';
import CreateContainersForCharactersSection from './displayList.js';
import DetailsCharacters from './detailsCharacters.mjs'
//prueba
import RawData from './rawData.js'

// Data Cruda
const data = dataSet;

// DOM Selectors
const welcomePage = document.getElementById("content-welcome-page-id");
const btnStartWelcomePage = document.getElementById("btn-start-welcome-page-id");
const header = document.getElementById("header-main-page-id");
const mainPage = document.getElementById("main-page-id");
// const containerCharactersList = document.getElementById("container-characters-list-id");
const footer = document.getElementById("footer-main-page-id");
const btnNextPage = document.getElementById("btn-pagination-next-id");
const btnPreviousPage = document.getElementById("btn-pagination-back-id");
const sortBtn = document.getElementById("sort-button-id");
const exitSortBtn = document.getElementById("exit-sort-modal-menu-id");
const sortModalMenu = document.getElementById("sort-modal-menu-id");
const filterBtn = document.getElementById("filter-button-id");
const exitFilterBtn = document.getElementById("exit-filter-modal-menu-id");
const filterModalMenu = document.getElementById("filter-modal-menu-id");
let resetPagination = false
// Characters - Dataset
let rawData = new RawData(data)

// Create ordered characters list
const HarryPotterData = new ProcessData(rawData.allData);
const creatingHTMLElements = new CreateContainersForCharactersSection();

// Display main page and characters list
// creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.getOrderedNamesList(rawData.allData)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
creatingHTMLElements.createNewOptions(rawData.getOnlySpeciesList(rawData.getSpeciesList()), "species");
creatingHTMLElements.createNewOptions(rawData.getBooksList(), "books" );
creatingHTMLElements.createNewOptions(rawData.getOnlyHousesList(rawData.getHousesList()), "houses");

//Event welcome button
btnStartWelcomePage.addEventListener("click", () => {
    const allCharacters = HarryPotterData.getOrderedNamesList(rawData.allData);
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(allCharacters), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
    welcomePage.style.display = "none";
    header.style.display = "block";
    mainPage.style.display = "flex";
    footer.style.display = "flex";
});

// Create events to pagination
// Next Page
btnNextPage.addEventListener("click", (e) => {
    if(e.target.dataset.operation === 'default'){
        const allCharacters = HarryPotterData.getOrderedNamesList(rawData.allData);
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(allCharacters), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
    }
})
// Previous Page
btnPreviousPage.addEventListener("click", (e) => {
    if(e.target.dataset.operation === 'default'){
        const allCharacters = HarryPotterData.getOrderedNamesList(rawData.allData);
        creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(allCharacters), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
    }
    
})

//creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.getOrderedNamesList(rawData.allData)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
creatingHTMLElements.createNewOptions(rawData.getOnlySpeciesList(rawData.getSpeciesList()), "species");
creatingHTMLElements.createNewOptions(rawData.getBooksList(), "books" );
creatingHTMLElements.createNewOptions(rawData.getOnlyHousesList(rawData.getHousesList()), "houses");

// Create characters card
const detailsDataCharacters = new DetailsCharacters();
// const eventContainers = creatingHTMLElements.containerCharacters
const eventContainers = document.getElementById('container-characters-list-id')
// Open characters card
eventContainers.addEventListener('click', (event) => {
    if (event.target.nodeName === "FIGURE" || event.target.nodeName === "FIGCAPTION" || event.target.nodeName === "IMG") {
        rawData.dataCharacters.forEach((elem) => {
            if(elem.id === parseInt(event.target.dataset.id)){
                detailsDataCharacters.createCharacterContainer(elem, "https://imagizer.imageshack.com/img923/332/wM4EDt.png",'card')
                creatingHTMLElements.hiddenDisplayList()
                header.style.display = "none"
                footer.style.display = "none"
                detailsDataCharacters.displayDetailsCharacters()
            }
        })
    }
});

// Close characters card
const btnCloseDetailsDataCharacters = detailsDataCharacters.buttonClose;
btnCloseDetailsDataCharacters.addEventListener('click', () => {
    detailsDataCharacters.hiddenDetailsCharacters()
    detailsDataCharacters.cleanDetailsCharacters()
    header.style.display = "block"
    footer.style.display = "flex"
    creatingHTMLElements.displayListCharacters()
})



// Display main page and characters list

// Open modal menu in sort button
sortBtn.addEventListener("click", () => {
    sortModalMenu.style.display = "flex";
})

// Close modal menu in sort button
exitSortBtn.addEventListener("click", () => {
    sortModalMenu.style.display = "none";
})

// Open modal menu in filter button
filterBtn.addEventListener("click", () => {
    filterModalMenu.style.display = "flex";
})

// Close modal menu in filter button
exitFilterBtn.addEventListener("click", () => {
    filterModalMenu.style.display = "none";
})

// Events to sort data
sortModalMenu.addEventListener("click", (event) => {
resetPagination = true
let btnBack = document.getElementById('btn-pagination-back-id')
let btnNext =document.getElementById('btn-pagination-next-id')
    if (event.target.textContent === "A-Z") {
        btnBack.dataset.operation = 'sortAZ'
        btnNext.dataset.operation = 'sortAZ'
        const allCharacters = HarryPotterData.sortCharactersBy(rawData.dataCharacters, "name", 1);
        creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(allCharacters,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        btnNextPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(allCharacters,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
        btnPreviousPage.addEventListener("click", () => {
            let data = HarryPotterData.goToPreviousPage(allCharacters)
            if(data.length !==0){
                creatingHTMLElements.addCharacterList(data, "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
            }

        })
        resetPagination = false 
    } else if (event.target.textContent === "Z-A") {
        btnBack.dataset.operation = 'sortZA'
        btnNext.dataset.operation = 'sortZA'
        const allCharacters = HarryPotterData.sortCharactersBy(rawData.dataCharacters, "name", -1);
        creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(allCharacters,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        btnNextPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(allCharacters,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
        btnPreviousPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(allCharacters), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
        resetPagination = false 
    } else if (event.target.textContent === "Houses") {
        btnBack.dataset.operation = 'sortHouses'
        btnNext.dataset.operation = 'sortHouses'
        const allCharacters = HarryPotterData.sortCharactersBy(rawData.dataCharacters, "house", 1);
        creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(allCharacters, resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        btnNextPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(allCharacters, resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
        btnPreviousPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(allCharacters), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
        resetPagination = false 
    }

    sortModalMenu.style.display = "none";
})
let value 
let eventNameFilter 
// Events to filter data
filterModalMenu.addEventListener("change", (event) => {
resetPagination = true
value = event.target.value;
eventNameFilter =event.target.name
let btnBack = document.getElementById('btn-pagination-back-id')
let btnNext =document.getElementById('btn-pagination-next-id')
        if (eventNameFilter === "Houses") {
            btnBack.dataset.operation = 'houses'
            btnNext.dataset.operation = 'houses'
            const charactersData = HarryPotterData.filterCharactersBy(rawData.dataCharacters,"house", value)
                creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPageInFilter(charactersData,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
                btnNextPage.addEventListener("click", () => {
                    const charactersData = HarryPotterData.filterCharactersBy(rawData.dataCharacters,"house", value)
                    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPageInFilter(charactersData,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
                    
               })

            resetPagination = false
        } else if (eventNameFilter === "Books") {
            btnBack.dataset.operation = 'books'
            btnNext.dataset.operation = 'books'
            
            
            let condition = "";

            rawData.dataBooks.forEach(book => {
                if (book.title === value) {
                    condition += book.id;
                }
            })
            const charactersData = HarryPotterData.filterCharactersBy(rawData.dataCharacters,"books_featured_in", condition)
            
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPageInFilter(charactersData,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
            btnNextPage.addEventListener("click", () => {
                
            let condition = "";
            rawData.dataBooks.forEach(book => {
                if (book.title === value) {
                    condition += book.id;
                }
            })
            const charactersData = HarryPotterData.filterCharactersBy(rawData.dataCharacters,"books_featured_in", condition)

                creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPageInFilter(charactersData,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
            })
        
            resetPagination = false
        
        } else if (eventNameFilter === "Species") {
            btnBack.dataset.operation = 'species'
            btnNext.dataset.operation = 'species'
           
            const charactersData = HarryPotterData.filterCharactersBy(rawData.dataCharacters,"species", value)
            
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPageInFilter(charactersData,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
            btnNextPage.addEventListener("click", () => {
                
                const charactersData = HarryPotterData.filterCharactersBy(rawData.dataCharacters,"species", value)
                creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPageInFilter(charactersData,resetPagination), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
            })
        
            resetPagination = false
        }

    filterModalMenu.style.display = "none";
    }
)
