class Coder {
    name;
    music;
    age;
    lang;
    secondLang;
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Debbie = new Coder('Debbie', 'Classic', 17);
console.log(Debbie.getAge());
// console.log(Debbie.age)
// console.log(Debbie.lang)
class WebDev extends Coder {
    computer;
    constructor(name, music, age, computer) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Danny = new WebDev('Danny', 'Pop', 28, "Linux");
console.log(Danny.getLang());
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Eddy", "guitar");
console.log(Page.play("strums"));
//  Static members
class Peeps {
    name;
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name,
            this.id = ++Peeps.count;
    }
}
const Love = new Peeps('Love');
const Gabriel = new Peeps('Gabriel');
const Divine = new Peeps("Divine");
console.log(Peeps.count);
console.log(Gabriel.id);
console.log(Love.id);
console.log(Divine.id);
// keeping State in instantiated Classes
class Bands {
    dataState;
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            this.dataState = value;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ top"];
console.log(MyBands.data);
MyBands.data = ["Van Helen", 5150];
export {};
