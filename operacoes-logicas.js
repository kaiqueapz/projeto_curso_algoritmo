var nome, nota1, nota2;
nome = prompt("Digite seu nome: ")
nota1 = prompt("Digite sua nota 1: ")
nota2 = prompt("Digite sua nota 2: ")

media = (parseInt(nota1) + parseInt(nota2)) /2
passou = false

if (media >= 5)
    passou = true;

if (passou || media >= 5){
    alert("Aprovado " + nome)
    alert("Otimo aluno!")
}
else
    alert("Reprovado " + nome)

document.getElementById("teste").innerText 

