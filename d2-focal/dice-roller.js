// use process.argv look this up? not super clear on how to use this

// create a function use math.random to generate random mutiply by 10


// limit the numbers from 1-6 not sure if there is a short cut
// store result in a variable

// do this three times depends on user input

//push results from each i into an array
// use the array.prototype.join short cut to change array to string
// print results to console

let userArg = function() {
  return process.argv.slice(2);
};
let numGen = function() {
  return Math.floor(Math.random() * (6 - 1) + 1);
};
let resArray = [];
for (let i = 0; i < userArg(); i++) {
  resArray.push(numGen());
}

console.log(resArray.join(", "));