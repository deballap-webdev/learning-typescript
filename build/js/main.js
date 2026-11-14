//const stringEcho = (arg: string) : string => arg
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('Jhon'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Jhon' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Debbie"));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Debbie" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const processUser = (user) => {
    // process process User
    return user;
};
console.log(processUser({ id: 1, name: "Debbie" }));
//console.log(processUser({ name: "Debbie" }))
const getUsersProperty = (users, Key) => {
    return users.map(user => user[Key]);
};
class StateObject {
    data;
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Jhon");
console.log(store.state);
store.state = "Debbie";
const myState = new StateObject([28]);
myState.state = (['Debbie', 17, true]);
console.log(myState.state);
export {};
