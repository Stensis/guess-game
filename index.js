let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// code refactoring
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent;
};
// adding event listener to the click event
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ No number!";
    displayMessage("⛔️ No number!");

    //   when a player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    // DRY CODE
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    // manipulating the dom using css
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when the guess is wrong
  } else if (guess !== secretNumber) {
    // document.querySelector(".message").textContent =
    //   guess > secretNumber ? "too  high" : "too low!";
    displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    score--;
    document.querySelector(".score").textContent = score;
  }
});

// initial playing without reloading the page
document.querySelector(".replay").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//   // when the input is low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "too low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//     // when the input is high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "too  high";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
