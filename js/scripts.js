
// Gamer Business Logic
function Gamer(gamerName, currentScore, totalScore) {
  this.gamerName=gamerName;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
};
Gamer.prototype.updateUserScore = function (currentScore) {
  this.currentScore += rollValue;
  if (rollValue === 1) {
    gamer1.currentScore = 0;
    gamer1.displayUserTotalScore(gamer1.totalScore);
  }
};

Gamer.prototype.updateTotalScore = function (currentScore) {
  this.totalScore += currentScore;
  if (this.totalScore >= 100) {
    gamer1.displayUserTotalScore(gamer1.totalScore);
    let refer = $("#winner");
    let htmlForWinner = "";
    htmlForWinner += "<p>" + gamer1.gamerName + ", You are the winner</p>";
    refer.html(htmlForWinner);
  }
  //currentScore = 0;
};


Gamer.prototype.displayUserScore = function (currentScore) {
  let refer = $("div#player1CurrentRoll");
  let htmlForPlayer1CurrentScore = "";
  htmlForPlayer1CurrentScore += "<p>" + currentScore + "</p>";
  refer.html(htmlForPlayer1CurrentScore);
};

Gamer.prototype.displayUserTotalScore = function (totalScore) {
  let refer = $("div#player1TotalScore");
  let htmlForPlayer1TotalScore = "";
  htmlForPlayer1TotalScore += "<p>" + totalScore + "</p>";
  refer.html(htmlForPlayer1TotalScore);
};

Gamer.prototype.displayRollValue = function (rollValue) {
  let refer = $("div#player1DieValue");
  let htmlForPlayer1DieValue = "";
  htmlForPlayer1DieValue += "<p>" + rollValue + "</p>";
  refer.html(htmlForPlayer1DieValue);
};

let gamer1 = new Gamer("Gamer1", 0, 0);
let gamer2 = new Gamer("Gamer2", 0, 0);

//Die Business Logic
function Dice() {
  this.rollValues = [];
  //this.number=6;
}

let dice = new Dice;
//let rollValues=[];
let rollValue = 0;
Dice.prototype.roll = function () {
  rollValue = Math.floor(Math.random() * 6) + 1;
  // if (rollValue === 1) {
  //   gamer1.currentScore = 0;
  //   console.log(rollValue);
  //   console.log(gamer1.currentScore);
  // }
  //this.rollValues.push(rollValue);
}

function attachButtonRollListeners() {
  $("button#player1roll").on("click", function () {
    dice.roll();
    gamer1.updateUserScore(gamer1.currentScore);
    gamer1.displayUserScore(gamer1.currentScore);
    gamer1.displayRollValue(rollValue);
    //displayTotalUserScore(totalUserScore);
  });

};
function attachButtonHoldListeners() {
  $("button#player1hold").on("click", function () {
    gamer1.updateTotalScore(gamer1.currentScore);
    gamer1.displayUserTotalScore(gamer1.totalScore);
    gamer1.currentScore = 0;

  });
}


$(document).ready(function () {
  attachButtonRollListeners(gamer1.currentScore);
  attachButtonHoldListeners(gamer1.totalScore);
  //event.preventDefault();
  // gamer 1 click on gamer1RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());
  // gamer 2 click on gamer2RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());

});

