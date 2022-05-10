function CalculaTensaoNormal() {
    var forca = document.querySelector("#forca");
    var diametro = document.querySelector("#diametro");
    var areaUsuario = document.querySelector("#area");

    console.log(areaUsuario);

    var forcaValor = forca.value;
    var diametroValor = diametro.value;
    var areaUsuarioValor = areaUsuario.value;
    var tensao = 0;

    console.log(areaUsuarioValor);

    if(areaUsuarioValor > 0) {
        tensao = forcaValor / areaUsuarioValor;

    } else {
        var raio = diametroValor / 2;
        var area = Math.PI * (raio * raio);

        tensao = forcaValor / area;
    }

    document.writeln(tensao);
}

function CalculaDeformacao() {
    var comprimentoInicial = document.querySelector("#comprimentoInicial");
    var variacaoComprimento = document.querySelector("#variacaoComprimento");

    var comprimentoInicialValor = comprimentoInicial.value;
    var variacaoComprimentoValor = variacaoComprimento.value;

    var deformacao = variacaoComprimentoValor / comprimentoInicialValor;

    document.writeln(deformacao);
}

function CalculaTensaoAdmissivel() {
    var tensaoLimite = document.querySelector("#tensaoLimite");
    var coeficienteSeguranca = document.querySelector("#coeficienteSeguranca");

    var tensaoLimiteValor = tensaoLimite.value;
    var coeficienteSegurancaValor = coeficienteSeguranca.value;

    var tensaoAdmissivel = tensaoLimiteValor / coeficienteSegurancaValor;

    document.writeln(tensaoAdmissivel);
}

//var btn = document.getElementById("btnCalcula");

//btn.addEventListener("click", exibirMensagem)