import CreateContainersForCharactersSection from "./displayList.mjs"

class DetailsCharacters extends CreateContainersForCharactersSection {
    constructor(){
        super()
        this.buttonClose = document.createElement('button')
        this.contentTitleAndBirth = document.createElement('article')
        this.h3TitleName = document.createElement('h3')
        this.spanNodeBirth = document.createElement('span')
        this.contentSpan = document.createElement('article')
        this.spanNodeHouse = document.createElement('span')
        this.spanNodeSpecies = document.createElement('span')
        this.spanNodeGender = document.createElement('span')
        this.spanNodeBooks = document.createElement('span')
        this.spanNodePatronus = document.createElement('span')
    }

    createCharacterContainer(data, srcImage, section){
        this.containerCharacters = document.getElementById(`container-characters-${section}-id`);
        super.createCharacterContainer(data, srcImage, section)

        this.buttonClose.setAttribute('id', `btn-close-${section}-id`) //btn-close-card-id
        this.buttonClose.setAttribute('type', 'button')
        this.buttonClose.innerHTML = '<i class="fa-solid fa-xmark"></i>'

        this.newNodeFigCaption.setAttribute('class',`character-${section}-class` )

        this.newNodeImage.setAttribute('class', `character-${section}-img-class`)
        this.newNodeImage.setAttribute('alt', `${data.name}`)
        this.newNodeImage.src = srcImage

        this.newNodeFigCaption.setAttribute('class',`character-${section}-text-class`)
        this.newNodeFigCaption.textContent = ''


        this.contentTitleAndBirth.setAttribute('class', `content-title-birth-${section}-class`)


        this.h3TitleName.textContent = data.name
        this.spanNodeBirth.setAttribute('class', 'birth')
        this.spanNodeBirth.textContent = data.birth
        this.contentSpan.setAttribute('class', 'infoCharactersContainer')
        this.spanNodeHouse.textContent = `House: ${data.house === null ? 'Unknown' : data.house}`
        this.spanNodeSpecies.textContent = `Species: ${data.species}`
        this.spanNodeGender.textContent = `Gender: ${data.gender}`
        this.spanNodePatronus.textContent = `Patronus: ${data.patronus === null ? 'Unknown' : data.patronus}`
        this.spanNodeBooks.textContent = `Books:  ${data.books_featured_in}`

        this.newNodeFigure.insertAdjacentElement('beforeend', this.buttonClose)
        this.newNodeFigure.insertAdjacentElement('beforeend', this.newNodeImage)
        this.newNodeFigure.insertAdjacentElement('beforeend', this.newNodeFigCaption)
        this.newNodeFigCaption.insertAdjacentElement('beforeend', this.contentTitleAndBirth)
        this.contentTitleAndBirth.insertAdjacentElement('beforeend', this.h3TitleName)
        this.contentTitleAndBirth.insertAdjacentElement('beforeend', this.spanNodeBirth)
        this.newNodeFigCaption.insertAdjacentElement('beforeend', this.contentSpan)
        this.contentSpan.insertAdjacentElement('beforeend', this.spanNodeHouse)
        this.contentSpan.insertAdjacentElement('beforeend', this.spanNodeSpecies)
        this.contentSpan.insertAdjacentElement('beforeend', this.spanNodeGender)
        this.contentSpan.insertAdjacentElement('beforeend', this.spanNodePatronus)
        this.contentSpan.insertAdjacentElement('beforeend', this.spanNodeBooks)

        this.containerCharacters.append(this.newNodeFigure)
    }

    displayDetailsCharacters(){
        this.containerCharacters.style.display = "flex"
    }

    cleanDetailsCharacters(){
        this.containerCharacters.innerHTML = ""
    }

    hiddenDetailsCharacters(){
        this.containerCharacters.style.display = "none"
        this.containerCharacters.innerHTML = ""
    }
}

export default DetailsCharacters