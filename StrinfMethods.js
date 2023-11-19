let myBioData="i Am Aman Gupta"
//replace(searchfor,replacewith)
let replaceData=myBioData.replace("Am","am")
console.log(replaceData)

//Extract string charcter 1.charAt(),2.charCodeAt(),3.Property access[]
let str="HELLO WORLD"
console.log(str.charAt(0))
console.log(str.charCodeAt(0)) //return unicode 
console.log(str[0])
let lowC=str.toLowerCase()
console.log(lowC)
let Fname="A ma n"
let LName="Gupta"
console.log(Fname.concat(" ",LName))
var txt=Fname.split(" ")
console.log(txt)