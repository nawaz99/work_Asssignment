// 3) You are given with T number of strings. You need to sort the strings according to their first character.
// Input :
// 4
// “AXXX”
// “UVVVV”
// “PGGGG”
// “BOOUU”

// Output :
// “AXXX”
// “BOOUU”
// “PGGGG”
// “UVVVV”


// Quick sort method
function sortStrings(...args){
let pivot = args[0];
let left = [];
let right = [];
if(args.length < 1)return args;
for(let i=1;i<args.length;i++){
    if(pivot>args[i]){
       left.push(args[i])
    }else{
        right.push(args[i])
    }
}
return sortStrings(...left).concat(pivot,sortStrings(...right))
}

console.log(sortStrings("AXXX","UVVVV","PGGGG","BOOUU"));

// using inbuit sort method

function sortStrings(...args){
    return args.sort();
}
console.log(sortStrings("AXXX","UVVVV","PGGGG","BOOUU"));



