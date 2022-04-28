// VARIABLES
// Create two variables; firstName and lastName

let firstName = "Luffy"
let lastName = "Monkey"
let middleName = "D."

// Concantenate the two variables into a third variable called fullName

fullName = lastName + " " + middleName + " " + firstName

// Log fullName to the console

console.log(fullName)

// Create a function that logs out "Hi there, Luffy!" when called

let greeting = "Hi there"

function message() {
    console.log(greeting + ", " + firstName + "!")
}

message()

// INCREMENTING AND DECREMENTING
// Create two functions, add3Points() and remove1point() to have them add/remove points to/from the myPoints variable

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

// Call the function so that the line below logs out 10
console.log(myPoints)