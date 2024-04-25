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

var sel = document.querySelector('.combinations');
var opt = document.querySelector('#combo');

function btn2Update() {
    setTimeout(() => {
        if (state.value === "q0" && input.value === "0") {
            btn2.classList.add("active2");
            btn1.classList.add("active");
            btn4.classList.add("active");
        } else {
            btn2.classList.remove("active2");
            btn1.classList.remove("active");
            btn4.classList.remove("active");
        }
    }, 100);
    setTimeout(() => {
        if (state.value === "q0" && input.value === "1") {
            btn3.classList.add("active2");
            btn1.classList.add("activey");
            btn8.classList.add("activey");
        } else {
            btn3.classList.remove("active2");
            btn1.classList.remove("activey");
            btn8.classList.remove("activey");
        }
    }, 100);
    setTimeout(() => {
        if (state.value === "q1" && input.value === "0") {
            btn2.classList.add("active3");
            btn2.classList.add("activex");
            btn4.classList.add("activex");
        } else {
            btn2.classList.remove("active3");
            btn2.classList.remove("activex");
            btn4.classList.remove("activex");
        }
    }, 100);
    setTimeout(() => {
        if (state.value === "q1" && input.value === "1") {
            btn2.classList.add("active41");
            btn2.classList.add("activez");
            btn8.classList.add("activez");
        } else {
            btn2.classList.remove("active41");
            btn2.classList.remove("activez");
            btn8.classList.remove("activez");
        }
    }, 100);
    setTimeout(() => {
        if (state.value === "q2" && input.value === "1") {
            btn3.classList.add("active4");
            btn3.classList.add("activex");
            btn8.classList.add("activex");
        } else {
            btn3.classList.remove("active4");
            btn3.classList.remove("activex");
            btn8.classList.remove("activex");
        }
    }, 100);
    setTimeout(() => {
        if (state.value === "q2" && input.value === "0") {
            btn3.classList.add("active31");
            btn3.classList.add("activey");
            btn4.classList.add("activey");
        } else {
            btn3.classList.remove("active31");
            btn3.classList.remove("activey");
            btn4.classList.remove("activey");
        }
    }, 100);

}

function updateStateAndInvokeBtn2Update(newState) {
    state.removeAttribute("placeholder");
    state.value = newState;
    state.classList.add('styling');
    btn2Update();
}

function updateInputAndInvokeBtn2Update(newValue) {
    input.removeAttribute("placeholder");
    input.value = newValue;
    input.classList.add('styling');
    btn2Update();
}

opt.addEventListener('change', function () {
    var selectedOption = opt.options[opt.selectedIndex];
    var optionText = selectedOption.textContent;
    var stateValue = optionText.split('State: ')[1].split(' & ')[0].trim();
    var inputValue = optionText.split('Input: ')[1].trim();
    state.value = stateValue;
    input.value = inputValue;
    updateStateAndInvokeBtn2Update(stateValue);
    updateInputAndInvokeBtn2Update(inputValue);
});

btn1.addEventListener('click', () => updateStateAndInvokeBtn2Update("q0"));
btn2.addEventListener('click', () => updateStateAndInvokeBtn2Update("q1"));
btn3.addEventListener('click', () => updateStateAndInvokeBtn2Update("q2"));
btn4.addEventListener('click', () => updateInputAndInvokeBtn2Update("0"));
btn5.addEventListener('click', () => updateInputAndInvokeBtn2Update("q1"));
btn6.addEventListener('click', () => updateInputAndInvokeBtn2Update("q1"));
btn7.addEventListener('click', () => updateInputAndInvokeBtn2Update("q2"));
btn8.addEventListener('click', () => updateInputAndInvokeBtn2Update("1"));
btn9.addEventListener('click', () => updateInputAndInvokeBtn2Update("q2"));
btn10.addEventListener('click', () => updateInputAndInvokeBtn2Update("q1"));
btn11.addEventListener('click', () => updateInputAndInvokeBtn2Update("q2"));
