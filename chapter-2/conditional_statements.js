// if stsatements
console.log("before my if statements");
let age = 23;
if(age >= 18){
console.log("you can vote");
console.log("you can drive");
}
if (age < 18 ) {
    console.log("you cannot vote");
}
console.log("After my if statements");



let firstName = "Ravi";
if ( firstName == "Ravi") {
    console.log(`Welcome ${firstName}`)
}




// else-if statements
console.log("else-if statements");

let Age = 14;
if ( Age >= 18) {
    console.log("you can vote");
}
else if (Age < 18) {
    console.log("you cannot vote");
}




// if else
console.log ("if-else");

let myAge = 18;
if ( myAge >= 18) {
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}





console.log("Nested if-else");
// Nested if-else 
let marks = 45;

if ( marks >= 33) {
    console.log("pass");
    if (marks >= 80) {
        console.log("Grade: O");
    } else {
        console.log("Grade: A");
    }
} else{
    console.log("Better luck next time!");

}
