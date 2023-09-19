// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the array players
let team = players;

// Create a shallow copy of the array players
let team1 = players.slice();

// Create a shallow copy of the object person
let cap1 = Object.assign({}, person);

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
