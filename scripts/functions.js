
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
var inputString = "you";
function checkData(inputString){
	
	if(inputString===""){
		console.log("Invalid Input");
	}
	else if(inputString.length>3 || inputString.length<3 ){
		console.log("false");
	}
	else {	
		console.log("function 1 = true");
	}
}
checkData(inputString);

/*
 * PROBLEM 2: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */


var a = ["a", "b", "c"];
var b = ["e", "f", "g"];
function concatenateArrays(a, b) {
	if( a.toString()===""||b.toString()===""){
		console.log("Invalid Input");
	}
	else{
		var finalArray=a.concat(b);
		// console.log(finalArray);
		console.log("function 2 = ["+finalArray + "]  Where b is an "+typeof b);
	}
}
concatenateArrays(a, b);


/*
 * PROBLEM 3: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var noun = "charles";
function fixProperNoun(noun) {

	if (noun===""||!isNaN(noun)){
		console.log("Invalid Input");
	}
	else{
		var Noun = noun.toLowerCase();
		var firstLetter=(Noun.charAt(0));
		var upperCase = firstLetter.toUpperCase();
		var tailNoun = Noun.toLowerCase().substr(1);
		var proNoun = upperCase + tailNoun;
		console.log("function 3 = "+proNoun);
	}
}
fixProperNoun(noun);

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
	if(inputString===''||!isNaN(inputString)){
			console.log("Invalid Input");
		}
		else{
			var orderedString =(inputString.split('').sort().join(''));
			console.log("function 4 = "+orderedString);
		}
}
sortLetters(inputString);


/*
 * PROBLEM 5: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var integer = -22;
function absVal(integer) {
	if (integer===""||isNaN(integer)){
		console.log("Invalid Input");
	}else{
		integer = integer*integer;
		integer = Math.sqrt(integer);
		console.log("function 5 = "+integer);
	}
}
absVal(integer);
/*
 * PROBLEM 6: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 a = 23;
 b = 45;
 function myMin(a, b) {
	if( a===""||b===""||isNaN(a)||isNaN(b)){
		console.log("Invalid Input");
	}else if(parseInt(a)>parseInt(b)){
		console.log("function 6 = "+b);
	}else{
		console.log("function 6 = "+a);
	}
}
myMin(a, b);


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
 var number = "9";
 function getMonth(number){
  	switch(number){
  		case "1": 
  			console.log("function 7 = January");
  			break;
  		case "2": 
  			console.log("function 7 = February");
  			break;
  		case "3": 
  			console.log("function 7 = March");
  			break;
  		case "4": 
  			console.log("function 7 = April");
  			break;
  		case "5": 
  			console.log("function 7 = May");
  			break;
  		case "6": 
  			console.log("function 7 = June");
  			break;
  		case "7": 
  			console.log("function 7 = July");
  			break;
  		case "8": 
  			console.log("function 7 = August");
  			break;
  		case "9":
  			console.log("function 7 = September");
  			break;
  		case "10": 
  			console.log("function 7 = October");
  			break;
  		case "11": 
  			console.log("function 7 = November");
  			break;
  		case "12":
  			console.log("function 7 = December");
  			break;
  		default: 
  			console.log("function 7 = Invalid Input");
  	}
}
getMonth(number);

/*
 * PROBLEM 8: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 var N = 7;
 function sumSquares(N){
 	var array=[];
 	var myTotal = 0;
 	if( N===""||isNaN(N)||N<=0){
		conosle.log("Invalid Input");
	}else if(N>99){
		conosle.log("Slow down John Wayne, lets choose a number smaller than 100."+"<br>"+"I don't like to multiply THAT much!");
	}
	else {
		document.getElementById("error8").innerHTML="";
		for(var i=1; i<=N;i++){
			var square = i*i;
			array.push(square);
		}
		var total=0;
		for(i in array){ 
			total += array[i]; 
		}
		console.log("function 8 = "+total);
	}
}
sumSquares(N);

/* 
 * PROBLEM 9: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
var array = [2, 5, 3,7 ,12, 30, 1, 42];
function findMaxDiff(array) {
	var Jimmy=[];
	var Ymmij=[];

	for (var i=0;i<array.length; i++){
		if(array.toString()===""||isNaN(array[i])){
			conosle.log("Invalid Input");
		}
		else {		
			for(i=1; i<array.length;i++){		
				Jimmy.push(array[i]-array[i-1]);
				Ymmij.push(array[i-1]-array[i]);		
				var Bill=array.length-1;
				if(Jimmy.length==Bill&&Ymmij.length==Bill){
					Jimmy=Math.max.apply(null,Jimmy);
					Ymmij=Math.max.apply(null,Ymmij);
					if (Jimmy>Ymmij){
						console.log("function 9 = "+Jimmy);
					}else{
						console.log("function 9 = "+Ymmij);
					}
				}
			}
		}
	}
}
findMaxDiff(array);

/*
 * PROBLEM 10: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 var string = "My name is Charlie.";
function insertDashes(string){
	if (string===""){
		console.log("Invalid Input");
	}else{
		string=string.split('').join('-');
		var re = /- -/g;
		string=string.replace(re,' ');
		console.log("function 10 = "+string);
	}
}
insertDashes(string);


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
b = 12;
function mySubstring(string, a, b){
	if(string===""||a===""||b===""||isNaN(a)||isNaN(b)||
	a<0||b>string.length){
		console.log("Invalid Input");
	}
	else 
	{
		b=parseInt(b)+1;
		a=parseInt(a);
		string=string.slice(a, b);
		console.log("function 11 = "+string);
	}
}
mySubstring(string, a, b);

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
array = ["a", "b", "c", "d", "e"];
function splitSwap(array){
	if(array===""){
		console.log("Invalid Input");
	}
	else {
			var rightArray = array.splice(0, Math.floor(array.length/2));
			array=array.concat(rightArray);
			array = "[" + array.join(",") + "]";
			console.log("function 12 = "+array);
		}
}
splitSwap(array);


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
 var n = 16;
 var k = 3;
 function smallMultiples(n, k){
 	var array=[];
 	if(n===""||k===""||k>=n||isNaN(n)||isNaN(k)){
 		console.log("Invalid Input");
 	}else{
 		for (var i=2; i<=n;i++){
			if(i*k<=n){
				array.push(i);
			}
 		}
 		console.log("function 13 = "+array.length);
 	}
}
smallMultiples(n,k);
}());
 
