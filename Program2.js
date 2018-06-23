//2. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.
console.log(decimalToRadix(32861,16))

function decimalToRadix(number,radix)
{
var inter=0;
var remainder="";
while(number>=radix)
{
    remainder=number%radix+remainder;
    if(radix==16)
    remainder=getHexDegit(remainder);
    
    number=Math.floor(number/radix); 
       
}
//console.log( parseInt(number+remainder,radix));
return number+remainder;
}

function getHexDegit(digit)
{
    switch(digit)
    {
     case "10":
     return "A";
    
     case "11":
     return "B";
    
     case "12":
     return "C";
     
     case "13":
     return "D";
    
     case "14":
     return "E";
     
     case "15":
     return "F";
    }
    return digit;

}




