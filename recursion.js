/*** repeater ***/
// console.log('Hello, world!');

function repeater(char) {
    //base case/condition that when met returns a value
    //when string is 5 char log return the string
    if(char.length === 5) return char;
    //IF COND IS NOT MET, then run the recursive func until cond is met
    //recursive case where func is repeated but with new output eac time
    return repeater(char + char[0]);
}

// uncomment to run
// console.log(repeater('g'));//'ggggg'
// console.log(repeater('j'));//'jjjjj'

/*** factorial ***/
function factorial(num) {
    if(num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }

}

// uncomment to run
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720

/*** get Length ***/
function getLength(array, length = 0) {
    if(array[0] === undefined) return length;
    return getLength(array.slice(1), ++length)
}

// uncomment tu run
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5
// console.log(getLength([])); // -> 0

/*** POW ***/
function pow(base, exponent) {
    if (exponent === 0) return 1; //base case for exiting, because raising a number to the power zero is one, which is the multiplicative identity, 1.
    return base * pow(base, exponent -1); // minimizing, smaller chunks.
    // recurse base * current exponent - see below line 9 for example
}
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

// alternative static method console.log(Math.pow(7, 3));

// bubble up: pow(2, 4); PUSHED ONTO CALLSTACK, SITTING ON THE CALLSTACK TO BE COMPLETED
// power(2, 3) =>  EXPONENT MET THE BASE CASE?			return 2 * power(2, 2)
// power(2, 2) =>  EXPONENT MET THE BASE CASE?			return 2 * power(2, 1)
// power(2, 1) =>  EXPONENT MET THE BASE CASE?			return 2 * power(2, 0)
// power(2, 0) =>  EXPONENT MET THE BASE CASE?			1 (met cond. returns 1) - BUBBLES UP

// Now that we know power(2, 0) = 1, we can go all the way back

// power(2, 1) => return 2 * 1
// power(2, 2) => return 2 * 2
// power(2, 3) => return 2 * 4
// *//8

/*** flow ***/
function flow(input, funcArray) {
    if (funcArray.length === 0) return input
    const output = funcArray[0](input)
    return flow(output, funcArray.slice(1))
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7 //uncomment to run

/*** shuffle cards ***/
function shuffleCards(topHalf, bottomHalf, results = []) {
    //base case
    if (topHalf.length===0 && bottomHalf.length === 0) return results
    if (topHalf.length !== 0) {
        results.push(topHalf[0])
    }
    if (bottomHalf.length !== 0) {
        results.push(bottomHalf[0])
    }
    //recursive case
    return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), results)
}

// uncomment to run
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
// console.log(shuffleCards(topHalf, bottomHalf));
/*-> ['Queen of Diamonds',
      'Jack of Hearts',
      'Five of Hearts',
      'Ten of Spades',
      'Ace of Spades',
      'Eight of Clubs',
    ]
*/

/*** cascade ***/
function cascade(num) {
    //check if the num value is a number
    if (typeof num !== 'number') return num
    //print return num
    console.log(num)
    //check if num is lesser than num
    if (num < 10) return num
    cascade(Math.floor(num / 10))
    console.log(num)
}
// Uncomment to test your work!
cascade(111)
// should print
/*
111
11
1
11
111
*/


