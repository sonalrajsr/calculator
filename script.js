// curentdisplay is variable storing the display string.
let currentdisplay = ''
const screen = document.querySelector(".screen")
// selecting the buttons 
const clear_button = document.querySelector('.clear')
const plus_button = document.querySelector('.plus')
const minus_button = document.querySelector('.minus')
const multiply_button = document.querySelector('.multiply')
const devide_button = document.querySelector('.devide')
const decimal_button = document.querySelector('.decimal')
const one_button = document.querySelector('.one')
const two_button = document.querySelector('.two')
const three_button = document.querySelector('.three')
const four_button = document.querySelector('.four')
const five_button = document.querySelector('.five')
const six_button = document.querySelector('.six')
const seven_button = document.querySelector('.seven')
const eight_button = document.querySelector('.eight')
const nine_button = document.querySelector('.nine')
const zero_button = document.querySelector('.zero')
const equal_button = document.querySelector('.equal')
const backspace_button = document.querySelector('.backspace')


// defined a function for backspace
function backspace(string) {
    return string = string.slice(0, -1);
}

// adding functanality for each button
// this is mouse click event
clear_button.addEventListener("click", () => {
    currentdisplay = ''
    screen.innerHTML = currentdisplay
});
plus_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "+"
    screen.innerHTML = currentdisplay
})
minus_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "-"
    screen.innerHTML = currentdisplay
})
multiply_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "*"
    screen.innerHTML = currentdisplay
})
devide_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "/"
    screen.innerHTML = currentdisplay
})
decimal_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "."
    screen.innerHTML = currentdisplay
})
one_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "1"
    screen.innerHTML = currentdisplay
})
two_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "2"
    screen.innerHTML = currentdisplay
})
three_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "3"
    screen.innerHTML = currentdisplay
})
four_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "4"
    screen.innerHTML = currentdisplay
})
five_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "5"
    screen.innerHTML = currentdisplay
})
six_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "6"
    screen.innerHTML = currentdisplay
})
seven_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "7"
    screen.innerHTML = currentdisplay
})
eight_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "8"
    screen.innerHTML = currentdisplay
})
nine_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "9"
    screen.innerHTML = currentdisplay
})
zero_button.addEventListener("click", () => {
    currentdisplay = currentdisplay + "0"
    screen.innerHTML = currentdisplay
})
equal_button.addEventListener("click", () => {
    let result = eval(currentdisplay)
    screen.innerHTML = result
})

backspace_button.addEventListener("click", () => {
    currentdisplay = backspace(currentdisplay)
    screen.innerHTML = currentdisplay
})

// adding the keyboard event
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        event.preventDefault(); 
        let result = eval(currentdisplay)
        screen.innerHTML = result
    } else if (event.key ===  "Backspace"){
        currentdisplay = backspace(currentdisplay) //backspace function call
        screen.innerHTML = currentdisplay
    }else if(event.key >= "0" && event.key <= "9"){
        currentdisplay = currentdisplay + event.key
        screen.innerHTML = currentdisplay
        // console.log("Key pressed: " + event.key);
    }else if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '.' ){
        currentdisplay = currentdisplay + event.key
        screen.innerHTML = currentdisplay
    } else{
        alert("Enter numerical value only");
    }
});
