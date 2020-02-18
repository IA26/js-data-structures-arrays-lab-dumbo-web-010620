// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  
  let newDrivers = drivers.splice();
  drivers.push(name);
  drivers.unshift(name);
  drivers.pop(name);
  drivers.shift(name); 
  
  
}