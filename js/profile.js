function darkMode() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkCheck.checked = true;
  } else {
    darkCheck.checked = false;
  }
}

const darkCheck = document.querySelector('[data-js="dark-check"]');

darkMode();

console.log(
  window.matchMedia("(prefers-color-scheme: dark)").matches,
  darkCheck.checked
);

darkCheck.addEventListener("input", () => {
  if (darkCheck.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    console.log("working checked");
  } else {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    console.log("working unchecked");
  }
});
