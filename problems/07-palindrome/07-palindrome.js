/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
          
    someStr = someStr.toLowerCase();
    let len = someStr.length;

    for (let i = 0; i < len/2; i++) {
        if(someStr[i] !== someStr[len - 1 - i]){
            return false
        }        
    }  
    return true
}
console.log(isPalindrome("racecar"));
