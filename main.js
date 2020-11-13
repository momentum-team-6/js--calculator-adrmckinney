const calculator = document.querySelector('.calculator-container')
const display = document.querySelector('#display-number')

calculator.addEventListener('click',function(event) {
    // console.log(event)
    // console.log(event.target)
    console.log(event.target.innerText)
    
    let buttonText = event.target.innerText
    if (buttonText === "C") {
        display.innerHTML = ""
    } else if(buttonText === "=") {
        let result = eval(display.innerText)
        display.innerHTML = result
    } else {
        display.innerHTML += buttonText
    }
})

