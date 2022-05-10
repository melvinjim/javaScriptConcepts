document.getElementById('continue').addEventListener('click', function() {
    document.getElementById("reference").style.display = "none";
    document.getElementById("Registration").style.display = "block";

});

document.getElementById('save').addEventListener('click', function() {
    var name = document.getElementById("name").value;

    if(name === ''){
        alert("you must enter your name");
       return false;
    } else {
        document.getElementById("interaction").innerHTML = "Hy " + '<strong>' + name +'</strong>' + " we are here to help you solve your mathematical multiplications";
        document.getElementById("exercise").style.display = "block";
    }
});

document.getElementById('multiplicar').addEventListener('click', function() {
    firstNumber = document.getElementById("number-one").value;
    secondNumber = document.getElementById("number-two").value;

    var result = multiplication(firstNumber,secondNumber);

    if (isNaN(result) || result == undefined) {
        document.getElementById("result").innerHTML = "You must enter data only of numerical type";
    } else {
       document.getElementById("result").innerHTML = "The result of your multiplication is: " + result;
       var numbers = new calculadora(firstNumber,secondNumber);
        numbers.operation();
    }
});

var multiplication = (firstNumber, secondNumber) => {
    operation = firstNumber * secondNumber;
    return operation;
}

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById("number-one").value = " ";
    document.getElementById("number-two").value = " ";
    document.getElementById("result").innerHTML = " ";
});

document.getElementById('reset').addEventListener('click', function() {
    location.reload();
});
