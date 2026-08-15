const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    const oldestAge = getAge(oldest);
    const personAge = getAge(person);

    return personAge > oldestAge ? person : oldest;
  });
}

function getAge(person) {
  const deathYear = person.yearOfDeath || new Date().getFullYear();
  return deathYear - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
