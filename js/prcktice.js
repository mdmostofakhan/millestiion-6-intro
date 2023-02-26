const thridMan = `I am a web developer
I love to code
I love to eat biryani
`
console.log(thridMan);

const multiplay = (x, y, z) => {
    const pixt1 = x + y;
    const pixt2 = y + z;
    const multiPlayResult = pixt1 * pixt2;
    return multiPlayResult;
}

const results = multiplay(5, 21, 3);
console.log(results);

const friends = ['rubel', 'mostofa', 'israfil', 'kawser']
const [name1, name2, name3] = friends;
console.log(name3);

function getSum(a, b =9){
    return a+b;
}
const result = getSum(2,7);
console.log(result);