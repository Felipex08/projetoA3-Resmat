function ConverteVirgulaEmPonto(valor) {
    valor = valor.replace(",", ".");
    return valor;
}

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

    if(tipoElemento == "p" || tipoElemento == "h3") {
        elementoCriado.innerHTML = mensagem;
        element.appendChild(elementoCriado);
    }
    
    return elementoCriado;
}

async function CalculaTensaoMaxima() {
    //l = float(input('Comprimento da viga em mts '))
    var l = document.querySelector("#comprimentoViga");
    var lValue = l.value;
    var lValor = ConverteVirgulaEmPonto(lValue);

    //a1 = float(input('Posicionamento do primeiro apoio '))
    var a1 = document.querySelector("#posicionamentoPrimeiroApoio");
    var a1Value = a1.value;
    var a1Valor = ConverteVirgulaEmPonto(a1Value);

    //a2 = float(input('Posicionamento do segundo apoio '))
    var a2 = document.querySelector("#posicionamentoSegundoApoio");
    var a2Value = a2.value;
    var a2Valor = ConverteVirgulaEmPonto(a2Value);

    //forcas = int(input('Insira a quantidade de forças pontuais '))
    var forcas = document.querySelector("#quantidadeForcasPontuais");
    var forcasValor = forcas.value;

    //cargas = int(input('Insira a quantidade de cargas distribuidas '))
    var cargas = document.querySelector("#quantidadeCargasDistribuidas");
    var cargasValor = cargas.value;

    //momentos = int(input('Insira a quntidade de momentos '))
    var momentos = document.querySelector("#quantidadeMomentos");
    var momentosValor = momentos.value;

    var forcasLista = [];
    var posicaoLista = [];
    var listaEMomentos = [];
    var listaMomentos = [];
    var listaEPosicaoMomentos = [];
    var listaPosicaoMomentos = [];
    var listaCargas = [];
    var listaPosicaoCargas = [];
    var cargasResultante = [];
    var posicaoCargaResultante = [];
    var resultados = [];
    var resultadosFinais = [];
    var listaPReacoes = [];
    var listaFReacoes = [];
    var listaFMCargas = [];
    var listaPMCargas = [];
    var posicaoFinal = [];
    var momentoFinal = [];
    var listaPosicoesFinais = [];
    var resultadosFinaisParaUsuario = [];
    //Parte de forças pontuais

    var tituloInputForcasPontuais = document.querySelector("#tituloInputForcasPontuais");
    var auxiliarIntesidadeForca = document.querySelector("#auxiliarIntesidadeForca");
    var auxiliarLocalizacaoViga = document.querySelector("#auxiliarLocalizacaoViga");

    var tituloInputCargasDistribuidas = document.querySelector("#tituloInputCargasDistribuidas");
    var auxiliarValorInicioCarga = document.querySelector("#auxiliarValorInicioCarga");
    var auxiliarValorFinalCarga = document.querySelector("#auxiliarValorFinalCarga");
    var auxiliarPosicaoInicioCarga = document.querySelector("#auxiliarPosicaoInicioCarga");
    var auxiliarPosicaoFinalCarga = document.querySelector("#auxiliarPosicaoFinalCarga");

    var tituloInputMomentos = document.querySelector("#tituloInputMomentos");
    var auxiliarValorMomento = document.querySelector("#auxiliarValorMomento");
    var auxiliarPosicaoMomento = document.querySelector("#auxiliarPosicaoMomento");
    var auxiliarPerifericos = document.querySelector("#auxiliarPerifericos");

    await CriaElementoEmLoop("h3", "tituloForcasPontuais", null, tituloInputForcasPontuais, "Forças Pontuais:");

    for (var i = 1; forcasValor > 0; i++) {
        //forcasLista.append(float(input('Insira a intensidade da força ')))
        var divAuxiliarIntesidadeForca = document.createElement("div");
        auxiliarIntesidadeForca.appendChild(divAuxiliarIntesidadeForca);
        divAuxiliarIntesidadeForca.className="item";
        
        await CriaElementoEmLoop("p", null, null, divAuxiliarIntesidadeForca, "Coloque o valor da Força " + i + " (kN):");

        var intensidadeForca = await CriaElementoEmLoop("input", "intensidadeForca", "text", divAuxiliarIntesidadeForca, null);
        var intensidadeForcaValue = intensidadeForca.value;
        var intensidadeForcaValor = ConverteVirgulaEmPonto(intensidadeForcaValue);
        forcasLista.push(intensidadeForcaValor);

        console.log(forcasLista);

        //posicaoLista.append(float(input('Localização da força na viga ')))

        var divAuxiliarLocalizacaoViga = document.createElement("div");
        auxiliarLocalizacaoViga.appendChild(divAuxiliarLocalizacaoViga);
        divAuxiliarLocalizacaoViga.className="item";

        await CriaElementoEmLoop("p", null, null, divAuxiliarLocalizacaoViga, "Coloque o valor da posição da Força " + i + " (m):");

        var localizacaoForcaNaViga = await CriaElementoEmLoop("input", "localizacaoForcaNaViga", "text", divAuxiliarLocalizacaoViga);
        var localizacaoForcaNaVigaValue = localizacaoForcaNaViga.value;
        var localizacaoForcaNaVigaValor = ConverteVirgulaEmPonto(localizacaoForcaNaVigaValue);
        posicaoLista.push(localizacaoForcaNaVigaValor);

        console.log(posicaoLista);

        forcasValor = forcasValor - 1;
    }

    //qforcalista = int(len(forcasLista))
    var qforcalista = forcasLista.length;


    while (qforcalista > 0) {
        var indiceforca = qforcalista - 1;
        var indiceposicaof = indiceforca;
        var f = forcasLista[indiceforca];
        var p = posicaoLista[indiceposicaof];
        var m = (f * (a1Valor - p));
        listaMomentos.push(m);
        qforcalista = qforcalista - 1;
    }
        
    //Parte de forças distribuidas

    await CriaElementoEmLoop("h3", "tituloCargasDistribuidas", null, tituloInputCargasDistribuidas, "Cargas Distribuídas:");

    for (var i = 1; cargasValor > 0; i++) {
        //listaCargas.append(float(input('Insira o valor de inicio da carga ')))
        var divAuxiliarValorInicioCarga = document.createElement("div");
        auxiliarValorInicioCarga.appendChild(divAuxiliarValorInicioCarga);
        divAuxiliarValorInicioCarga.className="item";
        
        await CriaElementoEmLoop("p", null, null, divAuxiliarValorInicioCarga, "Coloque o valor inicial da carga " + i + " (kNm):");

        var valorInicioCarga = await CriaElementoEmLoop("input", "inicioCarga", "text", divAuxiliarValorInicioCarga, null);
        var valorInicioCargaValue = valorInicioCarga.value;
        var valorInicioCargaValor = ConverteVirgulaEmPonto(valorInicioCargaValue);
        listaCargas.push(valorInicioCargaValor);

        //listaCargas.append(float(input('Insira o valor final da carga ')))
        var divAuxiliarValorFinalCarga = document.createElement("div");
        auxiliarValorFinalCarga.appendChild(divAuxiliarValorFinalCarga);
        divAuxiliarValorFinalCarga.className="item";

        await CriaElementoEmLoop("p", null, null, divAuxiliarValorFinalCarga, "Coloque o valor final da carga " + i + " (kNm):");

        var valorFinalCarga = await CriaElementoEmLoop("input", "finalCarga", "text", divAuxiliarValorFinalCarga, null);
        var valorFinalCargaValue = valorFinalCarga.value;
        var valorFinalCargaValor = ConverteVirgulaEmPonto(valorFinalCargaValue);
        listaCargas.push(valorFinalCargaValor);

        //listaPosicaoCargas.append(float(input('Insira a posição de inicio da carga ')))
        var divAuxiliarPosicaoInicialCarga = document.createElement("div");
        auxiliarPosicaoInicioCarga.appendChild(divAuxiliarPosicaoInicialCarga);
        divAuxiliarPosicaoInicialCarga.className="item";

        await CriaElementoEmLoop("p", null, null, divAuxiliarPosicaoInicialCarga, "Coloque a posição inicial da carga " + i + " (m):");

        var posicaoInicialCarga = await CriaElementoEmLoop("input", "posicaoInicialCarga", "text", divAuxiliarPosicaoInicialCarga, null);
        var posicaoInicialCargaValue = posicaoInicialCarga.value;
        var posicaoInicialCargaValor = ConverteVirgulaEmPonto(posicaoInicialCargaValue);
        listaPosicaoCargas.push(posicaoInicialCargaValor);

        //listaPosicaoCargas.append(float(input('Insira a posição final da carga ')))
        var divAuxiliarPosicaoFinalCarga = document.createElement("div");
        auxiliarPosicaoFinalCarga.appendChild(divAuxiliarPosicaoFinalCarga);
        divAuxiliarPosicaoFinalCarga.className="item";

        await CriaElementoEmLoop("p", null, null, divAuxiliarPosicaoFinalCarga, "Coloque a posição final da carga " + i + " (m):");

        var posicaoFinalCarga = await CriaElementoEmLoop("input", "posicaoFinalCarga", "text", divAuxiliarPosicaoFinalCarga, null);
        var posicaoFinalCargaValue = posicaoFinalCarga.value;
        var posicaoFinalCargaValor = ConverteVirgulaEmPonto(posicaoFinalCargaValue);
        listaPosicaoCargas.push(posicaoFinalCargaValor);

        cargasValor = cargasValor - 1;
    }
        
    //qcargas = int(len(listaCargas))
    var qcargas = listaCargas.length;
    console.log(qcargas);

    while (qcargas > 0) {
        var indicecarga = qcargas - 1;
        //cf = float(listaCargas[indicecarga])
        var cf = listaCargas[indicecarga];

        //pcf = float(listaPosicaoCargas[indicecarga])
        var pcf = listaPosicaoCargas[indicecarga];
        
        indicecarga = indicecarga - 1;
        
        //ci = float(listaCargas[indicecarga])
        var ci = listaCargas[indicecarga];
        
        //pci = float(listaPosicaoCargas[indicecarga])
        var pci = listaPosicaoCargas[indicecarga];

        if (cf == ci) {
            var pr = (pci + pcf) / 2;
            posicaoCargaResultante.push(pr);
            var cr = (ci * (pcf - pci));
            cargasResultante.push(cr);

            qcargas = qcargas - 2;
            break;
        }
            
        else if (cf == 0 || ci == 0) {
            if (cf == 0) {
                var pr = pci + ((pcf - pci) / 3);
                posicaoCargaResultante.push(pr);
                var cr = ((pcf - pci) * ci) / 2;
                cargasResultante.push(cr);
            } else {
                var pr = pci + ((2/3) * pcf - pci);
                posicaoCargaResultante.push(pr);
                var cr = ((pcf - pci) * cf) / 2;
                cargasResultante.push(cr);
            }

            qcargas = qcargas - 2;
            break;
        }
            
        else if (cf < ci && cf != 0) {
            var pr = (pci + pcf) / 2;
            posicaoCargaResultante.push(pr);
            var cr = cf * (pcf - pci);
            cargasResultante.push(cr);
            
            pr = pci + ((pcf - pci) / 3);
            posicaoCargaResultante.push(pr);
            cr = ((pcf - pci) * (ci - cf)) / 2;
            cargasResultante.push(cr);

            qcargas = qcargas - 2;
            break;
        }
            
        else {
            var pr = (pci + pcf) / 2;
            posicaoCargaResultante.push(pr);
            var cr = ci * (pcf - pci);
            cargasResultante.push(cr);
            
            pr = pci + ((2/3) * (pcf - pci));
            posicaoCargaResultante.push(pr);
            cr = ((pcf - pci) * (cf - ci) / 2);
            cargasResultante.push(cr);

            qcargas = qcargas - 2;
            break;
        }
    }
        
    //qcargasResultante = int(len(cargasResultante))
    var qcargasResultante = cargasResultante.length;
    console.log(posicaoCargaResultante);
    console.log(cargasResultante);

    while (qcargasResultante > 0) {
        var indiceCResultante = qcargasResultante - 1;
        var indicePResultante = indiceCResultante;
        console.log("IndicePReultante: " + indicePResultante);
        var fr = cargasResultante[indiceCResultante];
        console.log("Valor de fr:" + fr);
        var pr = posicaoCargaResultante[indicePResultante];
        console.log("Valor de pr: " + pr);
        var m = (fr * (a1Valor - pr));
        console.log("O valor de a1Valor: " + a1Valor);
        console.log("Valor de m:" + m);
        listaMomentos.push(m);
        qcargasResultante = qcargasResultante - 1;
    }
        
    await CriaElementoEmLoop("h3", "tituloMomentos", null, tituloInputMomentos, "Momentos: (obs: Sentido horário é para colocar o valor como NEGATIVO!)");

    for (var i = 1; momentosValor > 0; i++) {
        //m = float(input('Insira o valor do momento (horário NEGATIVO) '))
        var divAuxiliarValorMomento = document.createElement("div");
        auxiliarValorMomento.appendChild(divAuxiliarValorMomento);
        divAuxiliarValorMomento.className="item";
        
        await CriaElementoEmLoop("p", null, null, divAuxiliarValorMomento, "Coloque o valor do Momento " + i + " (kNm):");

        var valorMomento = await CriaElementoEmLoop("input", "valorMomento", "text", divAuxiliarValorMomento, null);
        var valorMomentoValue = valorMomento.value;
        var valorMomentoValor = ConverteVirgulaEmPonto(valorMomentoValue);
        listaMomentos.push(valorMomentoValor);
        listaEMomentos.push(valorMomentoValor);

        //pm = float(input('Insira a posição do momento na viga '))
        var divAuxiliarPosicaoMomento = document.createElement("div");
        auxiliarPosicaoMomento.appendChild(divAuxiliarPosicaoMomento);
        divAuxiliarPosicaoMomento.className="item";
        
        await CriaElementoEmLoop("p", null, null, divAuxiliarPosicaoMomento, "Coloque a posição do Momento " + i + " (m):");

        var posicaoMomento = await CriaElementoEmLoop("input", "posicaoMomento", "text", divAuxiliarPosicaoMomento, null);
        var posicaoMomentoValue = posicaoMomento.value;
        var posicaoMomentoValor = ConverteVirgulaEmPonto(posicaoMomentoValue);
        listaPosicaoMomentos.push(posicaoMomentoValor);
        listaEPosicaoMomentos.push(posicaoMomentoValor);

        momentosValor = momentosValor - 1;
    }
        
    //var somaMomento = sum(listaMomentos);
    console.log(listaMomentos);
    var somaMomento = listaMomentos.reduce((total, numero) => total + numero, 0);
    console.log(somaMomento);

    var somaForcaLista = forcasLista.reduce((total, numero) => total + numero, 0);
    var somaCargasResultante = cargasResultante.reduce((total, numero) => total + numero, 0);

    var somaForca = somaForcaLista + somaCargasResultante;
    var rby = - (somaMomento / (a2Valor - a1Valor));
    var ray = (somaForca - rby);

    //var str = 'o valor de ray é {0} e rby {1}'
    //print(str.format(ray,rby))

    var rayResposta = ray.toFixed(2).replace(".", ",");
    var rbyResposta = rby.toFixed(2).replace(".", ",");

    document.querySelector("#reacoesDeApoio").innerHTML = "Resposta: O valor de reação do apoio A é: " + rayResposta + " kN e o valor de reação do apoio B é: " + rbyResposta + " kN"

    listaPReacoes.push(a1Valor);
    listaPReacoes.push(a2Valor);
    listaFReacoes.push(-ray);
    listaFReacoes.push(-rby);

    /*for i in range(int(len(forcasLista))):
        tuplaF = (posicaoLista[i], forcasLista[i])
        resultados.append(tuplaF)*/
    for(var i = 0; i < forcasLista.length; i++) {
        var tuplaF = [posicaoLista[i], forcasLista[i]];
        resultados.push(tuplaF);
        console.log("Passei pela linha 361!!");
    }

    /*for i in range(int(len(listaPReacoes))):
        tuplaR = (listaPReacoes[i], listaFReacoes[i])
        resultados.append(tuplaR)*/
    for(var i = 0; i < listaPReacoes.length; i++) {
        var tuplaR = [listaPReacoes[i], listaFReacoes[i]];
        resultados.push(tuplaR);
        console.log("Passei pela linha 370!!");
    }

    /*for i in range(int(len(cargasResultante))):
        tuplaC = (posicaoCargaResultante[i], cargasResultante[i])
        resultados.append(tuplaC)*/
    for(var i = 0; i < cargasResultante.length; i++) {
        var tuplaC = [posicaoCargaResultante[i], cargasResultante[i]];
        resultados.push(tuplaC);
        console.log("Passei pela linha 379!!");
    }

    //var resultadosOrg = sorted(resultados);
    console.log(resultados);
    var resultadosOrg = resultados.sort(function(a, b) {
        return a - b;
    });
    console.log(resultadosOrg);

    var qcargas_final = cargasResultante.length;
    var indiceFCargas = 0;

    while (qcargas_final > 0) {
        var cI = listaCargas[indiceFCargas];
        var pCI = listaPosicaoCargas[indiceFCargas];
        indiceFCargas = indiceFCargas + 1;
        var cF = listaCargas[indiceFCargas];
        var pCF = listaPosicaoCargas[indiceFCargas];
        indiceFCargas = indiceFCargas + 1;
        var lista = [];
        var indiceLista = 0;
        
        while (pCI >= resultadosOrg[indiceLista][0]) {
            lista.push(resultadosOrg[indiceLista][1]);
            indiceLista = indiceLista + 1;
        }
            
        //var c = sum(lista);
        var c = lista.reduce((total, numero) => total + numero, 0);

        if (cI == cF) {
            var x = -c / cI;
            var m = (cI / 2) * (x ** 2) + c * x;
            var p = x + pCI;
            listaFMCargas.push(m);
            listaPMCargas.push(p);
        } else {
            x1 = cI + ((((-cI) * 2) + 4 * (cF - cI) * c) ** (1 / 2));
            x2 = cI - ((((-cI) * 2) + 4 * (cF - cI) * c) ** (1 / 2));
            
            if (x1 > pCI && x1 < pCF) {
                var m = (((cI - cF) / 3) * (x1 ** 3)) - ((cI / 2) * (x1 ** 2)) + c * x1;
                listaFMCargas.push(m);
                var p = x1 + pCI;
                listaPMCargas.push(p);
            }
                
            else if (x2 > pCI && x2 < pCF) {
                var m = (((cI - cF) / 3) * (x2 ** 3)) - ((cI / 2) * (x2 ** 2)) + c * x2;
                listaFMCargas.push(m);
                var p = x2 + pCI;
                listaPMCargas.push(p);
            }
        }
            
        qcargas_final = qcargas_final - 2;
    }
        
    var q = resultadosOrg.length - 1;
    var indice = 0;

    while (indice <= q) {
        var lista = [];
        if (indice == 0) {
            lista.push(0.0);
        } 
        else {
            var i = indice - 1;
            while (i >= 0) {
                var a = resultadosOrg[i][1] * (resultadosOrg[indice][0] - resultadosOrg[i][0]);
                lista.push(a);
                i = i - 1;
            }
        }
            
        //var somaLista = sum(lista);
        var somaListaAux = lista.reduce((total, numero) => total + numero, 0);

        resultadosFinais.push(somaListaAux);
        indice = indice + 1;
    }
                
    var qMomentosFinal = cargasResultante.length;
    var indiceResultante = 0;

    while (qMomentosFinal > 0) {
        var c = cargasResultante[indiceResultante];
        var p = posicaoCargaResultante[indiceResultante];
        var lista_final = [];
        var mf = listaFMCargas[indiceResultante];
        var pf = listaPMCargas[indiceResultante];
        lista_final.push(pf);
        lista_final.push(mf);

        var indiceResultados = resultadosOrg.indexOf([p, c]);
        var remove = resultadosOrg.indexOf([p, c]);
        resultadosOrg.pop([remove][0]);
        resultadosOrg.insertBefore([remove][0], (lista_final[indiceResultante], lista_final[indiceResultante + 1]));
        resultadosFinais.pop(remove);
        resultadosFinais.insert(remove, mf);
            
        qMomentosFinal = qMomentosFinal - 1;
        indiceResultante = indiceResultados + 2;
    }

    var qPosicoesFinais = resultadosOrg.length;
    var indicePosicoesFinais = 0;


    while (indicePosicoesFinais != qPosicoesFinais) {
        var p = resultadosOrg[indicePosicoesFinais][0];
        listaPosicoesFinais.push(p);
        indicePosicoesFinais = indicePosicoesFinais + 1;
    }
        
    var indiceMomentoFinal = 0;
    var indiceListaMomento = 0;
    var qMFinal = resultadosFinais.length;
    var qLMomento = listaEPosicaoMomentos.length;

    while (indiceListaMomento != qMFinal && qLMomento != 0) {
        if (listaEPosicaoMomentos[indiceMomentoFinal] <= listaPosicoesFinais[indiceListaMomento]) {
            while (indiceMomentoFinal != qLMomento) {
                var i = listaPosicoesFinais.index(listaPosicoesFinais[indiceListaMomento]);
                var momentoSomado = resultadosFinais[i] + listaEMomentos[indiceMomentoFinal];
                resultadosFinais[i] = momentoSomado;
                indiceMomentoFinal = indiceMomentoFinal+ 1;
                momentoSomado = 0;
            }
        }
            
        indiceMomentoFinal = 0
        indiceListaMomento = indiceListaMomento + 1
    }

    /*for i in range(int(len(resultadosFinais))):
        tuplaFinal = (resultadosFinais[i], listaPosicoesFinais[i])
        resultadosFinaisParaUsuario.append(tuplaFinal)*/
    for(var i = 0; i <= resultadosFinais.length; i++) {
        var tuplaFinal = (resultadosFinais[i], listaPosicoesFinais[i]);
        resultadosFinaisParaUsuario.push(tuplaFinal);
    }
        
    //var resultadoMomentoUsuario = resultadosFinaisParaUsuario;

    //var str2 = 'os valores dos momentos e suas respectivas posições na barra são {0}';
    //print(str2.format(resultadoMomentoUsuario));



    var momentoMax = max(resultadosFinaisParaUsuario);
    var momentoMin = min(resultadosFinaisParaUsuario);
    var mMaximo = momentoMax[0]
    var mMinimo = momentoMin[0]
    if (mMaximo < 0) {
        mMaximo = -mMaximo
    }
        
    if (mMinimo < 0) {
        mMinimo = -mMinimo
    }
        
    //var y = float(input('Insira a altura até o linha neutra da viga '))
    var divAuxiliarPerifericos = document.createElement("div");
    auxiliarPerifericos.appendChild(divAuxiliarPerifericos);
    divAuxiliarPerifericos.className="item";
    
    await CriaElementoEmLoop("p", null, null, divAuxiliarPerifericos, "Coloque a altura até a linha neutra da viga (m):");

    var y = await CriaElementoEmLoop("input", "alturaAteLinhaNeutra", "text", divAuxiliarPerifericos, null);
    var yValue = y.value;
    var yValor = ConverteVirgulaEmPonto(yValue);

    //var h = float(input('Insira a altura do perfil da viga '))
    var divAuxiliarPerifericos2 = document.createElement("div");
    auxiliarPerifericos.appendChild(divAuxiliarPerifericos2);
    divAuxiliarPerifericos2.className="item";
    
    await CriaElementoEmLoop("p", null, null, divAuxiliarPerifericos2, "Coloque a altura do perfil da viga (m):");

    var h = await CriaElementoEmLoop("input", "alturaPerfilViga", "text", divAuxiliarPerifericos2, null);
    var hValue = h.value;
    var hValor = ConverteVirgulaEmPonto(hValue);

    //var iZ = float(input('Insira o momento de inércia da estrutura '))
    var divAuxiliarPerifericos3 = document.createElement("div");
    auxiliarPerifericos.appendChild(divAuxiliarPerifericos3);
    divAuxiliarPerifericos3.className="item";
    
    await CriaElementoEmLoop("p", null, null, divAuxiliarPerifericos3, "Coloque o momento de inércia da estrutura (MPa):");

    var iZ = await CriaElementoEmLoop("input", "momentoInerciaEstrutura", "text", divAuxiliarPerifericos3, null);
    var iZValue = iZ.value;
    var iZValor = ConverteVirgulaEmPonto(iZValue);

    var tMax_10 = ((mMaximo * (hValor - yValor)) / iZValor) / 1000;
    var tMax_11 = ((mMaximo * (-yValor)) / iZValor) / 1000;
    var tMax_20 = ((mMinimo * (yValor)) / iZValor) / 1000;
    var tMax_21 = ((mMinimo * (hValor - yValor)) / iZValor) / 1000;

    //var RespostaStr3 = 'As tensões em Mz = {0} são iguais a {1} MPa para a parte de cima do perfil e {2} MPa para a parte de baixo \nEm Mz = {3} são iguais a {4} MPa para a parte de cima do perfil e {5} MPa para a parte de baixo';
    //print(str3.format(mMaximo, tMax_10, tMax_11, mMinimo, tMax_20, tMax_21));

    var mMaximoResposta = mMaximo.toFixed(2).replace(".", ",");
    var tMax_10Resposta = tMax_10.toFixed(2).replace(".", ",");
    var tMax_11Resposta = tMax_11.toFixed(2).replace(".", ",");
    var mMinimoResposta = mMinimo.toFixed(2).replace(".", ",");
    var tMax_20Resposta = tMax_20.toFixed(2).replace(".", ",");
    var tMax_21Resposta = tMax_21.toFixed(2).replace(".", ",");

    document.querySelector('#respostaTensaoMaximaFlexao').innerHTML = "Resultado: As tensões em Mz = " + mMaximoResposta + " são iguais a " + tMax_10Resposta + " MPa para a parte de cima do perfil e " + tMax_11Resposta + " MPa para a parte de baixo \nEm Mz = " + mMinimoResposta + " são iguais a " + tMax_20Resposta + " MPa para a parte de cima do perfil e " + tMax_21Resposta + " MPa para a parte de baixo";
}