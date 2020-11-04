
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
let rollValue=0;
//let rollValues=[];

Dice.prototype.roll = function() {
  rollValue = Math.floor(Math.random()*6)+1;
  //this.rollValues.push(rollValue);
}

dice.roll();
console.log(rollValue);
console.log(rollValues);

Gamer.prototype.updateUserScore=function(gamer1){
  this.gamer1.currentScore+=rollValue;
  this.gamer2.currentScore+=rollValue;
}



$(document).ready(function() {
  // gamer 1 click on gamer1RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());
  // gamer 2 click on gamer2RollButton=> then we get rollValue for gamer1
  // gamer1.updateUserScore(currentScore());

});

