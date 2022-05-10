

function CalculaTensaoNormal() {
    var forca = document.querySelector("#forca");
    var diametro = document.querySelector("#diametro");

    var forcaValor = forca.value;
    var diametroValor = diametro.value; 
    
    var raio = diametroValor / 2;
    var area = Math.PI * (raio * raio);

    var tensao = forcaValor / area;

    document.writeln(tensao);
}

//var btn = document.getElementById("btnCalcula");

//btn.addEventListener("click", exibirMensagem)