// grab the parent of td

let calculator = document.getElementById('calculator');
let screen = document.getElementById('display')
let display = ""
let value1 = ''
let value2 = ''
operator = ''
let result = ''
calculator.addEventListener('click', process);
function process(e) {
    let pressed_value = e.target.textContent;

    if (pressed_value == '=') {

        screen.textContent = eval(display);

    }
    else if (pressed_value == 'X') {
        display = display.slice(0, display.length - 1)
        screen.textContent = display;

    }

    else {
        display += pressed_value;
        screen.textContent = display;
        console.log(display)
    }


}




















