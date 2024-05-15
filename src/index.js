function generateTest (event) {
event.preventDefault();

new Typewriter("#questions", {
  strings: "YOYOYOY",
  autoStart: true,
  delay: 30,
  cursor: "",
});
}

let inputFormElement = document.querySelector("#input-form");
inputFormElement.addEventListener("submit", generateTest)