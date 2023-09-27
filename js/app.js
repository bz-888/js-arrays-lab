
// log something to make sure the file is being loaded
console.log("My app.js is being run!")

/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

//const defines a variable named "foods" that cannot be re-assigned into another datatype; it has been assigned as an empty array
const foods = [];

console.log('Exercise 1 Result:\n', foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

//the push method enters the strings "pizza" and "cheeseburger" to the end of the array named "foods"
foods.push("pizza","cheeseburger");

console.log('Exercise 2 Result:\n',  foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...

//the unshift method enters the string "taco" at the beginning of the array 
foods.unshift("taco");

console.log('Exercise 3 Result:\n', foods);

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

// Complete Exercise 4 below...

//we know that pizza is in the index position of 1, the let command defines a variable named favFoods and assigns it the data located in the 1 index position in the foods array, which is the string "pizza"
let favFood = foods[1];

console.log('Exercise 4 Result:\n', favFood);

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...

//the splice method goes to the front of the 2 index position, while deleting zero items in the array, enter the string "tofu"
foods.splice(2, 0, "tofu");

console.log('Exercise 5 Result:\n', foods);

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...

//the splice method here going to the front of the 1 index position in the array foods and deletes the following 1 item, which is the string "pizza"
//then, the splice method enters the strings "sushi" and "cupcake" - effectively replacing "pizza"
foods.splice(1, 1, "sushi", "cupcake");

console.log('Exercise 6 Result:\n', foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...

//defines the variable yummy as a copy of the array foods, from the beginning of index 1 in foods to the beginning of index 3 of foods, which includes index position 1 and 2 inclusive
const yummy = foods.slice(1, 3);

console.log('Exercise 7 Result:\n', yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...

//defines the variable soyIdx as the index number of "tofu" within the array of foods
const soyIdx = foods.indexOf("tofu");

console.log('Exercise 8 Result:\n', soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...

//defines the variable allFoods as a string which is the concatenation of the items found within the array foods, delimited by " -> "
const allFoods = foods.join(" -> ");

console.log('Exercise 9 Result:\n', allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...

//defines an empty variable named hasSoup
let hasSoup;

//loops through each index position of the array foods, starting from index 0 to the end of the array, look for a item in the array that has the value of "soup"
for (let i = 0; i < foods.length; i++) {
  if (foods[i] === "soup") {
    //if the value of the item being actively compared is indeed "soup", re-assign the value of the variable hasSoup from undefined to the boolean value of true
    hasSoup = true;
    //if the item is not "soup", re-assign the value of the the variable hasSoup from undefined to the boolean value of false
  } else {hasSoup = false;}
};

console.log('Exercise 10 Result:\n', hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...

//define an empty array named odds
const odds = []

//iterate through the nums array, calling each item in the array the variable/argument "n"
nums.forEach(function(n) {
  //if n divided by 2 doesn't have a remainder equal to 0, add n to the end of the array named odds
  if (n % 2 !== 0) {
    odds.push(n);
  };
});

console.log('Exercise 11 Result:\n', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to **one** of the following arrays: fizz, buzz or fizzbuzz - based upon the following:
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
*/

// Complete Exercise 12 below...

//defines the empty arrays: fizzbuzz, fizz, and buzz
const fizzbuzz = []
const fizz = []
const buzz = []

//iterate through each item in the array nums, calling each number n
nums.forEach(function(n) {
  //if n is divisible evenly by 3 AND 5, add n as a new value into the array fizzbuzz
  if (n % 3 === 0 && n % 5 === 0) {
    fizzbuzz.push(n);
    //if n is not divisble into both 3 AND 5 but is divisible evenly by 3, add n as a new value into the array fizz
  } else if (n % 3 === 0) {
    fizz.push(n);
    //if both the above are not true but n is evenly divisible by 5, add n as a new value into the array buzz
  } else if (n % 5 === 0) {
    buzz.push(n);
  }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

// Complete Exercise 13 below...

//define a variable named numList as an array, the variable is populated by the last index of the numArrays array as determine by the length of numArrays minus 1 given that index starts at 0
const numList = numArrays[numArrays.length - 1];

console.log('Exercise 13 Result:\n', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...

let num;

//iterate through each nested array located within the array named numArrays, calling each active array x
numArrays.forEach(function(x) {
  //given that each x is an array, see if x contains the value 66, if true, proceed to the follow instructions
  if (x.includes(66) === true) {
    //x includes 66, so iterate through each value (labeled as n), looking for 66
    x.forEach(function(n) {
      if (n === 66) {
        //an n of 66 is found, re-assign n as the value of n
        num = n;
      };
    });
  };
});

console.log('Exercise 14 Result:\n', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...

//define a variable named total, set the variable as an integer with a starting/placeholder value of 0
let total = 0

//iterate through the array numArrays, interating through each nested array, calling each nested array "nestedArray"
numArrays.forEach(function(nestedArray) {
  //for the nested array being selected, iterate through each individual value within the nested array, calling each value n
  nestedArray.forEach(function(n) {
    //set total as the sum of total plus n
    total += n;
  });
});

console.log('Exercise 15 Result:\n', total);
