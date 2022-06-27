function somar () {
    let n1 = document.getElementById("numero-1");
    let n2 = document.getElementById("numero-2");
    let n1Formatado = parseInt(n1.value);
    let n2Formatado = parseInt(n2.value);
    let res = document.getElementById("resultado");
    let soma = n1Formatado + n2Formatado;

    if (n1.value === "" || n2.value === "") {
        alert("Campo vazio detectado, insira um número para realizar o cálculo!");
    } else {
        res.innerHTML = "O resultado é " + soma + ".";       
    }
}

function subtrair () {
    let n1 = document.getElementById("numero-1");
    let n2 = document.getElementById("numero-2");
    let n1Formatado = parseInt(n1.value);
    let n2Formatado = parseInt(n2.value);
    let res = document.getElementById("resultado");
    let sub = n1Formatado - n2Formatado;

    if (n1.value === "" || n2.value === "") {
        alert("Campo vazio detectado, insira um número para realizar o cálculo!");
    } else {
        res.innerHTML = "O resultado é " + sub + ".";       
    }
}

function dividir () {
    let n1 = document.getElementById("numero-1");
    let n2 = document.getElementById("numero-2");
    let n1Formatado = parseInt(n1.value);
    let n2Formatado = parseInt(n2.value);
    let res = document.getElementById("resultado");
    let div = n1Formatado / n2Formatado;

    if (n1.value === "" || n2.value === "") {
        alert("Campo vazio detectado, insira um número para realizar o cálculo!");
    } else {
        res.innerHTML = "O resultado é " + div + ".";       
    }
}

function multiplicar () {
    let n1 = document.getElementById("numero-1");
    let n2 = document.getElementById("numero-2");
    let n1Formatado = parseInt(n1.value);
    let n2Formatado = parseInt(n2.value);
    let res = document.getElementById("resultado");
    let mul = n1Formatado * n2Formatado;

    if (n1.value === "" || n2.value === "") {
        alert("Campo vazio detectado, insira um número para realizar o cálculo!");
    } else {
        res.innerHTML = "O resultado é " + mul + ".";    
    }
}
