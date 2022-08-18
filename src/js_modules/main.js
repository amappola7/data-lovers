// main.mjs - DOM Events
import data from '../data/harrypotter/data.js';
import ProcessData from '../data.js';
import CreateContainersForCharactersSection from './displayList.mjs';
import DetailsCharacters from './detailsCharacters.mjs'
//prueba
import RawData from './rawData.js'

// DOM Selectors
const welcomePage = document.getElementById("content-welcome-page-id");
const btnStartWelcomePage = document.getElementById("btn-start-welcome-page-id");
const header = document.getElementById("header-main-page-id");
const mainPage = document.getElementById("main-page-id");
const footer = document.getElementById("footer-main-page-id");
const btnNextPage = document.getElementById("btn-pagination-next-id");
const btnPreviousPage = document.getElementById("btn-pagination-back-id");
const sortBtn = document.getElementById("sort-button-id");
const sortModalMenu = document.getElementById("sort-modal-menu-id");

// Characters - Dataset
let rawData = new RawData(data)
rawData.getBooksListById([1,2,3,4,5,6,7])
// Create ordered characters list
const HarryPotterData = new ProcessData(rawData.allData);
const creatingHTMLElements = new CreateContainersForCharactersSection();
//Event welcome button

btnStartWelcomePage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(rawData.allData), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
    welcomePage.style.display = "none";
    header.style.display = "block";
    mainPage.style.display = "flex";
    footer.style.display = "flex";
});

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
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(rawData.allData), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})
// Previous Page
btnPreviousPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(rawData.allData), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})

// Create characters card


// Open modal menu in sort button
sortBtn.addEventListener("click", () => {
    sortModalMenu.style.display = "flex";
})




