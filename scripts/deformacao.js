function CalculaDeformacao() {
    var comprimentoInicial = document.querySelector("#comprimentoInicial");
    var variacaoComprimento = document.querySelector("#variacaoComprimento");

    var comprimentoInicialValue = comprimentoInicial.value;
    var variacaoComprimentoValue = variacaoComprimento.value;

    var comprimentoInicialValor = ConverteVirgulaEmPonto(comprimentoInicialValue);
    var variacaoComprimentoValor = ConverteVirgulaEmPonto(variacaoComprimentoValue);

    var deformacao = variacaoComprimentoValor / comprimentoInicialValor;

    var respostaDeformacao = deformacao.toFixed(2);

    var respostaDeformacaoFinal = respostaDeformacao.replace(".", ",");

    var respostaDeformacaoPorcentagem = respostaDeformacao * 100;

    document.querySelector("#respostaDeformacao").innerHTML = "Resultado: O valor da Deformação é " + respostaDeformacaoFinal + " ou em porcentagem é de " + respostaDeformacaoPorcentagem + "%.";
}

function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}