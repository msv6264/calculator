let string = "";
let buttons = document.querySelectorAll('.buttons button');
let screen = document.querySelector('.screen');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let clicked = e.target.innerHTML;

        if(clicked == '=') {
            try {
                string = eval(string.replace(/x/g, '*'));
            } catch {
                string = "Error";
            }
            screen.textContent = string;
        } 
        else if(clicked == 'AC') {
            string = "";
            screen.textContent = string;
        } 
        else if(clicked == 'CE') {
            string = string.slice(0, -1);
            screen.textContent = string;
        } 
        else {
            string = string + clicked;
            screen.textContent = string;
        }
    });
});