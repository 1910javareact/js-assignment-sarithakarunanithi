/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let rev = '';

    for(let i = someStr.length-1; i >= 0; i--){
        rev = rev + someStr.charAt(i);
    }        
    return rev;    
}
console.log(reverseStr('Saritha'));
   

