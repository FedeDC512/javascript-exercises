const palindromes = function (word) {
    let noSpaces = word.toLowerCase().replace(/\s/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let reverse = noSpaces.split("").reverse().join("");
    return (noSpaces == reverse) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
