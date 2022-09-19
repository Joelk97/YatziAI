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

const numbers = [0,0,0,0,0];
let numThrows = 0;
newDices(numbers);

function saveDice(nr){
    if(dices[nr-1].style.backgroundColor!='salmon'){
        numbers[nr-1]=dices[nr-1].innerText;
        numbers.splice(5,1);
        dices[nr-1].style.backgroundColor = 'salmon';
    }else if(dices[nr-1].style.backgroundColor==='salmon'){
        dices[nr-1].style.backgroundColor = 'beige'
        numbers[nr-1]=0;
    }
    
    console.log(numbers);
    return numbers;
}

function newDices(savedDices=[]) {
    let throws = 5-savedDices.length;
    for(let i=0;i<throws;i++){
        dices[i].innerText = Math.floor(Math.random()*6+1);
        dices[i].value = dices[i].innerText;
    }
}

function throwDices(savedDices=numbers){
    if(numThrows===3){
        return false;
    }
    for(let i=0;i<savedDices.length;i++){
        if(savedDices[i]===0){
            dices[i].innerText = Math.floor(Math.random()*6+1);
            dices[i].value = dices[i].innerText;
        }
    }
    numThrows++;
}

function showNrDices(savedDices){
    let dicesLenght = savedDices.length;
    for(let i=0;i<dicesLenght;i++){
        dices[i].innerText=savedDices[i];
        dices[i].value=savedDices[i];
    }
    
}

function resetThrows() {
    numThrows = 0;
}



