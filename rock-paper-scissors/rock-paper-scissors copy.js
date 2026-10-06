let scores = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();

function showComputerMve() {
  const randNumber = Math.random();
  let computerMve = "";
  //generate random number
  if (randNumber >= 0 && randNumber < 1 / 3) {
    computerMve = "Rock";
  } else if (randNumber >= 1 / 3 && randNumber < 2 / 3) {
    computerMve = "Paper";
  } else if (randNumber >= 2 / 3 && randNumber < 1) {
    computerMve = "Scissors";
  }
  return computerMve;
}

document.querySelector(".js-auto-play-button").addEventListener("click", () => {
  autoPlay();
});

let isAutoplaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoplaying) {
    intervalId = setInterval(() => {
      const playerMve = showComputerMve();
      showResult(playerMve);
    }, 1000);
    isAutoplaying = true;
  } else {
    clearInterval(intervalId);
    isAutoplaying = false;
  }
}

document.querySelector(".js-rock-button").addEventListener("click", () => {
  showResult("Rock");
});

document.querySelector(".js-Scissors-button").addEventListener("click", () => {
  showResult("Scissors");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  showResult("Paper");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    showResult("rock");
  } else if (event.key === "p") {
    showResult("paper");
  } else if (event.key === "s") {
    showResult("scissors");
  }
});

function showResult(buttonName) {
  const computerMve = showComputerMve();
  let result = "";
  if (buttonName === "Rock") {
    if (computerMve === "Rock") {
      result = "Tie.";
    } else if (computerMve === "Paper") {
      result = "You lose.";
    } else if (computerMve === "Scissors") {
      result = "You win.";
    }
  } else if (buttonName === "Paper") {
    if (computerMve === "Rock") {
      result = "You win.";
    } else if (computerMve === "Paper") {
      result = "Tie.";
    } else if (computerMve === "Scissors") {
      result = "You lose.";
    }
  } else if (buttonName === "Scissors") {
    if (computerMve === "Rock") {
      result = "You lose.";
    } else if (computerMve === "Paper") {
      result = "You win.";
    } else if (computerMve === "Scissors") {
      result = "Tie.";
    }
  }
  if (result === "You win.") {
    scores.wins++;
  } else if (result === "You lose.") {
    scores.losses++;
  } else if (result === "Tie.") {
    scores.ties++;
  }

  localStorage.setItem("score", JSON.stringify(scores));
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
    <img src="${buttonName}-emoji.png" class="move-icon"> .
    <img src="${computerMve}-emoji.png" class="move-icon"> Coputer.`;
}

document
  .querySelector(".js-reset-score-button")
  .addEventListener("click", () => {
    scores.wins = 0;
    scores.losses = 0;
    scores.ties = 0;
    localStorage.removeItem("score");
    updateScoreElement();
  });

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    `wins : ${scores.wins}, losses : ${scores.losses}, ties : ${scores.ties}`;
}
