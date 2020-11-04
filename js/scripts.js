
// Gamer Business Logic
function Gamer(currentScore, totalScore) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
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

//let rollValues =dice.roll();
//console.log(rollValue);
//console.log(rollValues);

Gamer.prototype.updateUserScore=function(currentScore){
  this.currentScore+=rollValue;
}

Gamer.prototype.displayUserScore=function(currentScore) {
  let refer = $("div#player1CurrentRoll");
  let htmlForPlayer1CurrentScore = "";
  htmlForPlayer1CurrentScore+="<p>" + currentScore + "</p>";
  refer.html(htmlForPlayer1CurrentScore);
};



function attachButtonListeners() {
  $("button#player1roll").on("click", function () {
    dice.roll();
    console.log(gamer1.currentScore);
    gamer1.updateUserScore(gamer1.currentScore);
    gamer1.displayUserScore(gamer1.currentScore);
    //displayTotalUserScore(totalUserScore);
    console.log(rollValue);
    console.log(gamer1.currentScore);
  });
};


$(document).ready(function() {
  attachButtonListeners(gamer1.currentScore);
    //event.preventDefault();
  // gamer 1 click on gamer1RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());
  // gamer 2 click on gamer2RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());

});

