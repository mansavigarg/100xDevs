// given a array, give me new aray in which ever vale is multiply by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

const input = [1,2,3,4,5];

const newArray = [];

for(let i=0; i< input.length;i++){
    newArray.push(input[i]*2);
}

console.log(newArray);

// Map fxn
// 1) given arr 
// 2) f                                       ----> function (a){return a*2}

// Map(arr,f)                                  -----> gives the final ans


function transform(i){
    return i * 2;
}

const ans = input.map(transform);                 //  map is a function on an array class
console.log(ans);

// Assignment---->>> create a map function that takes 2 inputs : an array and a transformation callback/fn and transforms the array into a new one usinf the transformation function

const map = (arr, fn) => {
    const transformedArr = [];
    for(let i = 0; i< arr.length;i++){
        transformedArr.push(fn(arr[i]));
    }
    return transformedArr;
}

// filter fxn
// given an input Array, give me back all the even values from it 

const arr = [1,2,3,4,5,6,7,8,9];

function filterLogic(n){
    if(n % 2 == 0){
        return true;
    }
    else return false;
}


const ans2 = arr.filter(filterLogic);
console.log("Filter wala arr is " + ans2);
