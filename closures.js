/*** create function ***/
function createFunction () { //Create a function
    function sayHelloWorld() { //creates and 'returns out' a function
        return 'hello world'; //return the string 'hello world'.
    }
    return sayHelloWorld; //return new function
}
// Uncomment to run
const myFunction = createFunction(); //invoke inner func
//closures allow functions to "remember" data from previous calls.

// console.log(myFunction()); //should log: 'hello world'. To log new var


/*** create function with input ***/
function createFunctionWithInput(input) {
    function functionWithInput() {
        return input
    }
    return functionWithInput;
}
// uncomment to run
const sampleFunc = createFunctionWithInput('sample');
// console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
// console.log(helloFunc()); // should log: 'hello'

/*** Scoping ***/
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment to run

// willCounter();
// willCounter();
// willCounter();
//
// jasCounter();
// willCounter();

/*** add By X ***/
function addByX(x) { //x is arg 2
    function addFunction(n) { //n is param passed in. access to both...
        return n + x; //very literal description from reading
    }
    return addFunction;
}
const addByTwo = addByX(2);

// uncomment to run
// console.log(addByTwo(58885));
// console.log(addByTwo(1))
// console.log(addByTwo(5))


/*** once ***/
function once(callback) {
    //check if callback func called before = boolean vaalue
    let hasBeenCalled = false;
    //declare var for result
    let storedResult; // ONLY declare, not initialize to a value
    //return "stored" output value from the first time it was called.

    function doneFunc(...args){//any args
        if(hasBeenCalled === false) {
            storedResult = callback(...args);
            hasBeenCalled = true;
        }
        return storedResult;
    }
    return doneFunc
}
const addByTwoOnce = once(function(num) {
    return num + 2;
});

// uncomment to run
// console.log(addByTwoOnce(5));  //should log 7
// console.log(addByTwoOnce(10));  //should log 7
// console.log(addByTwoOnce(9001));  //should log 7

/*** once ***/
function after(numOfCalls, callback) { //num var numofcalls
    let count = 0 //count how many x after()'s run. var in outer scope.
    return function(...args) { //CLOSURE
        count += 1; //
        if(count >= numOfCalls) {//checking if num of calls is less than 3
            return callback(...args) //return callback invoked with arfs
        }
    }
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// uncomment to run
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> 'hello world' is printed
// console.log(afterCalled('world')); // -> 'hello world' is printed

/*** delay ***/
function delay(callback, waitTime) {
    function waitFunction() {
        return setTimeout(callback, waitTime); //
    }
    return waitFunction
}
// uncomment to run
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
// console.log(count); 												 // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

/*** delay ***/
//"keep track" of all the parameters that our function receives and the output values that our function returns.
// declare an empty object "persistent".
// In our closure function check if the magic password has been "given" ie passed in.
// If it is not, record the parameter, and it's value and return that value.
// If the magic password has been given, return our whole "log" function which contains all the parameters and the returned values prreviously stored.

function saveOutput(func, password) {
    const cache = {} //object for storing all previously passed-in arguments as keys, and the corresponding outputs as values
    return function (arg) {
        if(arg === password) { //if argument passed is the password
            return cache;  //return object args as keys and ouput as values
        } else { //if not then invoke func with thar arg, store it within our cache object, return it
            //create new obj entry by typing object index arg = unc(arg)
            //keys are passed in args
            //value = result of invoking the func with argument

            return cache[arg] = func(arg);
        }
    }
}
// Uncomment to run
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // should log: 4
// console.log(multBy2AndLog(9)); // should log: 18
// console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

/*** cycleIterator ***/
//Create a function that accepts an array, and returns a function
//function will accept zero arguments
// first invoked, the returned function will return the first element of the array.
//When invoked a second time, the returned function will return the second element of the array, and so forth
//After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
function cycleIterator (array) {
    let index = 0 //declare/start index variable at 0 - CLOSURE
    return function() { //ReturnFunction w/0 args
        //update iterator/index value by incrementing by 1
        const result = array[index++];//store arr value = increment
        if(index >= array.length) index = 0//restart/chck index=< arr.lgth
        return result
    }
}

// Uncomment to run
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];//ArgumentForHigherFunc
const getDay = cycleIterator(threeDayWeekend);//ReturnFunctionReLabel
// console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun'
// console.log(getDay()); // should log: 'Fri'

/*** define First Arg ***/
// ADD CODE HERE
///Create a function defineFirstArg that accepts a function and an argument.
//The function being passed in will accept at least one argument.
//defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument.
//Additional arguments needed by the passed-in function will need to be passed into the returned function.
function defineFirstArg(func, num) {
    return function(...args) {
        return func(num, ...args)
    }
}

// Uncomment to run
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // should log: 15

/*** hobbyTracker ***/
function hobbyTracker(hobbiesArr) {
    //daclare cache obj w/ ea/el in arr= ky
    const cache = {};//value at zero to begin with, and increased by number passed in to inner function.
    for(let i = 0; i < hobbiesArr.length; i++) { //loop thru hobbies arr
        cache[hobbiesArr[i]] = 0;//set cache kys to hbby and vals to 0s
    } //[] meaning???
    return (hobby,hoursPracticed) => {//return funct w/str hbby + num/hr
        if(hobby === undefined) { //if nothing is passed in://passed in       with no arguments
            for(let hobby in cache) { //hobby key is value of 0
                cache[hobby] = 0; //hobby key is value of 0
            }
            return 'tracker has been reset!'; // the print this msg.
        } //implied else (hobby and hours are passed in): //2 args passed
        cache[hobby]+=hoursPracticed;
        // console.log('cache updated');
        return cache;
    }
}
// uncomment to run
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

/*** date stamp ***/
/// ADD CODE HERE
function dateStamp(func){
    let currentDay = function(...args){
        let object = {};
        let today = new Date();
        let todayDate = ("0" + today.getDate()).slice(-2);
        let day = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
        let month = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let currentDate = day[today.getDay()] +" "+ month[today.getMonth()]+" "+ todayDate+" "+today.getFullYear();
        object["date"] = currentDate;
        object["output"] = func(...args);
        return object;
    }
    return currentDay;
}
// Uncomment to run
const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }