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

function CalculaTensaoCisalhamento() {
    var forcaCisalhante = document.querySelector("#forcaCisalhante");
    var quantidadeAreasCisalhadas = document.querySelector("#quantidadeAreasCisalhadas");
    var areaCisalhada = document.querySelector("#areaCisalhada");

    var forcaCisalhanteValue = forcaCisalhante.value;
    var quantidadeAreasCisalhadasValue = quantidadeAreasCisalhadas.value;
    var areaCisalhadaValue = areaCisalhada.value;

    var forcaCisalhanteValor = ConverteVirgulaEmPonto(forcaCisalhanteValue);
    var quantidadeAreasCisalhadasValor = ConverteVirgulaEmPonto(quantidadeAreasCisalhadasValue);
    var areaCisalhadaValor = ConverteVirgulaEmPonto(areaCisalhadaValue);

    var tensaoCisalhamento = (forcaCisalhanteValor / ( quantidadeAreasCisalhadasValor * areaCisalhadaValor )) / 1000;

    var respostaTensaoCisalhamento = tensaoCisalhamento.toFixed(2).replace(".", ",");

    document.querySelector('#respostaTensaoCisalhamento').innerHTML = "O valor da Tensão de Cisalhamento é: " + respostaTensaoCisalhamento + " MPa.";
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

    if(tipoElemento == "p") {
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

    var auxiliarIntesidadeForca = document.querySelector("#auxiliarIntesidadeForca");
    var auxiliarLocalizacaoViga = document.querySelector("#auxiliarLocalizacaoViga");

    for (var i = 1; forcasValor > 0; i++) {
        //forcasLista.append(float(input('Insira a intensidade da força ')))

        var divAuxiliarIntesidadeForca = document.createElement("div");
        auxiliarIntesidadeForca.appendChild(divAuxiliarIntesidadeForca);

        CriaElementoEmLoop("p", null, null, divAuxiliarIntesidadeForca, "Coloque o valor da Força " + i + " (kN):");

        var intensidadeForca = await CriaElementoEmLoop("input", "intensidadeForca", "text", divAuxiliarIntesidadeForca, null);
        var intensidadeForcaValue = intensidadeForca.value;
        var intensidadeForcaValor = ConverteVirgulaEmPonto(intensidadeForcaValue);
        forcasLista.push(intensidadeForcaValor);

        console.log(forcasLista);

        //posicaoLista.append(float(input('Localização da força na viga ')))

        var divAuxiliarLocalizacaoViga = document.createElement("div");
        auxiliarLocalizacaoViga.appendChild(divAuxiliarLocalizacaoViga);

        CriaElementoEmLoop("p", null, null, divAuxiliarLocalizacaoViga, "Coloque o valor da posição da força " + i + " (m):");

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
        var m = (f * (a1 - p));
        listaMomentos.append(m);
        qforcalista = qforcalista - 1;
    }
        
    //Parte de forças distribuidas

    while (cargasValor > 0) {
        //listaCargas.append(float(input('Insira o valor de inicio da carga ')))
        var valorInicioCarga = document.querySelector("#valorInicioCarga");
        var valorInicioCargaValue = valorInicioCarga.value;
        var valorInicioCargaValor = ConverteVirgulaEmPonto(valorInicioCargaValue);
        listaCargas.append(valorInicioCargaValor);

        //listaCargas.append(float(input('Insira o valor final da carga ')))

        listaCargas.append();

        //listaPosicaoCargas.append(float(input('Insira a posição de inicio da carga ')))


        //listaPosicaoCargas.append(float(input('Insira a posição final da carga ')))


        cargasValor = cargasValor - 1;
    }
        
    //qcargas = int(len(listaCargas))
/*    var qcargas = listaCargas.length();

    while (qcargas > 0) {
        var indicecarga = qcargas - 1;
        //cf = float(listaCargas[indicecarga])
        var cf = 

        //pcf = float(listaPosicaoCargas[indicecarga])
        var pcf = 
        
        indicecarga = indicecarga - 1;
        
        //ci = float(listaCargas[indicecarga])
        var ci = 
        
        //pci = float(listaPosicaoCargas[indicecarga])
        var pci = 

        if cf == ci:
            pr = (float(pci) + float(pcf)) / 2
            posicaoCargaResultante.append(pr)
            cr = (float(ci)*(float(pcf) - float(pci)))
            cargasResultante.append(cr)
            
        elif cf == 0 or ci == 0:
            if cf == 0:
                pr = float(pci) + ((float(pcf) - float(pci)) / 3)
                posicaoCargaResultante.append(pr)
                cr = ((float(pcf) - float(pci)) * float(ci)) / 2
                cargasResultante.append(cr)
                
            else:
                pr = pci + ((2/3) * float(pcf) - float(pci))
                posicaoCargaResultante.append(pr)
                cr = ((float(pcf) - float(pci)) * float(cf)) / 2
                cargasResultante.append(cr)
            
        elif cf < ci and cf != 0:
            pr = (float(pci) + float(pcf)) / 2
            posicaoCargaResultante.append(pr)
            cr = float(cf) * (float(pcf) - float(pci))
            cargasResultante.append(cr)
            
            pr = float(pci) + ((float(pcf) - float(pci)) / 3)
            posicaoCargaResultante.append(pr)
            cr = ((float(pcf) - float(pci)) * (float(ci) - float(cf))) / 2
            cargasResultante.append(cr)
            
        else:
            pr = (float(pci) + float(pcf)) / 2
            posicaoCargaResultante.append(pr)
            cr = float(ci) * (float(pcf) - float(pci))
            cargasResultante.append(cr)
            
            pr = float(pci) + ((2/3) * (float(pcf) - float(pci)))
            posicaoCargaResultante.append(pr)
            cr = ((float(pcf) - float(pci)) * (float(cf) - float(ci)) / 2)
            cargasResultante.append(cr)
            
        qcargas = int(qcargas) - 2
    }
        
    qcargasResultante = int(len(cargasResultante))    
        
    while (qcargasResultante > 0):
        indiceCResultante = int(qcargasResultante) - 1
        indicePResultante = indiceCResultante
        fr = cargasResultante[indiceCResultante]
        pr = posicaoCargaResultante[indicePResultante]
        m = (float(fr)*(float(a1) - float(pr)))
        listaMomentos.append(m)
        qcargasResultante = int(qcargasResultante) - 1
        
    while (int(momentos) > 0):
        m = float(input('Insira o valor do momento (horário NEGATIVO) '))
        listaMomentos.append(m)
        listaEMomentos.append(m)
        pm = float(input('Insira a posição do momento na viga '))
        listaPosicaoMomentos.append(pm)
        listaEPosicaoMomentos.append(pm)
        momentos = momentos - 1
        
    somaMomento = sum(listaMomentos)
    somaForca = sum(forcasLista) + sum(cargasResultante)
    rby = - (somaMomento/(float(a2)-float(a1)))
    ray = (somaForca - float(rby))

    str = 'o valor de ray é {0} e rby {1}'
    print(str.format(ray,rby))

    listaPReacoes.append(a1)
    listaPReacoes.append(a2)
    listaFReacoes.append(-ray)
    listaFReacoes.append(-rby)

    for i in range(int(len(forcasLista))):
        tuplaF = (posicaoLista[i], forcasLista[i])
        resultados.append(tuplaF)

    for i in range(int(len(listaPReacoes))):
        tuplaR = (listaPReacoes[i], listaFReacoes[i])
        resultados.append(tuplaR)
        
    for i in range(int(len(cargasResultante))):
        tuplaC = (posicaoCargaResultante[i], cargasResultante[i])
        resultados.append(tuplaC)

    resultadosOrg = sorted(resultados)

    qcargas_final = int(len(cargasResultante))
    indiceFCargas = 0

    while qcargas_final > 0:
        cI = listaCargas[indiceFCargas]
        pCI = listaPosicaoCargas[indiceFCargas]
        indiceFCargas = indiceFCargas + 1
        cF = listaCargas[indiceFCargas]
        pCF = listaPosicaoCargas[indiceFCargas]
        indiceFCargas = indiceFCargas + 1
        lista = []
        indiceLista = 0
        
        while pCI >= resultadosOrg[indiceLista][0]:
            lista.append(resultadosOrg[indiceLista][1])
            indiceLista = indiceLista + 1
            
        c = sum(lista)
        
        if cI == cF:
            x = -c / cI
            m = (cI/2)*(x**2) + c*x
            p = x + pCI
            listaFMCargas.append(m)
            listaPMCargas.append(p)
        else:
            x1 = cI + ((((-cI)*2) + 4 * (cF - cI) * c)**(1/2))
            x2 = cI - ((((-cI)*2) + 4 * (cF - cI) * c)**(1/2))
            
            if x1 > pCI and x1 < pCF:
                m = (((cI - cF)/3)*(x1**3)) - ((cI/2)*(x1**2)) + c*x1
                listaFMCargas.append(m)
                p = x1 + pCI
                listaPMCargas.append(p)
            elif x2 > pCI and x2 < pCF:
                m = (((cI - cF)/3)*(x2**3)) - ((cI/2)*(x2**2)) + c*x2
                listaFMCargas.append(m)
                p = x2 + pCI
                listaPMCargas.append(p)
        qcargas_final = qcargas_final - 2
        
    q = int(len(resultadosOrg)) - 1
    indice = 0
    while indice <= q:
        lista = []
        if indice == 0:
            lista.append(0.0)
        else:
            i = indice - 1
            while i >= 0:
                a = float(resultadosOrg[i][1]) * (float(resultadosOrg[indice][0]) - float(resultadosOrg[i][0]))
                lista.append(a)
                i = i - 1
        resultadosFinais.append(sum(lista))        
        indice = indice + 1
                
    qMomentosFinal = int(len(cargasResultante))
    indiceResultante = 0

    while qMomentosFinal > 0:
        c = cargasResultante[indiceResultante]
        p = posicaoCargaResultante[indiceResultante]
        lista_final = []
        mf = listaFMCargas[indiceResultante]
        pf = listaPMCargas[indiceResultante]
        lista_final.append(pf)
        lista_final.append(mf)
        indiceResultados = resultadosOrg.index((p, c))
        remove = resultadosOrg.index((p, c))
        resultadosOrg.pop([remove][0])
        resultadosOrg.insert([remove][0], (lista_final[indiceResultante], lista_final[indiceResultante + 1]))
        resultadosFinais.pop(remove)
        resultadosFinais.insert(remove, mf)
            
        qMomentosFinal = qMomentosFinal - 1
        indiceResultante = indiceResultados + 2

    qPosicoesFinais = int(len(resultadosOrg))
    indicePosicoesFinais = 0


    while indicePosicoesFinais != qPosicoesFinais:
        p = resultadosOrg[indicePosicoesFinais][0]
        listaPosicoesFinais.append(p)
        indicePosicoesFinais = indicePosicoesFinais + 1
        
    indiceMomentoFinal = 0
    indiceListaMomento = 0
    qMFinal = int(len(resultadosFinais))
    qLMomento = int(len(listaEPosicaoMomentos))
    

    while indiceListaMomento != qMFinal and qLMomento != 0:
        if listaEPosicaoMomentos[indiceMomentoFinal] <= listaPosicoesFinais[indiceListaMomento]:
            while indiceMomentoFinal != qLMomento:
                i = listaPosicoesFinais.index(listaPosicoesFinais[indiceListaMomento])
                momentoSomado = resultadosFinais[i] + listaEMomentos[indiceMomentoFinal]
                resultadosFinais[i] = momentoSomado
                indiceMomentoFinal = indiceMomentoFinal+ 1
                momentoSomado = 0
        indiceMomentoFinal = 0
        indiceListaMomento = indiceListaMomento + 1


    for i in range(int(len(resultadosFinais))):
        tuplaFinal = (resultadosFinais[i], listaPosicoesFinais[i])
        resultadosFinaisParaUsuario.append(tuplaFinal)
        
    resultadoMomentoUsuario = resultadosFinaisParaUsuario
    str = 'os valores dos momentos e suas respectivas posições na barra são {0}'
    print(str.format(resultadoMomentoUsuario))

    momentoMax = max(resultadosFinaisParaUsuario)
    momentoMin = min(resultadosFinaisParaUsuario)
    mMaximo = momentoMax[0]
    mMinimo = momentoMin[0]
    if mMaximo < 0:
        mMaximo = -mMaximo
        
    if mMinimo < 0:
        mMinimo = -mMinimo
        
    y = float(input('Insira a altura até o linha neutra da viga '))
    h = float(input('Insira a altura do perfil da viga '))
    iZ = float(input('Insira o momento de inércia da estrutura '))

    tMax_10 = ((mMaximo * (h - y)) / iZ) / 1000
    tMax_11 = ((mMaximo * (-y)) / iZ) / 1000
    tMax_20 = ((mMinimo * (y)) / iZ) / 1000
    tMax_21 = ((mMinimo * (h - y)) / iZ) / 1000

    str = 'As tensões em Mz = {0} são iguais a {1} MPa para a parte de cima do perfil e {2} MPa para a parte de baixo \nEm Mz = {3} são iguais a {4} MPa para a parte de cima do perfil e {5} MPa para a parte de baixo'
    print(str.format(mMaximo, tMax_10, tMax_11, mMinimo, tMax_20, tMax_21)) */
}