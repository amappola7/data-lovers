// main.mjs - DOM Events

import data from '../data/harrypotter/data.mjs';
import ProcessData from './allData.mjs';
import CreateContainersForCharactersSection from './displayList.mjs';
import DetailsCharacters from './detailsCharacters.mjs'

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
const characterData = data.characters

//Event welcome button
btnStartWelcomePage.addEventListener("click", () => {
    welcomePage.style.display = "none";
    header.style.display = "block";
    mainPage.style.display = "flex";
    footer.style.display = "flex";
});

// Create ordered characters list
const HarryPotterData = new ProcessData(data);

// Display main page and characters list
const creatingHTMLElements = new CreateContainersForCharactersSection();
creatingHTMLElements.addCharacterList(HarryPotterData.charactersPerPage(), "http://imageshack.com/f/pnUFd2QWp", "list");


// Create events to pagination
// Next Page
btnNextPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToNextPage(), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})
// Previous Page
btnPreviousPage.addEventListener("click", () => {
    creatingHTMLElements.addCharacterList(HarryPotterData.goToPreviousPage(), "https://imagizer.imageshack.com/img923/332/wM4EDt.png", "list");
})

// Create characters card
const detailsDataCharacters = new DetailsCharacters();
const eventContainers = creatingHTMLElements.containerCharacters;

// Open characters card
eventContainers.addEventListener('click', (event) => {
    if (event.target.nodeName === "FIGURE" || event.target.nodeName === "FIGCAPTION" || event.target.nodeName === "IMG") {
        characterData.forEach((elem) => {
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

