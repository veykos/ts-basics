let userName:string = "Jack"
let hasLoggedIn:boolean = true;

userName += "Pavel"
console.log(userName)

let myRegex:RegExp = /foo/

const names: string[] = userName.split(" ")
const values: number[] = [1,2,3,] // if u put "A" it will error out


interface Person {
    first:string;
    last:string
}
const myPerson: Person = {
    first: "pavel",
    last: "popov",
}

const ids: Record<number,string> = {
    10: "a",
    20: "b"
}
ids[30] = "c"

if (ids[30] === "D") {}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
// here TS just infers that i is number and no real need
// to specify

[1,2,3].forEach(v => console.log(v))
//here again TS infers v:number
const out = [4,5,6].map(v => `${v*10}`)
//again TS infers that out will be array
// of strings