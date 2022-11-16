var op;


var nums = document.getElementsByClassName("num");
for (let num of nums){
    num.addEventListener("click", function(){
        document.querySelector(".display").innerHTML += this.innerHTML
        toX();
        return;
    });
}

var operators = document.getElementsByClassName("op");
for (let operator of operators){
    operator.addEventListener("click", function() {
        document.querySelector(".display").innerHTML += " " + this.innerHTML + " ";
        op = this.innerHTML;
        document.getElementById("div").disabled = true;
        document.getElementById("mult").disabled = true;
        document.getElementById("sub").disabled = true;
        document.getElementById("add").disabled = true;

    })
}

/* Clear Button */
document.querySelector("#clear").addEventListener("click", function(){
    document.querySelector(".display").innerHTML = "";        document.getElementById("div").disabled = true;
    document.getElementById("mult").disabled = false;
    document.getElementById("sub").disabled = false;
    document.getElementById("add").disabled = false;
    document.getElementById("div").disabled = false;
});

function toX()
{
    var dispNum = document.querySelector(".display").innerHTML;
    var first = parseFloat(dispNum);
    console.log("x = " +  first);
    console.log("op = " + op);
}

function operate(op, x, y) 
{
    if (op == "+") {
        return add(x, y);
    } else if (op == "-") {
        return sub(x, y);
    } else if (op == "*")  {
        return mult(x, y);
    } else if (op == "/") {
        return div(x, y);
    } else {
        return "error.";
    }
}

function add(x, y) 
{
    return x + y;
}
function sub(x, y) 
{
    return x - y;
}
function mult(x, y) 
{
    return x * y;
}
function div(x, y) 
{
    return x / y;
}