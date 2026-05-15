// Promisis

// Approch 1 -->> Wrapping another async fn

function myOwnSetTimeOut(callback,duration){
    setTimeout(callback, duration);
}

myOwnSetTimeOut(function(){
    console.log("hi there");
}, 1000);


// Approch 2 -->>>>> Using Promise

 function promisifiedMyOwnSetTimeOut2(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve, 3000);
    });
    return p;
 }

 promisifiedMyOwnSetTimeOut2(1000).then(function(){      // when the async fn will return the promis then(.then) will this function be called at all 
    console.log("log the first thing");
 })