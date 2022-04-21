let countEl = document.getElementById("count-el")
console.log(countEl)

// initialise the count as 0
let count = 0
// listen for clicks on the increment button
function increment() {
    count = count + 1
    countEl.innerText = count
}
// incremement the count variable when the button is clicked
// change the count-el in the html to reflect the new count


// let lapsCompleted = 0

// function totalLaps() {
//     lapsCompleted = lapsCompleted + 1
// }

// totalLaps()
// totalLaps()
// totalLaps()

// console.log(lapsCompleted)