function calcular () {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 =parseFloat(document.getElementById('n2').value);

    var soma = n1 + n2;
    var diferenca = n1 - n2;
    var produto = n1 * n2;
    var divisao = n1 / n2; 

    var resultadosDiv = document.getElementById('resultados')
    resultadosDiv.innerHTML = "<h3>Resultados:</h3>" + "<p>Soma: " + soma + "</p>" + "<p>Diferença: " + diferenca + "</p>" + "<p>Produto: " + produto + "</p>" + "<p>Divisão: " + divisao + "</p>";
}