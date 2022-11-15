

function clear_display() {
    document.getElementById("display").innerHTML = "0";
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