//3 Write a JavaScript function to generate a random integer.
console.log(GenerateRandom(3));
function GenerateRandom(maxNoOfDigits)
{
 return Math.ceil( Math.pow(10,maxNoOfDigits)* Math.random());
}
//4. Write a JavaScript function to format a number up to specified decimal places.
var total=10.2356;
console.log(total.toFixed(8));
//5. Write a JavaScript function to find the highest value in an array. *

var personWeight=[50,65,45,90,55,75,80];
console.log(Math.max.apply(null,personWeight));
//6 Write a JavaScript function to find the lowest value in an array. *
console.log(Math.min.apply(null,personWeight));

   