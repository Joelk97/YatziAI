function saveDice(nr){
    if(dices[nr-1].style.backgroundColor!='salmon'){
        savedNumbers[nr-1]=dices[nr-1].innerText;
        savedNumbers.splice(5,1);
        dices[nr-1].style.backgroundColor = 'salmon';
    }else if(dices[nr-1].style.backgroundColor==='salmon'){
        dices[nr-1].style.backgroundColor = 'beige'
        savedNumbers[nr-1]=0;
    }
    return savedNumbers;   
}

function newDices(savedDices=[]) {
    let throws = 5-savedDices.length;
    for(let i=0;i<throws;i++){
        dices[i].innerText = Math.floor(Math.random()*6+1);
        dices[i].value = dices[i].innerText;
    }
    return dices;
}

function throwDices(savedDices=savedNumbers){
    if(numThrows===3){
        return false;
    }
    for(let i=0;i<savedDices.length;i++){
        if(savedDices[i]===0){
            dices[i].innerText = Math.floor(Math.random()*6+1);
            dices[i].value = parseInt(dices[i].innerText);
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
    for(let i=0;i<5;i++){
        dices[i].style.backgroundColor = 'beige';
        dices[i].innerText = "0";
        savedNumbers[i] = 0;
    }
}