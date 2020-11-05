
// Gamer Business Logic
function Gamer(currentScore, totalScore) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
};
Gamer.prototype.updateUserScore=function(currentScore){
  this.currentScore+=rollValue;
};

Gamer.prototype.updateTotalScore=function(currentScore){
  this.totalScore += currentScore;
  currentScore = 0;
};


Gamer.prototype.displayUserScore=function(currentScore) {
  let refer = $("div#player1CurrentRoll");
  let htmlForPlayer1CurrentScore = "";
  htmlForPlayer1CurrentScore+="<p>" + currentScore + "</p>";
  refer.html(htmlForPlayer1CurrentScore);
};

Gamer.prototype.displayUserTotalScore=function(totalScore){
  let refer = $("div#player1TotalScore");
  let htmlForPlayer1TotalScore = "";
  htmlForPlayer1TotalScore+="<p>" + totalScore + "</p>";
  refer.html(htmlForPlayer1TotalScore);
};

let gamer1=new Gamer(0,0);
let gamer2=new Gamer(0,0);

//Die Business Logic
function Dice(){
  this.rollValues = [];
  //this.number=6;
}

let dice = new Dice;
//let rollValues=[];
let rollValue=0;
Dice.prototype.roll = function() {
  rollValue = Math.floor(Math.random()*6)+1;
  //this.rollValues.push(rollValue);
}

function attachButtonRollListeners() {
  $("button#player1roll").on("click", function () {
    dice.roll();
    gamer1.updateUserScore(gamer1.currentScore);
    gamer1.displayUserScore(gamer1.currentScore);
    //displayTotalUserScore(totalUserScore);
  });
};  
function attachButtonHoldListeners() {
  $("button#player1hold").on("click", function () {
    gamer1.updateTotalScore(gamer1.currentScore);
    gamer1.displayUserTotalScore(gamer1.totalScore);
    gamer1.currentScore=0;
    
    
  });
}
    

$(document).ready(function() {
  attachButtonRollListeners(gamer1.currentScore);
  attachButtonHoldListeners(gamer1.totalScore);
    //event.preventDefault();
  // gamer 1 click on gamer1RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());
  // gamer 2 click on gamer2RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());

});

