// function add (first, second){ 
//     console.log(first, second)
//     second = second || 0 ;
//     // if(second === undefined){
//     //     second = 0;
//     // }
//  const total = first + second ; 
//  return total;
// }

// function add ( first, second = 0){
//     const total = first + second
//     return total;
// }
// const result = add(10);
// console.log(result);

// function fullName(first, last = 'chowdhury' ){
//     const name = first + ' ' + last ;
//     return name;
// }

// const neme = fullName('Aslam');
// console.log(neme)


function fullName(first, third = 'khan'){
    const mening = first + ' ' + third;
    return mening;
}

const name = fullName('mostofa');
console.log(name);