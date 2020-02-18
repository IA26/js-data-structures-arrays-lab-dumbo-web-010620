// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  drivers.unshift(name);
  drivers.pop(name);
  drivers.shift(name); 
  
  
}