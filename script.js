const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// Create a reference to the array players
const team = players;

// Create a shallow copy of the array players
const team1 = players.slice();

// Create a shallow copy of the object person
const cap1 = Object.assign({}, person);

// Test if the properties of person or the elements of players are modified
players.push("New Player");
person.name = "Updated Name";


