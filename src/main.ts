// Type assertion || Type casting

type One = string
type Two = string | number
type Three = "hello"

// cconvert to more or less specific type

let a: One = "hello"
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>"world"
let e = <string | number>"world"

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === "add") return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, "concat") as string

// Ts sees no problem here but a string is returned (be careful with type assetion)
let nextVal: number = addOrConcat(2, 2, "concat") as number

10 as string
(10 as unknown) as string // force or double casting

// The DOM
const anotherImg = <HTMLImageElement>document.querySelector("#myimg") // does not work with react in tsx files
const myImg = document.getElementById('img') as HTMLImageElement
const img = document.querySelector('img')!

img.src
myImg.src
anotherImg.src