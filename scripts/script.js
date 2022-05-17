function CalculaTensaoNormal() {
    var forca = document.querySelector("#forca");
    //var diametro = document.querySelector("#diametro");
    var areaUsuario = document.querySelector("#area");

    var forcaValue = forca.value;
    //var diametroValue = diametro.value;
    var areaUsuarioValue = areaUsuario.value;
    //var tensao = 0;

    var forcaValor = ConverteVirgulaEmPonto(forcaValue);
    //var diametroValor = ConverteVirgulaEmPonto(diametroValue);
    var areaUsuarioValor = ConverteVirgulaEmPonto(areaUsuarioValue);

    /*if(areaUsuarioValor > 0) {
        tensao = forcaValor / areaUsuarioValor;

    } else {
        var raio = diametroValor / 2;
        var area = Math.PI * (raio * raio);

        tensao = forcaValor / area;
    }*/

    tensao = forcaValor / areaUsuarioValor;

    var respostaTensao = tensao.toFixed(2).replace(".", ",");

    document.querySelector("#respostaTensao").innerHTML = "O valor da Tensão é: " + respostaTensao + " MPa.";
}

function CalculaDeformacao() {
    var comprimentoInicial = document.querySelector("#comprimentoInicial");
    var variacaoComprimento = document.querySelector("#variacaoComprimento");

    var comprimentoInicialValue = comprimentoInicial.value;
    var variacaoComprimentoValue = variacaoComprimento.value;

    var comprimentoInicialValor = ConverteVirgulaEmPonto(comprimentoInicialValue);
    var variacaoComprimentoValor = ConverteVirgulaEmPonto(variacaoComprimentoValue);

    var deformacao = variacaoComprimentoValor / comprimentoInicialValor;

    var respostaDeformacao = deformacao.toFixed(2).replace(".", ",");

    document.querySelector("#respostaDeformacao").innerHTML = "O valor da Deformação é: " + respostaDeformacao + " m.";
}

function CalculaTensaoAdmissivel() {
    var tensaoLimite = document.querySelector("#tensaoLimite");
    var coeficienteSeguranca = document.querySelector("#coeficienteSeguranca");

    var tensaoLimiteValue = tensaoLimite.value;
    var coeficienteSegurancaValue = coeficienteSeguranca.value;

    var tensaoLimiteValor = ConverteVirgulaEmPonto(tensaoLimiteValue);
    var coeficienteSegurancaValor = ConverteVirgulaEmPonto(coeficienteSegurancaValue);

    var tensaoAdmissivel = tensaoLimiteValor / coeficienteSegurancaValor;

    var respostaTensaoAdmissivel = tensaoAdmissivel.toFixed(2).replace(".", ",");

    document.querySelector("#respostaTensaoAdmissivel").innerHTML = "O valor da Tensão Admissível é: " + respostaTensaoAdmissivel + " MPa.";
}

function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}

//var btn = document.getElementById("btnCalcula");

//btn.addEventListener("click", exibirMensagem)