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
    // Figure attributes
    this.newNodeFigure.setAttribute("class", `newNodeFigure-${section}-class`);

    // Image attributes
    this.newNodeImage.setAttribute("class", `newNodeImage-${section}-class`);
    this.newNodeImage.setAttribute("alt", `${data.name}`);
    this.newNodeImage.setAttribute("data-id", `${data.id}`);
    this.newNodeImage.src = srcImage;

    // Figcaption attribures
    this.newNodeFigCaption.setAttribute("class", `newNodeFigCaption-${section}-class`);
    this.newNodeFigCaption.setAttribute("data-id", `${data.id}`);
    this.newNodeFigCaption.textContent = data.name;

    // Appending nodes to its figure parent
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeImage);
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeFigCaption);

    return this.newNodeFigure
  }

  // Appending figure with image and caption to the main list section
  addCharacterList(data, srcImage, section){
    // Clean container list
    this.containerCharacters = document.getElementById(`container-characters-${section}-id`);
    this.containerCharacters.innerHTML = "";
    this.arrayToAppendListCharacters = []
    // Append figures with characters to container list
    data.forEach((element)=>{
      const elementsCreated = this.createCharacterContainer(element, srcImage, section);
      this.arrayToAppendListCharacters.push(elementsCreated)
    })


  //The dynamic generation of the elements is separated from the aggregation of these to the DOM, to improve page performance
    this.containerCharacters.append(...this.arrayToAppendListCharacters)

  }

  // Function to hide the list characters section
  hiddenDisplayList(){
    this.containerCharacters.style.display = "none";
  }

  // Function to show the list characters section
  displayListCharacters(){
    this.containerCharacters.style.display = "";
  }
}

export default CreateContainersForCharactersSection