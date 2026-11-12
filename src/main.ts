let stringArr = ["one", "hey", "Dave"]
let guitars = ["Strat", "Les Paul", 5150,]
let mixedData = ["EVH", 1984, true]

stringArr[0] = "Debbie"
stringArr.push("hello")

guitars[0] = 1984
guitars.unshift("Lola")

guitars = stringArr

let test = []
let bands: string[] = []
bands.push("The Beatles")

// Tuple
let myTuple: [string, number, boolean] = ["Debbie", 17, true]

let mixed = ['King', 12, false]

mixed = myTuple
myTuple[1] = 42

//Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = myTuple
myObj = bands
myObj = {}

const exampleObj = {
    prop1: "Debbie",
    prop2: true
}

interface Guitarist {
    name?: string,
    albums: (string | number)[],
    active: boolean
}

let evh: Guitarist = {
    name: "Eddie",
    active: true,
    albums: [1984, 5150, "OU812"]
}


let jp: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
}

evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) return `Hello ${guitarist.name.toUpperCase()}!`
    return "Hello!"
}

console.log(greetGuitarist(jp))

//Enums
// "Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtimes"

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.A)