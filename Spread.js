const colors=['red','black','blue']
const myFavColors=['Yellow','SkyBlue', ...colors]
console.log(myFavColors)
//Es7 feature 
//1:array include
const isPresent=colors.includes('red')
console.log(isPresent)
//2:**
console.log(2**3)
//Es8
//String.padding
//object.Values()
//Object.entries()

let myName="Aman".padStart(7)
console.log(myName)
let myAge="26".padEnd(7)
console.log(myAge)

let person={name:'Shreya Pandey',age:22}
console.log(Object.values(person))
console.log(Object.entries(person))

// Es 2018
const sPerson={...person}
console.log(person)
