// Basic Types

// String
let title: string = "The Prestige";

// Number
let releasedIn: number = 2006;

// Boolean
let isRecommended: boolean = true;

// Array
let cast: string[] = [
  "Christian Bale",
  "Hugh Jackman",
  "Sir Michael Caine",
  "Scarlett Johansson",
  "Rebecca Hall",
];

// undefined
let error: undefined;

// null
let loading: null;

// void
function init(): void {}

// any
let points: any = 10;
points = "ten";

let x; // 'any' type

// unknown
let y: unknown; // 'unknown' type
y = "hey";
y = 10;

// y++;
// y.toUpperCase();

// We are getting an error. The key to work with unknown is to narrow the type

if (typeof y === "number") y++;

if (typeof y === "string") y = y.toUpperCase();


// Union
let id: string | undefined;

id = "123"
id = undefined

// Enums
enum FileTypes{
  mp3, // 0
  mp4, // 1
  wav // 2
}
let fileType = FileTypes.mp3

fileType = FileTypes.wav

// Type Alias
type StringAlias = string
let myName: StringAlias = "Dhruv"

type ValidID = string | number
let newId:ValidID = 121

