let stack =[];
let res;
const screen = document.getElementById("screen");
let hasPoint = false;

document.getElementById("in-9").addEventListener("click", function(){
    addNumber(9)
});
document.getElementById("in-8").addEventListener("click", function(){
    addNumber(8)
});
document.getElementById("in-7").addEventListener("click", function(){
    addNumber(7)
});
document.getElementById("in-6").addEventListener("click", function(){
    addNumber(6)
});
document.getElementById("in-5").addEventListener("click", function(){
    addNumber(5)
});
document.getElementById("in-4").addEventListener("click", function(){
    addNumber(4)
});
document.getElementById("in-3").addEventListener("click", function(){
    addNumber(3)
});
document.getElementById("in-2").addEventListener("click", function(){
    addNumber(2)
});
document.getElementById("in-1").addEventListener("click", function(){
    addNumber(1)
});
document.getElementById("in-0").addEventListener("click", function(){
    addNumber(0)
});

document.getElementById("in-float").addEventListener("click", function(){
    if (!screen.value.includes('.')){
        addNumber('.');
        hasPoint = true;
    }
    
});

document.getElementById("in-AC").onclick = function(){
    screen.value = ""
}

document.getElementById("in-DEL").addEventListener("click", function(){
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1)
});


document.getElementById("in-add").addEventListener("click", function(){
    pushStack("+")
});
document.getElementById("in-min").addEventListener("click", function(){
    pushStack("-")
});
document.getElementById("in-mul").addEventListener("click", function(){
    pushStack("*")
});
document.getElementById("in-div").addEventListener("click", function(){
    pushStack("/")
});

function pushStack(op){
    if (screen.value == '' && stack.length != 0){
        stack[stack.length - 1] = op;
    }else{
        stack.push(screen.value);
        stack.push(op);
    }
    screen.value = ""
    hasPoint = false
}


document.getElementById("in-eq").addEventListener("click", function(){
    if (screen.value != ""){
        stack.push(screen.value)
    }
    res = Number(stack[0])
    if (stack.length % 2 == 0){
        stack.pop();
    }
    for (var i=1; i<=stack.length-2; i+=2){
        switch (stack[i]){
            case "+":
                res += Number(stack[i+1]);
                break;
            case "-":
                res -= Number(stack[i+1]);
                break;
            case "*":
                res *= Number(stack[i+1]);
                break;
            case "/":
                res /= Number(stack[i+1]);
                break;
        }
    }
    
    console.log(stack)
    console.log(res)
    screen.value = res;
    stack = []
});


function addNumber(c){

    document.getElementById("screen").value += c
}