var state = document.querySelector('#state');
var input = document.querySelector('#input');

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

btn1.addEventListener('click',() => {
    state.placeholder = 'q0';
});

btn2.addEventListener('click',() => {
    state.placeholder = 'q1';
});

btn3.addEventListener('click',() => {
    state.placeholder = 'q2';
});
