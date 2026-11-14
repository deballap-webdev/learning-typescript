// Index Signatures

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}


/* interface TransactionObj {
    readonly [index: string]: number
} */

const todaysTransactions: TransactionObj = {

    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions["Pizza"])
console.log(todaysTransactions.Pizza)

const prop: string = "Pizza"

console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0

    for (const transaction in transactions) {
        total += transactions[transaction] ?? 0
    }

    return total
}

console.log(todaysNet(todaysTransactions))

// todaysTransactions.Pizza = 60 (error index signature only permits reading)

// More Examples
interface Student {
    //[index: string]: string | number | number[]
    name: string,
    GPA: number,
    classes?: number[],
}

const student: Student = {
    name: "Kofi",
    GPA: 3.67,
    classes: [100, 200]
}

// console.log(student.test)

// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }


// Iterating through objects we haven't ptovided an index signature for
for (const key in student) {
    console.log(`${key}: ${student[key as keyof typeof student]}`)
}


// Another Example

Object.keys(student).map(key => console.log(student[key as keyof typeof student]))
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key} : ${student[key]}`)
}

logStudentKey(student, "name")

// 

// interface Income {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Income = Record<Streams, number>

const monthlyIncome: Income = {
    "salary": 500,
    "bonus": 100,
    "sidehustle": 250
}

for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue as keyof Income])
}