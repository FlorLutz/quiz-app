const darkCheck = document.querySelector('[data-js="dark-check"]');

console.log(
  window.matchMedia("(prefers-color-scheme: dark)").matches,
  darkCheck.checked
);
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkCheck.setAttribute("checked", "true");
} else {
  darkCheck.setAttribute("checked", "false");
}

darkCheck.addEventListener("input", () => {
  console.log("working");
  if (darkCheck.checked) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
