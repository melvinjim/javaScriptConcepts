class presentation {
    constructor (name, years){
        this.name = name;
        this.years = years;
    }

    greetings(){
        document.getElementById("presentation").innerHTML = "Hy mi name is <strong>" + this.name  + "</strong>  I have <strong>" + this.years + " </strong> years ago, I made this basic web page with the purpose of calculating mathematical multiplications, to continue click the continue button" ;
    }
}

let people = new presentation('Melvin', 18)

people.greetings();


class calculadora {
    constructor (first, second){
        this.first = first;
        this.second = second;
    }
    operation(){
        document.getElementById("text").innerHTML = "the numbers to multiply were: " + this.first + " y " + this.second ;
    }
}