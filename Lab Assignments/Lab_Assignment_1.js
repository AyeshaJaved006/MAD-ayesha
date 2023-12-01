const { Console } = require('console');
const { format } = require('path');
const { stdin } = require('process');

/**
 * Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3
 */
function kthDigit(num, k) {
    let numStr = num.toString();
    let numArr = numStr.split("");
    let kthDigit = numArr[numArr.length - k];
    return kthDigit;
}
console.log(kthDigit(23617, 4));
/**
 * Problem 2
 */
function sumOfDigits(...args) {
    // we can take arguments as a whole number like num instead of args and then convert it to string and then split it
    let sumStr = args.toString();
    let sumArr = sumStr.split("");
    let sumOfDigits = sumArr.reduce((a, b) => parseInt(a) + parseInt(b));
    return sumOfDigits;
}
console.log(sumOfDigits(123456789));

/**
 * Problem 3
 * 
 */
function evenSum(num) {
    // we can take arguments as a whole number like num instead of args and then convert it to string and then split it
    arr = [];
    let sumStr = num.toString();
    let sumArr = sumStr.split("");
    for (let i = 0; i <= sumArr.length; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    let sumOfDigits = arr.reduce((a, b) => parseInt(a) + parseInt(b));
    return sumOfDigits;

}
console.log(evenSum(23617));
/**
 * Problem 4
 */
function squaresAndCubes() {
    let result = [];
    for (let i = 0; i <= 10; i++) {
        result.push({
            number: i,
            square: i * i,
            cube: i * i * i
        });
    }
    return result;
}
console.log(squaresAndCubes());
/**
 * Problem 5
 */
function StrOrNum(StrONum) {
    if (isNaN(StrONum)) {
        // lets find The position in the string of the left-most vowel in the string
        let vals = ""
        vals = StrONum;
        vals = vals.toLocaleLowerCase(); //Every string to lower case
        let position;
        for (let i = 0; i < vals.length; i++) {
            if (vals[i] === 'a' || vals[i] === 'e' || vals[i] === 'i' || vals[i] === 'o' || vals[i] == 'u') {
                position = `Postion of most left${i}`;
                break;
            }
        }
        return position;
    }
    else {
        let reversedNum = parseFloat(StrONum.toString().split('').reverse().join('')) * Math.sign(StrONum)
        return reversedNum;
    }
}
console.log(StrOrNum("dfdfdfoi"));
/**
 * Problem 6
 */
/**
 * fo taking input from user we need to import  or require readline module
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
guess = () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    readline.question(`What's your guess`, (number) => {
        console.log(`You guessed ${number}`);

        if (number == randomNum) {
            console.log("You guessed it right!");
        }
        else {
            console.log("You guessed it wrong!");
        }
    });
}
guess();

/**
 * Problem 7
 * 
 */
let check = (arr) => {
    if (arr.length >= 2) {
        if (arr[0] == 10 || arr[arr.length - 1] == 10) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(check([10, 20, 30, 40]));
/**
 * Problem 8
 * 
 * 
 */
let sortString = (str) => {
    let sortedStr = str.split("").sort().join("");
    return sortedStr;
}
console.log(sortString("wbcda"));