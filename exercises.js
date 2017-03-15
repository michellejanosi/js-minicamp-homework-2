//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if (x > y) { // if x is greater than y
    return x; // return x
  } else if (y > x) { // otherwise if y is greater than x
    return y; // return y
  } else { // otherwise
    return x || y; // return x or y
  }
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  if (language === 'German') { // if language is equal to German
    return 'Guten Tag!';
  } else if (language === 'English') { // if language is equal to English
    return 'Hello!';
  } else if (language === 'Spanish') { // if language is equal to Spanish
    return 'Hola!';
  } else {
    return 'Hello!'; // otherwise, return this
  }
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  if (num === 10 || num === 5) { // if num is equal to 10 or equal to 5
    return true; // return true for the above statement
  } else {
    return false; // otherwise return false
  }
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  if (Math.floor(num) === num) { // Math.floor(num) == nu  will then determine if num is really in integer value and not a float
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  if (num % 15 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  if (num === 1 || num === 0) { // if num is equal to 1 or 0, return false
    return false;
  } else if (num === 2) { // if num is equal to 2, return true
    return true;
  } else {
    for (var i = 2; i < num; i++) { // otherwise, use a loop to check i with num and if is equal to 0, return false
      if (num % i === 0) {
        return false;
      } else { // otherwise, return true
        return true;
      }
    }
  }
}

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  //return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers
  //increase each integer by one
  //return the array
  var incremented = []; // new variable for incremented arr
  for (var i = 0; i < arr.length; i++) { // loop through array
    incremented.push(arr[i] + 1); // incremented each number of array by 1 and add it to incremented array
  }
  return incremented; // return array with each integer incremented by 1
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  var newArr = arr; // create new array and make equal to arr
  newArr.push(item); // add item to end of array with push method (push method returns new length of array)
  return newArr; // return array with new item on the end
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  var newArr = arr; // create new array and make equal to arr
  newArr.unshift(item); // add item to front of array
  return newArr; // return new array with item in front
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  var str = words.join(' ');
  return str;
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  if (arr.indexOf(item) > -1) { // use indexOf method to check if item is in arr
    return true;
  } else {
    return false;
  }
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  // use built-in reduce method to add the integers and return the value
  return numbers.reduce(function(a, b) { return a + b; });
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  //use built-in method reduce to add the testScores and then divide sum by the length of array to get average score
  var sum = testScores.reduce(function(a, b) { return a + b; });
  var avg = sum / testScores.length;
  return avg;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  //use built-in method Math.max to get the largest number from array
  return Math.max.apply(null, numbers);
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
