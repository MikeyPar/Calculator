var op 
var x = "";
var y = "";
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
        if (x != "" || undefined){
            clicked = true;
            y = "";
        }
        document.getElementById("dot").disabled = false;
        op = this.innerHTML;
        display.innerHTML = x + " " + op + " ";
    });
}

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
    if (x.includes(".")){
        document.getElementById("dot").disabled = true;
    }
    if (x.includes(".")){
        document.getElementById("dot").disabled = true;
    }
})

/* Equals Button */
document.querySelector("#equals").addEventListener("click", function(){
    clicked = false;
    if (x == "" || undefined){
        x = 0;
    }
    if (y == "" || undefined){
        y = 0;
    }
    x = parseFloat(x);
    y = parseFloat(y);
    display.innerHTML = operate(op, x, y)
    x = operate(op, x, y);
    console.log(x);
    console.log(y);
    console.log(op)

    x = x.toString();
    y = y.toString();
    document.getElementById("dot").disabled = false;
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
    x = Math.round((x + Number.EPSILON) * 100) / 100;
    return x;
}