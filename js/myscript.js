

// Orçamento
function gebi(id){
    return document.getElementById(id)
}

 function recuperar() {
    document.getElementById('total_inscritos').value;
    // Verifica se o localStorage possui o item com a chave "total_inscritos"
       if (localStorage.getItem("total_inscritos")) {
        // Recupera o valor associado à chave "total_inscritos"
        var totalInscritos = localStorage.getItem("total_inscritos");
        // Converte o valor para o tipo numérico, se necessário
        totalInscritos = parseInt(totalInscritos, 10); // 10 é a base decimal
        document.getElementById('total_inscritos').value = totalInscritos
        alert(totalInscritos)
    }
}

// Para começar o valor de inscritos como 0 
function salvar() {
    if (!localStorage.getItem('total_inscritos')) {
        localStorage.setItem('total_inscritos', "0");
    }

   var totalInscritos = localStorage.getItem('total_inscritos')
   totalInscritos = parseInt(totalInscritos, 10) + 1;
   localStorage.setItem('total_inscritos', totalInscritos)
    }


function multiplicar() {
    let inscritos = parseInt(gebi("total_inscritos").value);
    let valorN1 = parseInt(gebi("n1").value);
    let valorN2 = parseInt(gebi("n2").value)
    let valorN3 = parseInt(gebi("n3").value);
    let valorN4 = parseInt(gebi("n4").value)
    let valorN5 = parseInt(gebi("n5").value);
    let valorN6 = parseInt(gebi("n6").value)
    let valorN7 = parseInt(gebi("n7").value);
    let valorN8 = parseInt(gebi("n8").value)
    let valorN9 = parseInt(gebi("n9").value);
    let valorN10 = parseInt(gebi("n10").value)
    let valorN11 = parseInt(gebi("n11").value);
    let valorN12 = parseInt(gebi("n12").value)
    let resultado1 = valorN1 * valorN2 * inscritos
    let resultado2 = valorN3 * valorN4 * inscritos
    let resultado3 = valorN5 * valorN6 * inscritos
    let resultado4 = valorN7 * valorN8 * inscritos
    let resultado5 = valorN9 * valorN10 * inscritos
    let resultado6 = valorN11 * valorN12 * inscritos
    gebi("resultado1").value = resultado1
    gebi("resultado2").value = resultado2
    gebi("resultado3").value = resultado3
    gebi("resultado4").value = resultado4
    gebi("resultado5").value = resultado5
    gebi("resultado6").value = resultado6
}

function soma(){
    let valorc1 = parseInt(gebi("resultado1").value)
    let valorc2 = parseInt(gebi("resultado2").value)
    let valorc3 = parseInt(gebi("resultado3").value)
    totalalimentos = valorc1 + valorc2 + valorc3
    gebi("totalalimentos").value = totalalimentos
}

function somadivulgacao(){
    let valord1 = parseInt(gebi("resultado4").value)
    let valord2 = parseInt(gebi("resultado5").value)
    let valord3 = parseInt(gebi("resultado6").value)
    totaldivulgacao = valord1 + valord2 + valord3
    gebi("totaldivulgacao").value = totaldivulgacao
}

function somatotal(){
    let valor1 = parseInt(gebi("totalalimentos").value);
    let valor2 = parseInt(gebi("totaldivulgacao").value);
    somatotal = valor1 + valor2  
    gebi("somatotal").value = ("R$ " + somatotal)
}

function montartexto(){
    let totalsoma = gebi("somatotal").value
    gebi("texto").value = ("O total de itens em reais vendidos no evento foi de " + totalsoma + " - Isadora Toldo, Karolina Peres e Naiara dos Santos")
}



