
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el")  // store the save-el paragraph in a variable called saveEl 
let countEl = document.getElementById("count-el") // pass in arguments
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - " // a variable that contains both the count and the dash separator, i.e. "12 - "
    saveEl.textContent += countStr // Render the variable in the saveEl using innerText
    countEl.textContent = 0
    count = 0
}