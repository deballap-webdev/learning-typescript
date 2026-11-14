//const stringEcho = (arg: string) : string => arg
const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('Jhon'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'Jhon' }))
console.log(isObj(null))

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue("Debbie"))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) // modified
console.log(isTrue({ name: "Debbie" }))
console.log(isTrue([])) // modified
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BoolCheck<T> {
    arg: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T) => {
    // process process User
    return user
}

console.log(processUser({ id: 1, name: "Debbie" }))
//console.log(processUser({ name: "Debbie" }))

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], Key: K): T[K][] => {
    return users.map(user => user[Key])
}

class StateObject<T> {
    private data: T
    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("Jhon")
console.log(store.state)
store.state = "Debbie"

const myState = new StateObject<(string | number | boolean)[]>([28])

myState.state = (['Debbie', 17, true])

console.log(myState.state)