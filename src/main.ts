// Type Alliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber

// Literal types
let myName: "Daniel"
let userName: "Debbie" | "Lola" | "King"
userName = "King"

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("Hello")
logMsg(add(2, 3))

const substract = function (c: number, d: number): number {
    return c - d
}
/* 
interface mathFunc  {
(a:number, b:number):number
} */

type mathFunc = (a: number, b: number) => number
let multiply: mathFunc = function (e, f) {
    return e * f
}

logMsg(multiply(4, 8))

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== undefined) return a + b + c
    return a + b
}

// default param
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(1, 2, 7))

logMsg(sumAll(2, 1))
logMsg(sumAll(undefined, 2))

// Rest Parameters

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1, 2, 3))

// never return type
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (1 > 100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string"
    if (isNumber(value)) return "number"
    return createError('This should never happen!')
}

