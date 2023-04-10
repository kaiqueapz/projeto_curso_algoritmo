function acaoBotao () {
    var n1, fatorial;
    n1 = prompt("Quer ver o fatorial de qual numero? ")

    fatorial = 1
    for (var contador = 1; contador <= n1 ; contador++) {
        fatorial = fatorial * contador  
    }








 document.getElementById("teste").innerText = "Fatorial de " + n1 + "=" + fatorial
}