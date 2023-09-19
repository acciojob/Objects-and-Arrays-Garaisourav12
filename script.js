let players = ["John", "Bob", "Alice", "Poppy"];

let person = {
  name: "John Doe",
  age: 80,
};

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

// Test if the properties of person or the elements of players are modified
players.push("New Player");
person.name = "Updated Name";

// Print the results to verify
console.log("Original Players Array:", players);
console.log("Reference (team) to Players Array:", team);
console.log("Shallow Copy (team1) of Players Array:", team1);
console.log("Shallow Copy (cap1) of Person Object:", cap1);


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
