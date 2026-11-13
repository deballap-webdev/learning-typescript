class Coder {
    secondLang!: string
    constructor(public readonly name: string, public music: string, private age: number, protected lang: string = 'Typescript') {

    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

const Debbie = new Coder('Debbie', 'Classic', 17,)

console.log(Debbie.getAge())
// console.log(Debbie.age)
// console.log(Debbie.lang)

class WebDev extends Coder {
    constructor(name: string, music: string, age: number, public computer: string) {
        super(name, music, age)
        this.computer = computer
    }

    getLang() {
        return `I write ${this.lang}`
    }
}

const Danny = new WebDev('Danny', 'Pop', 28, "Linux")
console.log(Danny.getLang())

// Applying interface to classes

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist("Eddy", "guitar")

console.log(Page.play("strums"))

//  Static members

class Peeps {
    static count: number = 0
    static getCount() {
        return Peeps.count
    }
    public id: number
    constructor(public name: string) {
        this.name = name,
            this.id = ++Peeps.count
    }
}

const Love = new Peeps('Love')
const Gabriel = new Peeps('Gabriel')
const Divine = new Peeps("Divine")
console.log(Peeps.count)
console.log(Gabriel.id)
console.log(Love.id)
console.log(Divine.id)

// keeping State in instantiated Classes

class Bands {
    dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value
        } else
            throw new Error("Param is not an array of strings")


    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, "ZZ top"]
console.log(MyBands.data)
MyBands.data = ["Van Helen", 5150]