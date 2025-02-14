let str = "Apple";
if ((str[0] === 'A') && (str.length > 3)) {
    console.log(`${str} is a good string`);
} else {
    console.log(`${str} is not  a good string`);
}


// Qs 2
console.log("Qs 2.");

let num = 12;

if ((num % 3 === 0) && ( (num + 1 == 15) || (num - 1 == 11))) {
    console.log("safe");
} else{
    console.log("unsafe")
}
