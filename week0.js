//--=== Task 1: Repeating Numbers ===--
//You'll be given a two dimensional array (an array of arrays), each sub-array will only have two values. The first will be the value to repeat, the second will be the amount of times to repeat that value.
//Your function repeatNumbers should return a string with each of the given values repeated the appropriate number of times, each set of values separated by a comma. If there is only one set of values then you should omit the comma.

//--=== Expected Output ===-
//1111111111
//11, 222
//10101010, 343434343434, 9292
var repeatNumbers = function(data) {
  // Put your solution here
  var num = "";

  for (var i = 0; i < data.length; i++) {
    for (var n=0; n < data[i][1]; n++) {
      num += data[i][0];
    }

    if (i < data.length - 1) {
      num += ", "
    }
  }

  return num;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

//--=== Task 2: Conditional Sums ===-
//For this task, you'll be adding only the numbers in the array which match the given condition.
//You'll be given an array of numbers and a condition, such as odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.
//Do not use Array.prototype.filter()

//--=== Expected Output ===---
//6
//9
//144
//0

var conditionalSum = function(values, condition) {
  // Your code here
  let num = 0;

  if( condition === "odd") {
    rem = 1;
  } else {
    rem = 0;
  }

  for (i=0; i< values.length; i++) {
    if((values[i] % 2) === rem) {
      num += values[i];
    }
  }

  return num;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//--=== Task 3: Talking Calendar
//You'll be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. You'll be expected to parse the given string and produce a human readable date.

//--=== Expected Output ===--
//December 2nd, 2017
//November 11th, 2007
//August 24th, 1987

var talkingCalendar = function(date) {
  // Your code here
  var year = date.slice(0,4);
  var month = date.slice(5,7) -1;
  var day = parseInt(date.slice(8));

  var monthName = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November",
                    "December"];

  var suffix;

  switch(day) {
    case 1:
    case 21:
    case 31:
      suffix = 'st';
      break;
    case 2:
    case 22:
      suffix = 'nd';
      break;
    case 3:
    case 23:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }

  dateString = monthName[month] + " " + day + suffix + ", " + year;
  return dateString
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

//--=== Task 4: Change Calculator ===--
//You'll be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.
//Your function calculateChange should return an object which describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
//N.B. Although pennies are not used in circulation, still calculate the amount of pennies to give back.
//Valid denominations are as follows:
//Twenty dollars
//Ten dollars
//Five dollars
//Two dollars
//One dollar
//Quarter (25¢)
//Dime (10¢)
//Nickel (5¢)
//Penny (1¢)

//--=== Expected Output ===--
//{ twoDollar: 1, dime: 1, penny: 3 }
//{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
//{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

var calculateChange = function(total, cash) {
  // Your code here
  var returnValue = cash - total;
  var change = {};
  var coinTypes = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  var denominations = ["twenty", "ten", "five", "twoDollar", "dollar", "quarter", "dime", "nickel", "penny"];
  var amount;

  for (var i = 0; i < coinTypes.length; i++) {
    amount = Math.floor(returnValue/coinTypes[i]);
    if (amount > 0) {
        change[denominations[i]] = amount;
        returnValue = returnValue%coinTypes[i];
    }
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
