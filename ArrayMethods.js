// const animals=["pig","goat","sheep"]
// const count=animals.push("chicken","cat")
// console.log(animals)
// console.log(count)
// const count2=animals.unshift("dog")
// console.log(animals)
// console.log(count2)
// animals.pop()
// console.log(animals)
// const nums=[2,88,39,76]
// nums.sort()
// console.log(nums)
// const n=nums.shift()
// console.log(nums)
// console.log(n)

const month=["Jan","march","April","June","July"]

const newMonth=month.splice(5,0,"Dec")
console.log(month)
console.log(newMonth)
const indexOfMonth=month.indexOf("march")
console.log(indexOfMonth)
const updateMonth=month.splice(1,1,"March")
console.log(month)
console.log(updateMonth)

