// Index Signatures
/* interface TransactionObj {
    readonly [index: string]: number
} */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions["Pizza"]);
console.log(todaysTransactions.Pizza);
const prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction] ?? 0;
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Kofi",
    GPA: 3.67,
    classes: [100, 200]
};
// console.log(student.test)
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }
// Iterating through objects we haven't ptovided an index signature for
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// Another Example
Object.keys(student).map(key => console.log(student[key]));
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncome = {
    "salary": 500,
    "bonus": 100,
    "sidehustle": 250
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
export {};
