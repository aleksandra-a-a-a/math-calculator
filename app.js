let input = document.getElementById('calc-numbers');


function appear(x) {
    input.value += x
}

function equal() {
    let expression = input.value
    if (expression.indexOf("+") != -1) {
        const myArray = expression.split("+")
        let liczba1 = Number(myArray[0])
        let liczba2 = Number(myArray[1])
        input.value = liczba1 + liczba2 

    } else if (expression.indexOf("-") != -1) {
        const myArray = expression.split("-")
        let liczba1 = Number(myArray[0])
        let liczba2 = Number(myArray[1])
        input.value = liczba1 - liczba2
    }
    else if (expression.indexOf("/") != -1) {
        const myArray = expression.split("/")
        let liczba1 = Number(myArray[0])
        let liczba2 = Number(myArray[1])
        input.value = liczba1 / liczba2
    }
    else if (expression.indexOf("*") != -1) {
        const myArray = expression.split("*")
        let liczba1 = Number(myArray[0])
        let liczba2 = Number(myArray[1])
        input.value = liczba1 * liczba2
    }
}

function cl() {
    input.value = ""
}

function del() {
   input.value = input.value.slice(0, -1)
}