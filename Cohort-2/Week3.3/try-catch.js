function getLength(name){
    return name.lenght;
}

try{
   const ans = getLength();
    console.log(ans); 
    console.log("hi there from inside")
}catch(err){
    console.log("there is error")
    console.log(err)
}


console.log("hi there");