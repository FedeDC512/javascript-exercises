const getTheTitles = function(books) {
    let finalArray = [];
    books.forEach( book => finalArray.push(book.title));
    return finalArray;
};

// Do not edit below this line
module.exports = getTheTitles;
