
// 2) You are given  two numbers L and R, you have to find if XOR of all the numbers in range L to R (L,R both inclusive) is odd or even.
// Input:
// The first line will contain T, number of testcases.
// Each testcase contains a single line of input, two integers L,R.

// Output:
// For each testcase, in the new line print "Odd" if the XOR in the range is odd, else print "Even".
// Sample Input:
//   4
//   1 4
//   2 6
//   3 3
//   2 3

// Sample Output:
//   Even
//   Even
//   Odd
//   Odd

//First method

function isEvenOrOdd(L,R){
    let result;
  let oddcount = Math.floor((R-L)/2);
  if(R%2 !=0 || L%2 !=0 ){
      oddcount++
  }
  if(oddcount%2==0){
      result = 'Even'
  }else{
      result = 'Odd'
  }
  return result;
}

// second method  
const isEvenOrOdd = (L,R)=>{
    let result;
    for(let i=L;i<=R;i++){
        if(i%2==0){
            result =  'EVEN'
        }else{
            result =  "ODD"
        }
    }
    return result;
}


console.log(isEvenOrOdd(1,4));
console.log(isEvenOrOdd(2,6));
console.log(isEvenOrOdd(3,3));
console.log(isEvenOrOdd(2,3));
