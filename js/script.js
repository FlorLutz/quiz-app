const qsAndAs = {
  "What is the name of the school that Harry Potter attends?":
    "Hogwarts School of Witchcraft and Wizardry",

  "Who is Harry Potter's best friend throughout the series?": "Ron Weasley",

  "What is the name of the lightning bolt-shaped scar on Harry Potter's forehead?":
    "The Dark Mark",

  "Which magical creature guards the entrance to the Gryffindor common room?":
    "The Fat Lady (portrait)",

  "What is the name of the game played on flying broomsticks in the wizarding world?":
    "Quidditch",

  "What is the name of the three-headed dog that guards the Sorcerer's Stone?":
    "Fluffy",

  "Which professor is the head of Slytherin House at Hogwarts?":
    "Severus Snape",

  "What is the name of the dark wizard who killed Harry Potter's parents and tried to kill him as a baby?":
    "Lord Voldemort (Tom Riddle)",

  "What type of creature is Dobby?": "House Elf",

  "What magical object allows the Marauders to create a map of Hogwarts that shows its layout and the location of people within it?":
    "The Marauder's Map",
};

// The functions could include these parameters and lines to make it possible to set data;js;attr. or similar:
// , atttribute, attributeValue
// newTextElement.setAttribute(attribute, attributevalue);

function createTextElement(elementType, elementClass, content) {
  const newTextElement = document.createElement(elementType);
  newTextElement.classList.add(elementClass);
  newTextElement.textContent = content;
  return newTextElement;
}

function createImageElement(elementClass, srcValue, altValue) {
  const newImageElement = document.createElement("img");
  newImageElement.classList.add(elementClass);
  newImageElement.setAttribute("src", srcValue);
  newImageElement.setAttribute("alt", altValue);
  return newImageElement;
}

const mainIndex = document.querySelector('[data-js="main-index"]');
const mainBookmarks = document.querySelector('[data-js="main-bookmarks"]');
let questionCounter = 0;
let bookmarkCounter = 0;
let i = 0;

for (const entry in qsAndAs) {
  const section = createTextElement("section", "card");
  mainIndex.append(section);
  const picture = createTextElement("picture");
  section.append(picture);
  const imageBookmark = createImageElement(
    "card__bookmark",
    "images/bookmark_not-marked.png",
    "click to add bookmark"
  );
  picture.append(imageBookmark);
  const paragraphQuestion = createTextElement(
    "p",
    "card__question",
    Object.keys(qsAndAs)[i]
  );
  section.append(paragraphQuestion);
  const button = createTextElement("button", "card__button", "Show answer");
  section.append(button);
  const paragraphAnswer = createTextElement(
    "p",
    "card__question",
    Object.values(qsAndAs)[i]
  );
  paragraphAnswer.setAttribute("hidden", "hidden");
  button.addEventListener("click", () => {
    paragraphAnswer.removeAttribute("hidden");
    questionCounter++;
    console.log("questionCounter", questionCounter);
    button.setAttribute("hidden", "hidden");
  });
  section.append(paragraphAnswer);
  const divTagBox = createTextElement("div", "card__tag-box");
  section.append(divTagBox);
  const divTag1 = createTextElement("div", "card__tag", "Harry Potter");
  divTagBox.append(divTag1);
  const divTag2 = createTextElement("div", "card__tag", "Hogwards");
  divTagBox.append(divTag2);
  const divTag3 = createTextElement("div", "card__tag", "magic");
  divTagBox.append(divTag3);

  imageBookmark.addEventListener("click", (event) => {
    if (imageBookmark.src.includes("not-marked")) {
      imageBookmark.src = "images/bookmark_marked.png";
      bookmarkCounter++;
      // mainBookmarks.remove(section);
    } else {
      imageBookmark.src = "images/bookmark_not-marked.png";
      bookmarkCounter--;
      // mainBookmarks.append(section);
    }
    console.log("bookmarkCounter", bookmarkCounter);
    // mainBookmarks.append(section); //needs cookies to work?
  });
  i++;
}

/* <section class="card">
<picture>
  <img
    class="card__bookmark"
    src="images/bookmark_not-marked.png"
    alt="click to add bookmark"
  />
</picture>
<p class="card__question">Is this a question? Is this a question?</p>
<button class="card__button">Show answer</button>
<p class="card__question">Is this a question? Is this a question?</p>
<div class="card__tag-box">
  <div class="card__tag">#html</div>
  <div class="card__tag">#css</div>
  <div class="card__tag">#js</div>
</div>
</section> */
