//1. Write a JavaScript function to convert a binary number to a decimal number.

console.log(BinaryToDecimal(110));

function BinaryToDecimal(binaryNumber)
{

var res=0;
var strLen=binaryNumber.toString().length;
binaryNumber=binaryNumber.toString();
//console.log(strLen);
for(let i=0;i<strLen;i++)
{
   
    var curDigit= parseInt(binaryNumber[i]);
    if(curDigit>1)
    {
        res=0;
        console.log("Invalid binary number");
        break;
    }
    res=res+curDigit*Math.pow(2,strLen-1-i);       
}
return res;
}
