const pointsCanvas=document.getElementById('pointsCanvas');
const dicesCanvas=document.getElementById('dicesCanvas');

const dice1=document.getElementById('dice1');
const dice2=document.getElementById('dice2');
const dice3=document.getElementById('dice3');
const dice4=document.getElementById('dice4');
const dice5=document.getElementById('dice5');

const dices = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5];

const savedNumbers = [0,0,0,0,0];
const numbers = [0,0,0,0,0];
let numThrows = 0;

const players = document.getElementById('number-of-players');
players.value = 2;

newDices(savedNumbers);
resetThrows();

const pointsCalculator = new PointsCalculator(dices);

function calculatePoints(combination){
    for(let i=1;i<6;i++){
        if(savedNumbers[i-1]===0){
            saveDice(i);
        }
    }
    let points = pointsCalculator.calculate(combination, savedNumbers);
    var cells = document.getElementById("pointsTable").getElementsByTagName("td");

}

