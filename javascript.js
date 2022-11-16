var op, x = "", y = "";
var display = document.querySelector(".display");
var operators = document.getElementsByClassName("op");
var nums = document.getElementsByClassName("num");
var clicked = false;

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
        if (x != ""){
            clicked = true;
            y = "";
        }
        op = this.innerHTML;
        display.innerHTML = x + " " + op + " ";
    })
}

/* Clear Button */
document.querySelector("#clear").addEventListener("click", function(){
    clicked = false;
    display.innerHTML = "";
    x = "";
    y = "";
});

/* Equals Button */
document.querySelector("#equals").addEventListener("click", function(){
    clicked = false;
    x = parseFloat(x);
    y = parseFloat(y);
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("op = " + op);
    display.innerHTML = operate(op, x, y);
    x = operate(op, x, y);
});


function operate(op, x, y) 
{
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
    return x;
}