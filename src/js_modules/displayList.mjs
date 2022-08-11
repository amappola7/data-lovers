// displayMain.mjs - Create and display dynamically the HTML elements of the web page

class CreateContainersForCharactersSection {
  constructor () {
    this.newNodeFigure;
    this.newNodeImage;
    this.newNodeFigCaption;
  }
  
  createCharacterContainer (data, srcImage, section) {
    this.containerCharacters = document.getElementById(`container-characters-${section}-id`);

    // Filling containers with data information
    
    // Creating nodes
    this.newNodeFigure = document.createElement("figure");
    this.newNodeImage= document.createElement("img");
    this.newNodeFigCaption = document.createElement("figcaption");

    // Setting up attributes to the nodes created
    this.newNodeFigure.setAttribute("class", `newNodeFigure-${section}-class`);
    this.newNodeImage.setAttribute("class", `newNodeImage-${section}-class`);
    this.newNodeImage.setAttribute("alt", `${data.name}`);
    this.newNodeImage.setAttribute("data-id", `${data.id}`);
    this.newNodeImage.src = srcImage;
    
    this.newNodeFigCaption.setAttribute("class", `newNodeFigCaption-${section}-class`);
    this.newNodeFigCaption.setAttribute("data-id", `${data.id}`);
    this.newNodeFigCaption.textContent = data.name;
    

    // Appending nodes to its parents
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeImage);
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeFigCaption);
    
    
    return this.newNodeFigure
  }

  //Appending content figure to parent node
  addCharacterList(data, srcImage, section){
    data.forEach((element)=>{
      const elementsCreated = this.createCharacterContainer (element, srcImage, section)
      this.containerCharacters.append(elementsCreated)
    })
  }

  hiddenDisplayList(){
    this.containerCharacters.style.display = "none"
  }

  displayListCharacters(){
    this.containerCharacters.style.display = ""
  }
}

export default CreateContainersForCharactersSection