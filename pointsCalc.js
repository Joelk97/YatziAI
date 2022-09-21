class PointsCalculator {
    constructor(dices){
        this.dices = dices;
        this.sum = 0;
    }
    calculate(combination, saved){
        this.sum = 0;
        let a, b, c = 0;
        let found = false;
        switch(combination){
            case "1s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i-1])===1){
                        this.sum++;
                    };           
                };
                return [this.sum, 0];
            case "2s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i-1])===2){
                        this.sum=this.sum+2;
                    };
                };
                return [this.sum, 5];
            case "3s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i-1])===3){
                        this.sum=this.sum+3;
                    };
                };
                return [this.sum, 10];
            case "4s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i-1])===4){
                        this.sum=this.sum+4;
                    };
                };
                return [this.sum, 15];
            case "5s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i-1])===5){
                        this.sum=this.sum+5;
                    };
                };
                return [this.sum, 20];
            case "6s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i-1])===6){
                        this.sum=this.sum+6;
                    };
                };
                return [this.sum, 25];
            case "1couple":
                a, b = 0;
                found = false;
                for(let i=0;i<5;i++){
                    for(let j=1+i;j<5;j++){
                        if(saved[i]===saved[j]){
                            if(!found){
                                a = i;
                                b = j;
                                found = true;
                            }else{
                                if(saved[i]>saved[a]){
                                    a = i;
                                    b = j;
                                }
                            }
                        };
                    };
                };
                this.sum=parseInt(saved[a])+parseInt(saved[b]);
                return [this.sum, 40];

            case "2couple":
                a, b = 0;
                found = false;
                for(let i=0;i<5;i++){
                    for(let j=1+i;j<5;j++){
                        if(saved[i]===saved[j]){
                            if(!found){
                                a = i;
                                found = true;
                            }else{
                                if(saved[i]!=saved[a]){
                                    b = i;
                                }else{return false};
                            }
                        };
                    };
                };
                this.sum=parseInt(saved[a])*2+parseInt(saved[b])*2;
                return [this.sum, 45];
            case "3equal":
                a, b, c = 0;
                found = false;
                for(let i=0;i<5;i++){
                    for(let j=1+i;j<5;j++){
                        for(let k=i+2;k<5;k++){
                            if(saved[i] === saved[j] && saved[i] === saved[k]){
                                a = i;
                                found = true;
                            }
                        }
                    }
                }
                if(!found){
                    return false;
                }
                this.sum = parseInt(saved[a])*3;
                return [this.sum, 50];
            case "4equal":
                a, b, c = 0;
                found = false;
                for(let i=0;i<5;i++){
                    for(let j=1+i;j<5;j++){
                        for(let k=i+2;k<5;k++){
                            for(let l=i+3;l<5;l++){
                                if(saved[i] === saved[j] && saved[i] === saved[k] && saved[i] === saved[l]){
                                    a = i;
                                    found = true;
                                }
                            }
                        }
                    }
                }
                if(!found){
                    return false;
                }
                this.sum = parseInt(saved[a])*4;
                return [this.sum, 55];
            case 'smalls':



            case "yatzy":
                a, b, c = 0;
                found = false;
                if(saved[1] === saved[0] && saved[1] === saved[2] && saved[1] === saved[3] && saved[1] === saved[4]){
                    found = true;
                }
                if(!found){
                    return false;
                }
                this.sum = 50;
                return [this.sum, 80];
        }
    }
}



function bubbleSort(numberArray){
    let sortedNumbers = [];
    let a;
    for(let i=0;i<5;i++){
        sortedNumbers[i] = parseInt(numberArray[i]);
    }
    for(let j=0;j<5;j++){
        for(let i=1;i<5;i++){
            if(sortedNumbers[i-1]>sortedNumbers[i]){
                a = sortedNumbers[i-1];
                sortedNumbers[i-1] = sortedNumbers[i];
                sortedNumbers[i]=a;
            };
        };
    };
    return sortedNumbers;
}


