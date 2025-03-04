for (let i = 0; i <=10; i++) {
    console.log("Muhammad Munsif", i)
}

// let num = 0;
// while (num > 10) {
//     console.log("welcome to JS", num)
//     num++;
// }

let num = 1; // Use let so we can modify the value

while (num < 10) { 
    if(num % 2 === 0){
        console.log("Welcome to JS", num);
    }
    num++; // Increment num to avoid infinite loop
    // console.log("same mistake")
}
