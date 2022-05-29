function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}

//var btn = document.getElementById("btnCalcula");
//btn.addEventListener("click", exibirMensagem)

async function CriaElementoEmLoop(tipoElemento, id, type, element, mensagem) {
    var elementoCriado = document.createElement(tipoElemento);

    if(tipoElemento == "input") {
        elementoCriado.setAttribute("id", id);
        elementoCriado.setAttribute("type", type);
        element.appendChild(elementoCriado);

        while (elementoCriado.value.length < 1) {
            const sleep = ms => new Promise(r => setTimeout(r, ms));
            await sleep(3000);
            //console.log("passei por aqui");
        }
        console.log(elementoCriado.value);
    }

    if(tipoElemento == "p") {
        elementoCriado.innerHTML = mensagem;
        element.appendChild(elementoCriado);
    }
    
    return elementoCriado;
}

export { ConverteVirgulaEmPonto,  CriaElementoEmLoop};