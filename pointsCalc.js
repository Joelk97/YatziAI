class PointsCalculator {
    constructor(dices){
        this.dices = dices;
        this.sum = 0;
    }
    calculate(combination, saved){
        this.sum = 0;
        let a, b = 0;
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
                return [this.sum, 40]

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
                return [this.sum, 45]
        }
    }
}