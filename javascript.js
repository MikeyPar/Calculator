var op = "+", x = "", y = "";
var display = document.querySelector(".display");
var operators = document.getElementsByClassName("op");
var nums = document.getElementsByClassName("num");
var clicked = false;
var buttons = document.getElementsByTagName("button");
var eq = false;

/* Number Buttons */
for (let num of nums){
    num.addEventListener("click", function(){
        display.innerHTML += this.innerHTML
        if (clicked == false){
            x += this.innerHTML;
        } else {
            y += this.innerHTML;
        }
    });
}

/* Operators */
for (let operator of operators){
    operator.addEventListener("click", function(){
        if (x != "" && y != ""){
            if (eq == true){
                y = "0";
            }
            display.innerHTML = operate(op, x, y);
            x = operate(op, x, y);
            y = "";
            eq = false;
        }
        if (x != "" || undefined){
            clicked = true;
            y = "";
        }
        document.getElementById("dot").disabled = false;
        op = this.innerHTML;
        display.innerHTML = x + " " + op + " ";
    });
}

/* Subtraction Button */
document.querySelector("#sub").addEventListener("click", function(){
    if (x == ""){
        x += "-";
    }
});

/* Clear Button */
document.querySelector("#clear").addEventListener("click", function(){
    clicked = false;
    display.innerHTML = "";
    x = "";
    y = "";
    document.getElementById("dot").disabled = false;
});

/* Dot Button */
document.getElementById("dot").addEventListener("click", function(){
    if (x.indexOf(".") > -1){
        document.getElementById("dot").disabled = true;
    }
    if (y.indexOf(".") > -1){
        document.getElementById("dot").disabled = true;
    }
});

/* Equals Button */
document.querySelector("#equals").addEventListener("click", function(){
    clicked = false;
    eq = true;
    if (x == "" || undefined){
        x = 0;
    }
    if (y == "" || undefined){
        y = 0;
    }
   
    display.innerHTML = operate(op, x, y)
    x = operate(op, x, y);
    console.log(x);
    console.log(y);
    if (x.indexOf(".") === -1){
        document.getElementById("dot").disabled = false;
    } else {
        document.getElementById("dot").disabled = true;
    }

    
    
});

function operate(op, x, y) 
{
    x = parseFloat(x);
    y = parseFloat(y);
    if (op == "+") {
        x = (x + y);
    } else if (op == "-") {
        x = (x - y);
    } else if (op == "*")  {
        x = (x * y);
    } else if (op == "/") {
        x = (x / y);
    } else {
        return "error.";
    }
    x = Math.round((x + Number.EPSILON) * 100) / 100;
    if (x == Infinity){
        return "You can't divide by 0.";
    }
    x = x.toString();
    y = y.toString();
    return x;
}