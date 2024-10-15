let valorResultado = "";
let operacao = "";
let primeiroValor = null;

function atualizarResultado() {
    document.querySelector('#resultado').value = valorResultado;
}

function limparResultado() {
    valorResultado = "";
    primeiroValor = null;
    operacao = "";
    
    atualizarResultado();
}

function adicionarValor(valor) {
    valorResultado += valor;
    atualizarResultado();
}

function escolherOperacao(op) {
    if (valorResultado == "") 
        return;
    
    if (op === 'raiz') {
        valorResultado = String(Number(valorResultado) ** 0.5);
    } 
    else if (op === 'quadrado') {
        valorResultado = String(Number(valorResultado) * Number(valorResultado));
    } 
    else {
        primeiroValor = valorResultado;
        valorResultado = "";
        operacao = op;
    }
    
    atualizarResultado();
}

function calcular() {
    let resultado;
    const valorAtual = Number(valorResultado);
    const valorAnterior = Number(primeiroValor);

    if (!primeiroValor || !valorResultado || !operacao)
        return;
    else if (operacao == '+') {
        resultado = valorAnterior + valorAtual;
    } 
    else if (operacao == '-') {
        resultado = valorAnterior - valorAtual;
    } 
    else if (operacao == '*') {
        resultado = valorAnterior * valorAtual;
    }
    else if (operacao == '/') {
        resultado = valorAnterior / valorAtual;
    }
    else if (operacao == '%') {
        resultado = valorAnterior % valorAtual;
    }
    
    valorResultado = String(resultado);
    primeiroValor = null;
    operacao = "";
    
    atualizarResultado();
}
