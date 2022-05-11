"use strict";

// const BetweenNum = document.querySelectorAll('.between')

// console.log(document.querySelector(".guess_message").textContent);
// document.querySelector(".guess_message").textContent = "You can start now !!";
// console.log(document.querySelector(".guess_message").textContent);

let Score = 20;
let Highscore = 0;
let Secretnumber = Math.trunc(Math.random() * 20) + 1;

const Displaymessage = function (message) {
  document.querySelector(".guess_message").textContent = message;
};

document.querySelector(".btn_check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // INPUT NOT A NUMBER
  if (!guess) {
    Displaymessage("Not A Number");

    // WHEN GUESS IS EQUAL TO SECRETNUMBER
  } else if (guess === Secretnumber) {
    Displaymessage("Congratulations You Win !!");
    document.querySelector(".secret_num").textContent = Secretnumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".secret_num").style.width = "15rem";

    if (Score > Highscore) {
      Highscore = Score;
      document.querySelector(".highscore").textContent = Score;
    }

    // when its a wrong guess.
  } else if (guess !== Secretnumber) {
    if (Score > 1) {
      Displaymessage(guess > Secretnumber ? "Value Too High" : "Value Too Low");
      document.querySelector(".guess").textContent = !Secretnumber;
      Score--;
      document.querySelector(".score").textContent = Score;
    } else {
      Displaymessage("You lose, Start Again!!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// To Play Again

document.querySelector(".btn_again").addEventListener("click", function () {
  Score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".secret_num").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess_message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = Score;

  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".secret_num").style.width = "15rem";
});
