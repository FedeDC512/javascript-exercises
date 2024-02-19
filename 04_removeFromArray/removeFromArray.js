const removeFromArray = function(array, ...args) {
    finalArray =  array.filter(arrayElement => !args.includes(arrayElement));
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
