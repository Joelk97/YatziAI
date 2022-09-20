class PointsCalculator {
    constructor(dices){
        this.dices = dices;
        this.sum = 0;
    }
    calculate(combination, saved){
        this.sum = 0;
        switch(combination){
            case "1s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i-1])===1){
                        this.sum++;
                    };           
                };
                return this.sum;
            case "2s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i-1])===2){
                        this.sum=this.sum+2;
                    };
                };
                return this.sum;
            case "3s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i])===3){
                        this.sum=this.sum+3;
                    };
                };
                return this.sum;
            case "4s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i])===4){
                        this.sum=this.sum+4;
                    };
                };
                return this.sum;
            case "5s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i])===5){
                        this.sum=this.sum+5;
                    };
                };
                return this.sum;
            case "6s":
                for(let i=1;i<6;i++){
                    if(parseInt(saved[i])===6){
                        this.sum=this.sum+6;
                    };
                };
                return this.sum;
        }
    }
}