
// Gamer Business Logic
function Gamer(gamerName, currentScore, totalScore) {
  this.gamerName = gamerName;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
};
let gamer1=new Gamer("Kevin", 0,0);
let gamer2=new Gamer("Vlad", 0,0);

//Die Business Logic
function Dice(){
  this.rollValues = [];
  //this.number=6;
}

let dice = new Dice;
let rollValue=0;
let rollValues=[];

Dice.prototype.roll = function() {
  rollValue = Math.floor(Math.random()*6)+1;
  this.rollValues.push(rollValue);
}

dice.roll();
console.log(rollValue);
console.log(rollValues);