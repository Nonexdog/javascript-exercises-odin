const people1 = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const people2 = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const people3 = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(people) {
  const sortedPeople = people.sort((person1, person2) => {
    const p1Age = person1.yearOfDeath - person1.yearOfBirth;
    const p2Age = person2.yearOfDeath - person2.yearOfBirth;
    return p2Age - p1Age;
  })

  return sortedPeople[0];
};

console.log(findTheOldest(people1));

// This function should sort all of the items in the list based off of the death - birth and return the first item. 
// If a death doesn't exist, use Date 

// Do not edit below this line
// module.exports = findTheOldest;
