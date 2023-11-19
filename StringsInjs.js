let name1="Aman Gupta"
console.log(name1.length)

//escape charcter

let anySentence="I am \"tony\" stark"
console.log(anySentence)

console.log(name1.indexOf("a",2))
console.log(name1.search("G"))
//Extract :slice(start,end) , subString(start,end) ,substr(start,length)

var str="Apple, Banana, Kiwi"
let res=str.slice(0,5)
console.log(res)
//substtring cannot take neg index
let res2=str.substring(0,5)
console.log(res2)
let res3=str.substring(7,-1)
console.log(res3)
