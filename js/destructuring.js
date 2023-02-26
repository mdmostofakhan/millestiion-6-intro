const fish = {
    name: 'king fish',
    address: 'chandpur',
    color: 'silver',
    phone: '01948494594',
    prich: 3433
}

const phone = fish.phone;

console.log(phone)
console.log(phone)

const {age, name} = {name: 'mostofa', age: 45, profession: 'developer'};
console.log(name);

const {address} = fish;
console.log(address);

const [first, anather] = [23, 34, 34, 34,33]
console.log(first, anather);

const nayoks = [ 'shkaib', 'bubli', 'tania'];
const [ king, normal,  notun] = nayoks;
console.log(notun);

const manu = ['pizza', 'barger', 'chikhen'];
const [one, tow, three] = manu;
console.log(one, tow, three);
