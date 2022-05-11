const people = new Presentation('Melvin', 18);
people.greetings();

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

    var numbers = new Calculator(firstNumber,secondNumber);
    let total = numbers.multiplication();

    if (total) {
        document.getElementById("text").innerHTML = "The result of your multiplication is: " + total ;

    } else if (isNaN(total) || total == undefined) {
        document.getElementById("result").innerHTML = "You must enter data only of numerical type";
    }
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById("number-one").value = " ";
    document.getElementById("number-two").value = " ";
    document.getElementById("result").innerHTML = " ";
});

document.getElementById('reset').addEventListener('click', function() {
    location.reload();
});