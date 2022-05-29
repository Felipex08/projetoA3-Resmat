import ConverteVirgulaEmPonto from './script';

function CalculaTensaoNormal() {
    var forca = document.querySelector("#forca");
    var areaUsuario = document.querySelector("#area");

    var forcaValue = forca.value;
    var areaUsuarioValue = areaUsuario.value;

    var forcaValor = auxiliar.ConverteVirgulaEmPonto(forcaValue);
    var areaUsuarioValor = auxiliar.ConverteVirgulaEmPonto(areaUsuarioValue);

    tensao = forcaValor * 1000 / areaUsuarioValor;

    var respostaTensao = tensao.toFixed(2).replace(".", ",");

    document.querySelector("#respostaTensao").innerHTML = "Resultado: O valor da Tensão é: " + respostaTensao + " MPa.";
}

function CalculaTensaoAdmissivel() {
    var tensaoLimite = document.querySelector("#tensaoLimite");
    var coeficienteSeguranca = document.querySelector("#coeficienteSeguranca");

    var tensaoLimiteValue = tensaoLimite.value;
    var coeficienteSegurancaValue = coeficienteSeguranca.value;

    var tensaoLimiteValor = auxiliar.ConverteVirgulaEmPonto(tensaoLimiteValue);
    var coeficienteSegurancaValor = auxiliar.ConverteVirgulaEmPonto(coeficienteSegurancaValue);

    var tensaoAdmissivel = tensaoLimiteValor / coeficienteSegurancaValor;

    var respostaTensaoAdmissivel = tensaoAdmissivel.toFixed(2).replace(".", ",");
    
    document.querySelector("#respostaTensaoAdmissivel").innerHTML = "Resultado: O valor da Tensão Admissível é: " + respostaTensaoAdmissivel + " MPa.";
}

function CalculaTensaoCisalhamento() {
    var forcaCisalhante = document.querySelector("#forcaCisalhante");
    var quantidadeAreasCisalhadas = document.querySelector("#quantidadeAreasCisalhadas");
    var areaCisalhada = document.querySelector("#areaCisalhada");

    var forcaCisalhanteValue = forcaCisalhante.value;
    var quantidadeAreasCisalhadasValue = quantidadeAreasCisalhadas.value;
    var areaCisalhadaValue = areaCisalhada.value;

    var forcaCisalhanteValor = auxiliar.ConverteVirgulaEmPonto(forcaCisalhanteValue);
    var quantidadeAreasCisalhadasValor = auxiliar.ConverteVirgulaEmPonto(quantidadeAreasCisalhadasValue);
    var areaCisalhadaValor = auxiliar.ConverteVirgulaEmPonto(areaCisalhadaValue);

    var tensaoCisalhamento = ((forcaCisalhanteValor * 1000) / ( quantidadeAreasCisalhadasValor * areaCisalhadaValor ));

    var respostaTensaoCisalhamento = tensaoCisalhamento.toFixed(2).replace(".", ",");

    document.querySelector('#respostaTensaoCisalhamento').innerHTML = "Resultado: O valor da Tensão de Cisalhamento é: " + respostaTensaoCisalhamento + " MPa.";
}

export {CalculaTensaoNormal, CalculaTensaoAdmissivel, CalculaTensaoCisalhamento};