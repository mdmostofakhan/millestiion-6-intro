// function add(first, second){
//  const total = first + second;
//  return total;
// } 

// function add2(first, second){
//     return first + second;
    
//    }

// const add5 =  (first, second) => first + second


// const result = add2 ( 34, 5);
// console.log(result);

const add = (first , second) => first + second;
const getFullName = (first, last) => first + last;
const multipaly = (a, b) => a * b;

const result = multipaly (3, 6);
// console.log(result);

const addAll = (a, b, c, d, e, f ) => a + b + c + e + f;

// no parameter arrow function
const getpie = () => 3.13;

// one parameters 
const doubleIt = (num) => num * 2;

// one parameter
const fiveTimes = num => num * 5;

const results = doubleIt( 3 );
console.log(results);


// multi line arrow function
// if you want to return something, use the retrurn
const doMath = (x, y, z) => j{
    const firstSum = x + y ;
    const secondSum = y + z ;
    const multiPlayResult = secondSum * firstSum;
    const result = multiPlayResult / 2;
    return result;
}

const memmin = doMath(6, 3, 3)
console.log(memmin);