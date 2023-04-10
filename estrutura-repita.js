function acaoBotao(){

    var valor1, valor2, resultado, sairLoop;


    do {
    valor1 = prompt("Digite o primeiro valor : ")
    valor2 = prompt("Digite o segundo valor: ")
    resultado = parseInt(valor1) + parseInt(valor2)
 document.getElementById("teste").innerText = "Resultado é: " + resultado

    sairLoop = prompt("Deseja sair? S/N ")


    }while(sairloop == "S")



}