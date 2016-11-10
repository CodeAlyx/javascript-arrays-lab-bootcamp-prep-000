const app = "I don't do much.";
var kittens = ["Milo","Otis","Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newArray = new Array();
  newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name) {
  var newArray = new Array();
  newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
