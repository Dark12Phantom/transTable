var state = document.querySelector('#state');
var input = document.querySelector('#inputs');

var btn1 = document.querySelector('.btn1'); //q0
var btn2 = document.querySelector('.btn2'); //q1
var btn3 = document.querySelector('.btn3'); //q2

var btn4 = document.querySelector('.btn4'); //0
var btn5 = document.querySelector('.btn5'); //q1
var btn6 = document.querySelector('.btn6'); //q1
var btn7 = document.querySelector('.btn7'); //q2

var btn8 = document.querySelector('.btn8'); //1
var btn9 = document.querySelector('.btn9'); //q2
var btn10 = document.querySelector('.btn10'); //q1
var btn11 = document.querySelector('.btn11'); //q2
var btn = document.querySelector('.btn');

function btn2Update() {
    if (state.placeholder === "q0" && input.placeholder === "0") {
        btn1.classList.add('active3');
        btn2.classList.add('active2');
        btn4.classList.add('active3');
    } else {
        btn1.classList.remove('active3');
        btn4.classList.remove('active3');
        btn2.classList.remove('active2');
    }

    if (state.placeholder === "q0" && input.placeholder === "1") {
        btn1.classList.add('active3');
        btn3.classList.add('active2');
        btn8.classList.add('active3');
    } else {
        btn1.classList.remove('active3');
        btn8.classList.remove('active3');
        btn3.classList.remove('active2');
    }
}

btn1.addEventListener('click',() => {
    state.placeholder = 'q0';
    btn2Update()
});

btn2.addEventListener('click',() => {
    state.placeholder = 'q1';
    btn2Update()
});

btn3.addEventListener('click',() => {
    state.placeholder = 'q2';
    btn2Update()
});

btn4.addEventListener('click', () => {
    input.placeholder = '0';
    btn2Update()
});

btn5.addEventListener('click', () => {
    input.placeholder = 'q1';
    btn2Update()
});

btn6.addEventListener('click', () => {
    input.placeholder = 'q1';
    btn2Update()
});

btn7.addEventListener('click', () => {
    input.placeholder = 'q2';
    btn2Update()
});

btn8.addEventListener('click', () => {
    input.placeholder = '1';
    btn2Update()
});

btn9.addEventListener('click', () => {
    input.placeholder = 'q2';
    btn2Update()
});

btn10.addEventListener('click', () => {
    input.placeholder = 'q1';
    btn2Update()
});

btn11.addEventListener('click', () => {
    input.placeholder = 'q2';
    btn2Update()
});
