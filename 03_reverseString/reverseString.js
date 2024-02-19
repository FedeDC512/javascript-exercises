const reverseString = function(string) {
    let finalString = "";
    while(string.length > 0){
        finalString += string.slice(-1);
        string = string.substring(0, string.length - 1);
    }
    console.log(finalString);
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
