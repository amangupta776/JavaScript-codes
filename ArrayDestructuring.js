const myBioData=['aman','gupta',22]
let myName=myBioData[0]
console.log(myName)
let [name,Lname,age]=myBioData
console.log(age)
//objecgt destructuring
 let bioData={
    name2:"Aman Gupta",
    age2:26
}

let {name2,age2}=bioData
 console.log(name2)
//we can use dynamic properties
let mname="Amanz"
const myB={
    [mname]:"hello how are you",
    [20+6]:"is my age"
}
console.log(myB)