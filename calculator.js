temp = "";
topscreen = "";
operatorFlag = true;

function add(buttonValue) {
    temp += buttonValue
    mainscreen = temp
    document.getElementById('currentValue').innerText = mainscreen;
}

function operator(operator) {
    temp = ''
    mainscreen = eval(topscreen + mainscreen)
    topscreen = (mainscreen + operator).toString();
    document.getElementById('previousValue').innerText = topscreen;
    document.getElementById('currentValue').innerText = '';
    operatorFlag = false;
    operatorFlag = !operatorFlag;
}

function equal() {
    mainscreen = eval(topscreen + mainscreen)
    topscreen = ''
    document.getElementById('previousValue').innerText = topscreen;
    document.getElementById('currentValue').innerText = mainscreen;
}

function del() {
    mainscreen = mainscreen.slice(0, -1);
    temp = mainscreen
    document.getElementById('currentValue').innerText = mainscreen;
}

function clearing() {
    document.getElementById('currentValue').innerText = '';
    document.getElementById('previousValue').innerText = '';
    temp = "";
    topscreen = "";
    mainscreen = "";
    operatorFlag = true; 
}