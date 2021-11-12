//  'Nikita' -> 'Hi, Nikita'
const hiFunction = (userName) => `Hi, ${userName}`;

console.log(hiFunction("Leyla"));

// 5, 6 -> 11
const sum = (a, b) => a + b

console.log(sum(6, 9));


//5 -> false
//0 -> true
//4 -> true

const isEven = (number) => {
    let n = number

    if (n % 2 == 0) {
        return true;

    } else return false

}
console.log(isEven(0));


// 2 -> i have 2 apples
const apples = (a) => `i have ${a} apples`

console.log(apples(2))


// 4 -> 16
const getPower = (a) => {
    let square = a ** 2;
    return square;
}

console.log(getPower(4))


module.exports = {
    hiFunction,
    sum,
    isEven,
    apples,
    getPower,
}
