import * as auxiliar from './script';

async function CalculaTensaoMaxima() {
    //l = float(input('Comprimento da viga em mts '))
    var l = document.querySelector("#comprimentoViga");
    var lValue = l.value;
    var lValor = auxiliar.ConverteVirgulaEmPonto(lValue);

    //a1 = float(input('Posicionamento do primeiro apoio '))
    var a1 = document.querySelector("#posicionamentoPrimeiroApoio");
    var a1Value = a1.value;
    var a1Valor = auxiliar.ConverteVirgulaEmPonto(a1Value);

    //a2 = float(input('Posicionamento do segundo apoio '))
    var a2 = document.querySelector("#posicionamentoSegundoApoio");
    var a2Value = a2.value;
    var a2Valor = auxiliar.ConverteVirgulaEmPonto(a2Value);

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
        divAuxiliarIntesidadeForca.className="item"

        await auxiliar.CriaElementoEmLoop("p", null, null, divAuxiliarIntesidadeForca, "Coloque o valor da Força " + i + " (kN):");

        var intensidadeForca = await auxiliar.CriaElementoEmLoop("input", "intensidadeForca", "text", divAuxiliarIntesidadeForca, null);
        var intensidadeForcaValue = intensidadeForca.value;
        var intensidadeForcaValor = auxiliar.ConverteVirgulaEmPonto(intensidadeForcaValue);
        forcasLista.push(intensidadeForcaValor);

        console.log(forcasLista);

        //posicaoLista.append(float(input('Localização da força na viga ')))

        var divAuxiliarLocalizacaoViga = document.createElement("div");
        auxiliarLocalizacaoViga.appendChild(divAuxiliarLocalizacaoViga);
        divAuxiliarLocalizacaoViga.className="item"

        await CriaElementoEmLoop("p", null, null, divAuxiliarLocalizacaoViga, "Coloque o valor da posição da Força " + i + " (m):");

        var localizacaoForcaNaViga = await auxiliar.CriaElementoEmLoop("input", "localizacaoForcaNaViga", "text", divAuxiliarLocalizacaoViga);
        var localizacaoForcaNaVigaValue = localizacaoForcaNaViga.value;
        var localizacaoForcaNaVigaValor = auxiliar.ConverteVirgulaEmPonto(localizacaoForcaNaVigaValue);
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
        var valorInicioCargaValor = auxiliar.ConverteVirgulaEmPonto(valorInicioCargaValue);
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