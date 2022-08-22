// main.mjs - DOM Events
import dataSet from '../data/harrypotter/data.js';
import ProcessData from '../data.js';
import CreateContainersForCharactersSection from './displayList.mjs';
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

// Characters - Dataset
let rawData = new RawData(data)



// Create ordered characters list
const HarryPotterData = new ProcessData(rawData.allData);
const creatingHTMLElements = new CreateContainersForCharactersSection();

//Event welcome button

btnStartWelcomePage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(rawData.dataCharacters), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
    welcomePage.style.display = "none";
    header.style.display = "block";
    mainPage.style.display = "flex";
    footer.style.display = "flex";
});


// Create ordered characters list


// Display main page and characters list

creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.getOrderedNamesList(rawData.allData)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
creatingHTMLElements.createNewOptions(rawData.getOnlySpeciesList(rawData.getSpeciesList()), "species");
creatingHTMLElements.createNewOptions(rawData.getBooksList(), "books" );
creatingHTMLElements.createNewOptions(rawData.getOnlyHousesList(rawData.getHousesList()), "houses");


// Create events to pagination
// Next Page
btnNextPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.getOrderedNamesList(rawData.allData)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})
// Previous Page
btnPreviousPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(HarryPotterData.getOrderedNamesList(rawData.allData)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})

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



// Create events to pagination
// Next Page
btnNextPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(rawData.dataCharacters), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})
// Previous Page
btnPreviousPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(rawData.dataCharacters), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})

// Create characters card

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
    HarryPotterData.characterPosition = 0;

    if (event.target.textContent === "A-Z") {
        creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"name", 1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        btnNextPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"name", 1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
        btnPreviousPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"name", 1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
    } else if (event.target.textContent === "Z-A") {
        creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"name", -1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        btnNextPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"name", -1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
        btnPreviousPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"name", -1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
    } else if (event.target.textContent === "Houses") {
        creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"house", 1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        btnNextPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"house", 1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
        btnPreviousPage.addEventListener("click", () => {
            creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(HarryPotterData.sortCharactersBy(rawData.dataCharacters,"house", 1)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        })
    }

    sortModalMenu.style.display = "none";
})

// Events to filter data
filterModalMenu.addEventListener("change", (event) => {
        if (event.target.name === "Houses") {
            let value = event.target.value;
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.filterCharactersBy(rawData.dataCharacters,"house", value)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        } else if (event.target.name === "Books") {
            let value = event.target.value;
            let condition = "";

            rawData.dataBooks.forEach(book => {
                if (book.name === value) {
                    condition += book.id;
                }
            })

            console.log("Hola", condition);
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.filterCharactersBy(rawData.dataCharacters,"books_featured_in", condition)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        } else if (event.target.name === "Species") {
            let value = event.target.value;
            creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(HarryPotterData.filterCharactersBy(rawData.dataCharacters,"species", value)), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
        }

    filterModalMenu.style.display = "none";
    }
)
