function acaoBotao () {
    var n1, n2, op, resultado;
alert("--- CALCULADORA --- ")
n1 = (prompt("Digite o primeiro numero: "))
op = prompt("Digite o operador: +, -, *, /.")
n2 = (prompt("Digite o segundo numero: "))

switch(op){
    case "+":
        resultado = parseInt(n1) + parseInt(n2)
        break;

        case "-":
            resultado = parseInt(n1) - parseInt(n2)
            break;

            case "*":
                resultado = parseInt(n1) * parseInt(n2)
                break;

                case "/":
                    resultado = parseInt(n1) / parseInt(n2)
                    break;

}



document.getElementById("teste").innerText = resultado

}
