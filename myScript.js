//Modern browsers support ES5 modules with import/export as normal
import { getElementByIdOrFail } from "./utils.js";
import { characters } from "./characters.js";
// import { antiHeroes } from "./antiheroes.js";
import { simpsons } from "./simpsons.js";

const myButton = getElementByIdOrFail("myButton1");
const focusedCharacterPara = getElementByIdOrFail("focusedCharacterPara");
const myList = getElementByIdOrFail("myDiv");
const image = getElementByIdOrFail("myImg");

myButton.addEventListener("click", () => {
  const searchTerm = prompt("input search term");
  focusedCharacterPara.outerHTML = "You said: " + searchTerm;
});

function makeLiElementsForCharacters() {
  return simpsons.map((ep) => {
    //Not yet attached to any point in the DOM tree
    const element = document.createElement("div");
    element.innerHTML = ep.name;

    element.addEventListener("click", () => {
      alert(`Season: ${ep.season}, Episode: ${ep.number}`);
    });
    element.addEventListener("mouseover", () => {
      image.src = ep.image.medium;
    });

    return element;
  });
}
const characterLiElements = makeLiElementsForCharacters();

for (const el of characterLiElements) {
  myList.appendChild(el);
}
