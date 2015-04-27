
(function(){
	"use strict";
/*
 * PROBLEM 1: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var inputString = "yo3";
function checkData(inputString){
	if(typeof inputString!=="string"||inputString===""){
		throw 'Invalid Input';
	}
	else if(inputString.length>3 || inputString.length<3 ){
		throw false;
	}
	else {	
		return true;
	}
}
checkData(inputString);
console.log(checkData(inputString));

/*
 * PROBLEM 2: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var a = ["a","b","c","d"];
var b = ["e", "f", "g","h"];
function concatenateArrays(a, b) {
	if( a.toString()===""||b.toString()===""||!Array.isArray(a)||!Array.isArray(b)){
		throw "Invalid Input";
	}
	else{
		var finalArray=a.concat(b);
		return finalArray;
	}
}
concatenateArrays(a, b);
console.log(concatenateArrays(a, b));

/*
 * PROBLEM 3: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var noun = "joe";
function fixProperNoun(noun) {
	if (noun===""||!isNaN(noun)||typeof noun!=="string"){
		throw "Invalid Input";
	}
	else{
		var Noun = noun.toLowerCase();
		var firstLetter=(Noun.charAt(0));
		var upperCase = firstLetter.toUpperCase();
		var tailNoun = Noun.toLowerCase().substr(1);
		var proNoun = upperCase + tailNoun;
		return proNoun;
	}
}
fixProperNoun(noun);
console.log(fixProperNoun(noun));

/*
 * PROBLEM 4: (easy)
 * Write a function called `sortLetters` that 
 * returns a string that sorts all the letters 
 * from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input'
 * exception.
 */
inputString = "Charles Lueker";
function sortLetters(inputString) {
	if(inputString===''||!isNaN(inputString)||typeof inputString!=="string"){
			throw "Invalid Input";
		}
		else{
			var orderedString =(inputString.split('').sort().join(''));
			return orderedString;
		}
}
sortLetters(inputString);
console.log(sortLetters(inputString));

/*
 * PROBLEM 5: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var integer= -25;
function absVal(integer) {
	if (integer===""||isNaN(integer)||typeof integer!=="number"){
		throw "Invalid Input";
	}else{
		integer = integer*integer;
		integer = Math.sqrt(integer);
		return integer;
	}
}
absVal(integer);
console.log(absVal(integer));
/*
 * PROBLEM 6: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 a = 57;
 b = 17;
 function myMin(a, b) {
	if( a===""||b===""||isNaN(a)||isNaN(b)||typeof a!=="number"||typeof b!=="number"){
		throw "Invalid Input";
	}
	else if(parseInt(a)>parseInt(b))
	{
		return b;
	}
	else
	{
		return a;
	}
}
myMin(a, b);
console.log(myMin(a, b));

/*
 * PROBLEM 7: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 var number=9;
 function getMonth(number){
 	if(number===""||typeof number!=="number"){
		throw "Invalid Input";
	}
	else
	{
	  	switch(number){
	  		case 1: 
	  			return "January";
	  			// break;
	  		case 2: 
	  			return "February";
	  			// break;
	  		case 3: 
	  			return "March";
	  			// break;
	  		case 4: 
	  			return "April";
	  			// break;
	  		case 5: 
	  			return "May";
	  			// break;
	  		case 6: 
	  			return "June";
	  			// break;
	  		case 7: 
	  			return "July";
	  			// break;
	  		case 8: 
	  			return "August";
	  			// break;
	  		case 9:
	  			return "September";
	  			// break;
	  		case 10: 
	  			return "October";
	  			// break;
	  		case 11: 
	  			return "November";
	  			// break;
	  		case 12:
	  			return "December";
	  			// break;
	  		default: 
	  			throw "Invalid Input";
  		}
  	}
}
getMonth(number);
console.log(getMonth(number));

/*
 * PROBLEM 8: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
b=toString(b);
a=toString(a);
 var N = 7;
 function sumSquares(N){
 	if( N===""||isNaN(N)||N<=0||typeof N!=="number"){
		throw "Invalid Input";
	}
	else {
		var array=[];
 		var myTotal = 0;
		for(var i=1; i<=N;i++){
			var square = i*i;
			array.push(square);
		}
		var total=0;
		for(i in array){ 
			total += array[i]; 
		}
		return total;
	}
}
sumSquares(N);
console.log(sumSquares(N));

/* 
 * PROBLEM 9: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
// var array = [3, 6, 78, 20, 11];
// var array = 89, 56, 79;
var arrayNew = [8, 1, 9];
function findMaxDiff(arrayNew) {
	var Jimmy=[];
	var Ymmij=[];
	if (!Array.isArray(arrayNew)||arrayNew.toString()===""){
		throw "Invalid Input";
	}
	else
	{	
		for(var i=0; i<arrayNew.length;i++){
			if(typeof arrayNew[i]!=="number"){
				throw "Invalid Input";
			}
			else
			{		
				for(i=1; i<arrayNew.length;i++){		
					Jimmy.push(arrayNew[i]-arrayNew[i-1]);
					Ymmij.push(arrayNew[i-1]-arrayNew[i]);		
					var Bill=arrayNew.length-1;
					if(Jimmy.length==Bill&&Ymmij.length==Bill){
						Jimmy=Math.max.apply(null,Jimmy);
						Ymmij=Math.max.apply(null,Ymmij);
						if (Jimmy>Ymmij){
							return Jimmy;
						}else{
							return Ymmij;
						}
					}
				}
			}
		}
	}		
}
findMaxDiff(arrayNew);
console.log(findMaxDiff(arrayNew));

/*
 * PROBLEM 10: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var string = "My name is Charles";
function insertDashes(string){
	if (string===""||typeof string!=="string"){
		throw "Invalid Input";
	}else{
		string=string.split('').join('-');
		var re = /- -/g;
		string=string.replace(re,' ');
		return string;
	}
}
insertDashes(string);
console.log(insertDashes(string));


/* 
 * PROBLEM 11: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
string = "Hello. How are you?  I am fine.";
a = 3;
b = 13;
function mySubstring(string, a, b){
	if(string===""||typeof string!=="string"||a===""||b===""||isNaN(a)||isNaN(b)||
	a<0||b>string.length||typeof a!=="number"||typeof b!=="number"){
		throw "Invalid Input";
	}
	else 
	{
		b=b+1;
		string=string.slice(a, b);
		return string;
	}
}
mySubstring(string, a, b);
console.log(mySubstring(string, a, b));

/*
 * PROBLEM 12: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var swapArray=[1, 2, 3, 4, 5];
function splitSwap(swapArray){
	if(swapArray===""||!Array.isArray(swapArray)){
		throw "Invalid Input";
	}
	else {
			var rightArray = swapArray.splice(0,Math.floor(swapArray.length/2));
			var lastArray=swapArray.concat(rightArray);
			console.log(lastArray);
			return lastArray;
		}
}
splitSwap(swapArray);

/*
 * PROBLEM 13: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 var n = 13;
 var k = 2;
 function smallMultiples(n, k){
 	var array=[];
 	if(n===""||k===""||k>=n||isNaN(n)||isNaN(k)||typeof n!=="number"||typeof k!=="number"){
 		throw "Invalid Input";
 	}else{
 		for (var i=2; i<=n;i++){
			if(i*k<=n){
				array.push(i);
			}
 		}
 		return array.length;
 	}
}
smallMultiples(n,k);
console.log(smallMultiples(n,k));
}());
 
