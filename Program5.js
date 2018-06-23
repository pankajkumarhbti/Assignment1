//8. Write a JavaScript function to test if a number is a power of 2.
console.log(IsPowerOf2(8));
console.log(IsPowerOf2(17));

function IsPowerOf2(num) {
    if (typeof num !== 'number') 
         return 'Not a number'; 
   
       return num && (num & (num - 1)) === 0;
   }
   //Second version of the function
   console.log(powerOfTwo(16));  
function powerOfTwo(x) {
    return (Math.log(x)/Math.log(2)) % 1 === 0;
}

//9.Write a JavaScript function to round a number to a given decimal places.
//looks like it is similar to question 4
//10. Write a JavaScript function to hide email addresses to protect from unauthorized user.
  //Not clear
//11. Write a JavaScript function to capitalize the first letter of a string.

function CapitalizeFirstLetterOfString( str)
{
return str[0].toString().toUpper();

}


