function CalculaTensaoNormal() {
    var forca = document.querySelector("#forca");
    var diametro = document.querySelector("#diametro");
    var areaUsuario = document.querySelector("#area");

    var forcaValue = forca.value;
    var diametroValue = diametro.value;
    var areaUsuarioValue = areaUsuario.value;
    var tensao = 0;

    var forcaValor = ConverteVirgulaEmPonto(forcaValue);
    var diametroValor = ConverteVirgulaEmPonto(diametroValue);
    var areaUsuarioValor = ConverteVirgulaEmPonto(areaUsuarioValue);
    //console.log(forcaValor);
    //console.log(diametroValor);
    //console.log(areaUsuarioValor);

    if(areaUsuarioValor > 0) {
        tensao = forcaValor / areaUsuarioValor;

    } else {
        var raio = diametroValor / 2;
        var area = Math.PI * (raio * raio);

        tensao = forcaValor / area;
    }

    var respostaTensao = tensao.toFixed(2).replace(".", ",");

    document.querySelector("#respostaTensao").innerHTML = "O valor da Tensão é: " + respostaTensao + " MPa.";
}

function CalculaDeformacao() {
    var comprimentoInicial = document.querySelector("#comprimentoInicial");
    var variacaoComprimento = document.querySelector("#variacaoComprimento");

    var comprimentoInicialValor = comprimentoInicial.value;
    var variacaoComprimentoValor = variacaoComprimento.value;

    var deformacao = variacaoComprimentoValor / comprimentoInicialValor;

    document.querySelector("#respostaDeformacao").innerHTML = "O valor da Deformação é: " + deformacao.toFixed(2) + " m.";
}

function CalculaTensaoAdmissivel() {
    var tensaoLimite = document.querySelector("#tensaoLimite");
    var coeficienteSeguranca = document.querySelector("#coeficienteSeguranca");

    var tensaoLimiteValor = tensaoLimite.value;
    var coeficienteSegurancaValor = coeficienteSeguranca.value;

    var tensaoAdmissivel = tensaoLimiteValor / coeficienteSegurancaValor;

    document.querySelector("#respostaTensaoAdmissivel").innerHTML = "O valor da Tensão Admissível é: " + tensaoAdmissivel.toFixed(2) + " MPa.";
}

function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}

//var btn = document.getElementById("btnCalcula");

//btn.addEventListener("click", exibirMensagem)