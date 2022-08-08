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
    data.forEach(element => {
    // Creating nodes
    this.newNodeFigure = document.createElement("fig");
    this.newNodeImage= document.createElement("img");
    this.newNodeFigCaption = document.createElement("figcaption");

    // Setting up attributes to the nodes created
    this.newNodeFigure.setAttribute("class", `newNodeFigure-${section}-class`);
    this.newNodeImage.setAttribute("class", `newNodeImage-${section}-class`);
    this.newNodeFigCaption.setAttribute("class", `newNodeFigCaption-${section}-class`);
    this.newNodeFigCaption.textContent = element;
    this.newNodeImage.src = srcImage;

    // Appending nodes to its parents
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeImage);
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeFigCaption);
    this.containerCharacters.appendChild(this.newNodeFigure);
    });
  }
}

export default CreateContainersForCharactersSection