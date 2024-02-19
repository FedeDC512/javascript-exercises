const findTheOldest = function(people) {
    let oldest = people[0];
    people.forEach((person) => {
        if(getAge(oldest) < getAge(person)) oldest = person;
    });
    return oldest;
};

function getAge(person){
    let yearOfDeath;
    if(person.yearOfDeath == undefined){
        yearOfDeath = new Date().getFullYear();
    } else yearOfDeath = person.yearOfDeath;
    return yearOfDeath - person.yearOfBirth;
}
// Do not edit below this line
module.exports = findTheOldest;
