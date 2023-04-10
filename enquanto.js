function acaoBotao(){
    var nome, limite, contador, idade;

    limite = prompt("Quantas vezes vc quer que rode? ")
    nome = prompt("Digite seu nome: ")
    idade = prompt("Digite sua idade: ")
    contador = 0

    while (contador < idade) {

    if (idade > "18")
        document.getElementById("teste").innerText = nome + " Vc é maior de 18"

    else (idade < "18")
        document.getElementById("teste").innerText = nome + " Vc é menor de 18"   
    contador++

    }
}