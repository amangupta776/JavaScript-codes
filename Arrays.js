var Name=["Aman","Aksash","Lalita",12,false]
console.log(Name)
// for(let i=0;i<Name.length;i++){
//     console.log(Name[i])
// }
// var Name=new Array; //optional
// for(let elements in Name){
//     console.log(Name[elements])
// }
//for in index deta hai

// for(let elements of Name){
//     console.log(elements)
// }
// for of element deta hai

// Name.forEach(function(element,index,array) {
//    console.log(index+" "+element) 
// })

Name.forEach((element,index,array)=>{
    console.log(index+" "+element) 
})

