var nome, nota1, nota2;
nome = prompt("Digite seu nome: ")
nota1 = prompt("Digite nota 1: ")
nota2 = prompt("Digite nota 2: ")
media = (parseInt (nota1) + parseInt (nota2)) / 2

if (media >= 5)
    alert("Passou", nome)
else
    alert("Reprovou", nome)