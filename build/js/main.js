// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: "eleng139",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = { ...assignGraded, verified: true };
console.log(recordAssignment({ ...assignGraded, verified: true }));
const finalGrades = {
    "Kelly": "B",
    "Sara": "U"
};
const gradeData = {
    "Kelly": {
        assign1: 89,
        assign2: 72
    },
    "Sara": {
        assign1: 63,
        assign2: 21
    }
};
const hexCode = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const score = {
    studentId: "eng248",
    grade: 89
};
const preview = {
    studentId: "eng248",
    title: "Final Year Project",
};
// ReturnType
/* type newAssign = {
    title: string,
    points: number
} */
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility tpes", 100);
console.log(tsAssign);
const assignArgs = ["Generic", 100];
const tsAssign2 = createNewAssign(...assignArgs);
const fetchUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then(users => console.log(users));
export {};
