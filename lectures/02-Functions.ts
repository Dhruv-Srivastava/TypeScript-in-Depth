// Function declaration
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));
console.log(add("10", 20)); // error

// Function expressions
const sum = function (a: number, b: number) {
  return a + b;
};

console.log(sum(20, 10));
console.log(sum(20)); // error

// Default parameters
const sumCopy = function (a = 0, b = 0) {
  return a + b;
};

console.log(sumCopy(10, 20));
console.log(sumCopy(10));
console.log(sumCopy());

// Optional Paramters
function greet(name: string, age?: number) {
  console.log(`Hey ${name}!`);
  if (age) console.log(`${name}'sage is ${age} years`);
}

greet("Dhruv");
greet("Sam", 20);

// Arrow functions
const sayHello = (name: string): void => {
  console.log(`Hello ${name}!`);
};

const returnedValue = sayHello("Dhruv");
console.log(returnedValue); // prints undefined

// Typ Alias of functions
type Movie = {
  name: string;
  genre: string[];
  ratings: number;
};

type MovieCreator = (name: string, genre: string[], ratings: number) => Movie;

const createMovie: MovieCreator = (name, genre, ratings) => ({
  name,
  genre,
  ratings,
});

const movie = createMovie("Fight Club", ["Thriller, Action"], 9.1)
console.log(movie)
