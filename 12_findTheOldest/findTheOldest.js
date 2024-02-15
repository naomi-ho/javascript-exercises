const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
        const oldest = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const current = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldest < current ? currentPerson : oldestPerson;
    });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;