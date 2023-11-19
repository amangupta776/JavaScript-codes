var Year=2004

if(Year%4==0){
if(Year%100==0){
if(Year%400==0){
    console.log(Year+" is a Leap year")
}else{
    console.log(Year+" is Not a Leap year")
}

}else{
    console.log(Year+" is a Leap year")
}

}else{
    console.log(Year+" is Not a Leap year")
}