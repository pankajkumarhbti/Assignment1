//Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
console.log(GCD(32,45));//number
function GCD(num1,num2)
{
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) 
    return "Invalid numbers";
var gcd=0;
while(num2!=0)
{
    var a=num2;
    num2=num1%num2;
    num1=a;
}
return num1;
}