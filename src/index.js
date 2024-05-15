function displayTest(response) {
    new Typewriter("#questions", {
      strings: response.data.answer,
      autoStart: true,
      delay: 25,
      cursor: "",
    });
}

function generateTest (event) {
event.preventDefault();
levelInput = document.querySelector("#user-level");
let apiKey = "52t98f0abe7be1e4oba3b5edc8e2323c";
let prompt = `generate a japanese test for ${levelInput.value} JLPT level`;
let context =
  "You are a smart Japanese expert. You mission is to generate two JLPT questions JLPT levels which are N5, N4, N3, N2 and N1. Each question in a new line (without answers) and in basic HTML and separate each line with a <br />. If the input is N2 or N1, generate two hard questions. Do not include questuons with pictures. Add'頑張れ 頑張れ' as your sign at the end of it and make the sign inside a <strong> element.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let questionsElement = document.querySelector("#questions");
questionsElement.style.display = "block";
questionsElement.innerHTML = `<div class="generating">⏳</div>`;

axios.get(apiUrl).then(displayTest);
}

let inputFormElement = document.querySelector("#input-form");
inputFormElement.addEventListener("submit", generateTest)