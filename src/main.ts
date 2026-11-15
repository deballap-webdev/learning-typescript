// Utility Types

// Partial

interface Assignment {
    studentId: string,
    grade: number,
    verified?: boolean,
    title: string
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentId: "eleng139",
    title: "Final Project",
    grade: 0
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

console.log(recordAssignment({ ...assignGraded, verified: true }))

// Record

type Student = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "E" | "U"

const finalGrades: Record<Student, LetterGrades> = {
    "Kelly": "B",
    "Sara": "U"
}

interface Grades {
    assign1: number,
    assign2: Number
}

const gradeData: Record<Student, Grades> = {
    "Kelly": {
        assign1: 89,
        assign2: 72
    },
    "Sara": {
        assign1: 63,
        assign2: 21
    }
}

const hexCode: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">
const score: AssignResult = {
    studentId: "eng248",
    grade: 89
}

type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId: "eng248",
    title: "Final Year Project",
}

// Excludue and Extract 

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<adjustedGrade, "A" | "B">

// Nonnullable

type AllPossibleGrades = "Daniel" | "Jimmy" | null | undefined

type NameOnly = NonNullable<AllPossibleGrades>

// ReturnType

/* type newAssign = {
    title: string,
    points: number
} */

const createNewAssign = (title: string, points: number) => {
    return { title, points }
}
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility tpes", 100)
console.log(tsAssign)

// Parameter

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generic", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)

// Awaited - helps with the return type of a promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })

    return data
}


type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
