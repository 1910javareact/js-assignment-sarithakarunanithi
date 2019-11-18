/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) { 

    let find = Math.floor(someNum / 2) ; 

    if(find === someNum / 2) {
        return true;
    }
    return false; 
}
console.log(isEven(4));


 