const sumAll = function(min, max) {
    if(Number.isInteger(min) && Number.isInteger(max) && min >= 0 && max >= 0){
        if(min > max){
            let temp;
            temp = min;
            min = max;
            max = temp;
        }
        let sum = 0;
        for(let i = 0; i < (max-min+1); i++){
            sum += min + i;
        }
        return sum;
    } else return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
