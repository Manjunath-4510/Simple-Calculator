var input = document.getElementById("calc");
function one(){
    input.value = input.value +1;
}
function two(){
    input.value = input.value +2;
}
function three(){
    input.value = input.value +3;
}
function four(){
    input.value = input.value +4;
}
function five(){
    input.value = input.value +5;
}
function six(){
    input.value = input.value +6;
}
function seven(){
    input.value = input.value +7;
}
function eight(){
    input.value = input.value +8;
}
function nine(){
    input.value = input.value +9;
}
function zero(){
    input.value = input.value +0;
}
function dblzero(){
    input.value = input.value +0+0;
}

function symbol(value){
   document.getElementById("calc").value += value;
}
function clr(){
    document.getElementById("calc").value = '';
}
function calResult(){
    let result = document.getElementById("calc").value;
    let calresult = eval(result);
    document.getElementById("calc").value = calresult;
}
function dellastchar(){
    let currentval = document.getElementById("calc").value;
    document.getElementById("calc").value = currentval.slice(0,-1);
}