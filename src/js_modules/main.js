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
const containerCharactersList = document.getElementById("container-characters-list-id");
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
rawData.getBooksListById([1,2,3,4,5,6,7])

//Event welcome button
btnStartWelcomePage.addEventListener("click", () => {
    welcomePage.style.display = "none";
    header.style.display = "block";
    mainPage.style.display = "flex";
    footer.style.display = "flex";
});

// Create ordered characters list
const HarryPotterData = new ProcessData(rawData.allData);

// Display main page and characters list
const creatingHTMLElements = new CreateContainersForCharactersSection();
creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(rawData.allData), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");

// Create events to pagination
// Next Page
btnNextPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(rawData.allData), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})
// Previous Page
btnPreviousPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(rawData.allData), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})

// Create characters card
const detailsDataCharacters = new DetailsCharacters();
const eventContainers = creatingHTMLElements.containerCharacters;

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
