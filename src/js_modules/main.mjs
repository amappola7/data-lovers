import data from '../data/harrypotter/data.mjs';
import ProcessData from './allData.mjs';
import CreateContainersForCharactersSection from './displayList.mjs';


const HarryPotterData = new ProcessData(data);
const hpCharactersOrderedList = HarryPotterData.getOrderedNamesList();

const creatingHTMLElements = new CreateContainersForCharactersSection();
creatingHTMLElements.createCharacterContainer(hpCharactersOrderedList, "http://imageshack.com/f/po6UMYRmp", "list");
