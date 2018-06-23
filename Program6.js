//11. Write a JavaScript function to capitalize the first letter of a string.
console.log(ConvertFirstCharacterToUpperCase("pankaj kumar"));

function ConvertFirstCharacterToUpperCase(text) {
    return text.substr(0, 1).toUpperCase() + text.substr(1);    
}
//12. Write a JavaScript program that accept two integers and display the larger.
console.log("larger is:"+PrintLarger(10,85));
function PrintLarger(x,y)
{
    return x>y?x:y;
}
