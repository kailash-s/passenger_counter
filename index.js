// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let myName = "Fred"
let greeting = "Welcome! "

// Render the welcome message using welcomeEl.innerText

welcomeEl.innerText = greeting + myName

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += " 👋"