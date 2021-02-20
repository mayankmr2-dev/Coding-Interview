// Create a function that reverses a string
// "My name is Mayan" --> "nayaM si eman yM"


function reverse(str) {
    // "My name is Mayan"
    const backwards = [];  // 1. Create a backwards array
    const totalItems = str.length - 1; // 2. number for loop (initializing)
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])  // 3. adding items to array (Could've used split)
    }
    console.log(backwards);
    return backwards.join("")  // 4. Finally joining it 
}

function reverse2(str) {
    return str.split("").reverse().join("")
}

console.log(reverse("Hey my name is Mayan"));