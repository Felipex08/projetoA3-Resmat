function CalculaDeformacao() {
    var comprimentoInicial = document.querySelector("#comprimentoInicial");
    var variacaoComprimento = document.querySelector("#variacaoComprimento");

    var comprimentoInicialValue = comprimentoInicial.value;
    var variacaoComprimentoValue = variacaoComprimento.value;

    var comprimentoInicialValor = ConverteVirgulaEmPonto(comprimentoInicialValue);
    var variacaoComprimentoValor = ConverteVirgulaEmPonto(variacaoComprimentoValue);

    var deformacao = variacaoComprimentoValor / comprimentoInicialValor;

    var respostaDeformacao = deformacao.toFixed(2).replace(".", ",");

    document.querySelector("#respostaDeformacao").innerHTML = "Resultado: O valor da Deformação é: " + respostaDeformacao + " m.";
}

function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}