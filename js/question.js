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

function createNewQuestion(question, answer, tags) {
  const section = createTextElement("section", "card");
  section.classList.add("card--new");
  mainQuestion.append(section);
  const picture = createTextElement("picture");
  section.append(picture);
  const imageBookmark = createImageElement(
    "card__bookmark",
    "images/bookmark_not-marked.png",
    "click to add bookmark"
  );
  picture.append(imageBookmark);
  const paragraphQuestion = createTextElement("p", "card__question", question);
  section.append(paragraphQuestion);
  const button = createTextElement("button", "card__button", "Show answer");
  section.append(button);
  const paragraphAnswer = createTextElement("p", "card__question", answer);
  paragraphAnswer.setAttribute("hidden", "hidden");
  button.addEventListener("click", () => {
    if (button.textContent === "Show answer") {
      paragraphAnswer.removeAttribute("hidden");
      button.textContent = "Hide answer";
    } else {
      paragraphAnswer.setAttribute("hidden", "hidden");
      button.textContent = "Show answer";
    }
  });
  section.append(paragraphAnswer);
  const divTagBox = createTextElement("div", "card__tag-box");
  section.append(divTagBox);
  const tagArray = tags.split(", ");
  if (tagArray.length >= 1) {
    const divTag1 = createTextElement("div", "card__tag", tagArray[0]);
    divTagBox.append(divTag1);
    if (tagArray.length >= 2) {
      const divTag2 = createTextElement("div", "card__tag", tagArray[1]);
      divTagBox.append(divTag2);
      if (tagArray.length >= 3) {
        const divTag3 = createTextElement("div", "card__tag", tagArray[2]);
        divTagBox.append(divTag3);
      }
    }
  }
  imageBookmark.addEventListener("click", (event) => {
    if (imageBookmark.src.includes("not-marked")) {
      imageBookmark.src = "images/bookmark_marked.png";
    } else {
      imageBookmark.src = "images/bookmark_not-marked.png";
    }
  });
}

const mainQuestion = document.querySelector('[data-js="main-new-question"]');
const formQuestion = document.querySelector('[data-js="form-question"]');
const questionCharLeft = document.querySelector(
  '[data-js="question-characters"]'
);
const answerCharLeft = document.querySelector('[data-js="answer-characters"]');

formQuestion.yourQuestion.focus();

formQuestion.yourQuestion.addEventListener("input", () => {
  questionCharLeft.textContent =
    150 -
    formQuestion.yourQuestion.value.length +
    (150 - formQuestion.yourQuestion.value.length === 1
      ? " character left"
      : " characters left");
  if (formQuestion.yourQuestion.value.length === 150) {
    questionCharLeft.classList.add("char-left-red");
  } else {
    questionCharLeft.classList.remove("char-left-red");
  }
  if (formQuestion.yourQuestion.value.length === 0) {
    questionCharLeft.textContent = "";
  }
});

formQuestion.yourAnswer.addEventListener("input", () => {
  answerCharLeft.textContent =
    150 -
    formQuestion.yourAnswer.value.length +
    (150 - formQuestion.yourAnswer.value.length === 1
      ? " character left"
      : " characters left");
  if (formQuestion.yourAnswer.value.length === 150) {
    answerCharLeft.classList.add("char-left-red");
  } else {
    answerCharLeft.classList.remove("char-left-red");
  }
  if (formQuestion.yourAnswer.value.length === 0) {
    answerCharLeft.textContent = "";
  }
});

formQuestion.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data", data);
  createNewQuestion(data.yourQuestion, data.yourAnswer, data.yourTags);
  formQuestion.yourQuestion.value = "";
  formQuestion.yourAnswer.value = "";
  formQuestion.yourTags.value = "";
  questionCharLeft.textContent = "";
  answerCharLeft.textContent = "";
  formQuestion.yourQuestion.focus();
});
