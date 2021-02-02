// Calculating BIg O

function funChallenge(input){
    a = 10;      // O(1) 
    a = 50+3;    // O(1)

    for(let i = 0;i<input.length;i++){ // O(n)
        otherfunc()  // O(n)
        let stranger = true;  //  O(n)
        a++;  // O(n)
    }
    return a;  // O(1)
}

// Final Big O calculation:
// 1+1+n+n+n+n+1   = 3+4n
// BigO(3+4n)