let score = 0;
let startBtn = document.querySelector(".start-icon");
let startScreen = document.querySelector(".start-quiz");
let yourScore = document.querySelector(".your-score");
let header = document.querySelector(".header");
console.log(header);
let quiz = document.querySelector(".quiz");
yourScore.classList.add("hide");
let typingScreen = document
  .querySelector(".typing-screen")
  .classList.add("hide");
let homePage = document.querySelector(".home-page");
homePage.addEventListener("click", () => {
  location.reload();
});
startBtn.addEventListener("click", () => {
  setInterval(() => {
    startTimer();
  }, 1000);
  startTest();
});
timeCount = 10;
let retry = document.querySelector(".retry");
let input = document.querySelector("input");
retry.addEventListener("click", () => {
  timeCount = 11;
  time.textContent = timeCount;
  score = 0;
  scoreText.textContent = score;
  yourScore.classList.add("hide");
  header.classList.remove("hide");
  quiz.classList.remove("hide");
  startTimer();
  startTest();
  input.value = "";
});

let time;
function startTimer() {
  timeCount--;
  if (timeCount >= 0) {
    time = document.querySelector(".time");
    time.textContent = timeCount;
    if (timeCount == 0) {
      yourScore.classList.remove("hide");
      header.classList.add("hide");
      quiz.classList.add("hide");
      let finalScore = document.querySelector(".final-score");
      finalScore.textContent = score;
    }
  }
}
let easy = [
  "bell",
  "army",
  "idol",
  "bird",
  "camp",
  "card",
  "dark",
  "draw",
  "fine",
  "fish",
  "good",
  "hand",
  "jump",
  "king",
  "list",
  "mail",
  "news",
];
let medium = [
  "abroad",
  "animal",
  "battle",
  "coffee",
  "decide",
  "eating",
  "family",
  "ground",
  "health",
  "inside",
  "legacy",
  "marine",
  "nation",
  "online",
  "palace",
  "rarely",
  "safety",
];
let hard = [
  "abstract",
  "baseball",
  "calendar",
  "database",
  "election",
  "football",
  "graduate",
  "identity",
  "keyboard",
  "language",
  "moderate",
  "notebook",
  "opponent",
  "painting",
  "printing",
  "shoulder",
  "swimming",
];
let randomWord;
let scoreText = document.querySelector(".score");
let select = document.querySelector("select");
if (localStorage.getItem("value") == null) {
  select.value = "easy";
} else {
  select.value = localStorage.getItem("value");
}
function startTest() {
  startScreen.classList.add("hide");
  quiz.classList.remove("hide");
  header.classList.remove("hide");
  typingScreen = document
    .querySelector(".typing-screen")
    .classList.remove("hide");
  let value = select.options[select.selectedIndex].value;
  localStorage.setItem("value", value);
  let level = eval(value);
  randomWord = level[Math.floor(Math.random() * level.length)];
  let word = document.querySelector(".word");
  console.log(randomWord);
  word.textContent = randomWord;
  input = document.querySelector("input");
  input.focus();
  input.oninput = function () {
    if (input.value.toLowerCase() == randomWord) {
      randomWord = level[Math.floor(Math.random() * level.length)];
      score++;
      word.textContent = randomWord;
      input.value = "";
      scoreText.textContent = score;
      if (timeCount <= 8) {
        if (value == "easy") {
          timeCount += 3;
          time.textContent = timeCount;
        }
        if (value == "medium") {
          timeCount += 2;
          time.textContent = timeCount;
        }
        if (value == "hard") {
          timeCount += 2;
          time.textContent = timeCount;
        }
      } else {
        timeCount.textContent = 10 - timeCount;
      }
    }
  };
}
