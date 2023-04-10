function acaoBotao () {
    var n1, n2, op, resultado;
alert("--- CALCULADORA --- ")
n1 = (prompt("Digite o primeiro numero: "))
op = prompt("Digite o operador: +, -, *, /.")
n2 = (prompt("Digite o segundo numero: "))

if (op == "+"){
    resultado == parseInt(n1) + parseInt(n2)
}else if(op == "-"){
resultado == parseInt(n1) - parseInt(n2)
}else if(op == "*"){
    resultado == parseInt(n1) * parseInt(n2)
}else if(op == "/"){
    resultado == parseInt(n1) / parseInt(n2)
}

document.getElementById("teste").innerText = resultado

}
