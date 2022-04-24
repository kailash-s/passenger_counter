let countEl = document.getElementById("count-el")
// console.log(countEl)

// initialise the count as 0
let count = 0
// listen for clicks on the increment button
// incremement the count variable when the button is clicked
// change the count-el in the html to reflect the new count
function increment() {
    count = count + 1
    countEl.innerText = count
    // console.log(count)
}

// Create a function, save(), which logs out the count when it's called
let saveEl = document.getElementById("save-btn")

function save() {
    console.log(count)
}