var state = document.querySelector('#state');
var input = document.querySelector('#inputs');

var btn1 = document.querySelector('.btn1');
var btn3 = document.querySelector('.btn3');
var btn4 = document.querySelector('.btn4');
var btn2 = document.querySelector('.btn2');
var btn5 = document.querySelector('.btn5');
var btn6 = document.querySelector('.btn6');
var btn7 = document.querySelector('.btn7');
var btn8 = document.querySelector('.btn8');
var btn9 = document.querySelector('.btn9');
var btn10 = document.querySelector('.btn10');
var btn11 = document.querySelector('.btn11');
var btn = document.querySelector('.btn');

function btn2Update() {
    if (state.placeholder === "q0" && input.placeholder === "0") {
        btn1.classList.add('active');
        btn2.classList.add('active2');
        btn4.classList.add('active');
    } else {
        btn1.classList.remove('active');
        btn4.classList.remove('active');
        btn2.classList.remove('active2');
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
