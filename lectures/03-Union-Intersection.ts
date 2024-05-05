export {};

// Union
// Example 1
type numArrayUnionString = string | number[];

let weather: numArrayUnionString = "Sunny";
let temperateForecast: numArrayUnionString = [30, 32, 35, 31, 40];

// The methods which are safe to call on this union type would be the methods available in both

declare function getUnionType(): numArrayUnionString;

const myUnionTypeInstance = getUnionType();

myUnionTypeInstance.toUpperCase(); // error
myUnionTypeInstance.reduce(() => {}); // error
myUnionTypeInstance.slice(); // works
myUnionTypeInstance.length; // works

// Example 2
type Name = { name: string };
type Age = { age: number };

type NameUnionAge = Name | Age;

let name: NameUnionAge = { name: "Sam" };
let age: NameUnionAge = { age: 20 };
let name_plus_age: NameUnionAge = { name: "Sam", age: 20 };
let name_plus_age_plus_height: NameUnionAge = {
  name: "Sam",
  age: 20,
  height: 180,
}; // error

// Intersection

// Example 1

type User = {
  name: string;
  age: number;
};

type AccessAllowed = {
  access: true;
};

type Admin = User & AccessAllowed;

const admin: Admin = {
  name: "Sam",
  age: 20,
  access: true,
};


