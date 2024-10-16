let valorResultado = "";  // Armazena o valor exibido no resultado da calculadora
let operacao = "";        // Armazena a operação matemática selecionada (como +, -, *, /)
let primeiroValor = null; // Armazena o primeiro valor inserido 

// Função para atualizar o valor exibido no resultado
function atualizarResultado() {
    document.querySelector('#resultado').value = valorResultado; // o .value extrai o valor 
}

// Função para limpar o resultado e resetar os valores
function limparResultado() {
    valorResultado = "";       // Limpa o valor exibido
    primeiroValor = null;      // Limpa o primeiro valor
    operacao = "";             // Limpa o "valor" da operação atual, ex: se é + ele deixa sem operação.
    
    atualizarResultado();      // puxa a função atualizarResultado.
}

// Função para adicionar o valor atual, no valor atual do resultado.
function adicionarValor(valor) {
    valorResultado = valorResultado + valor;   // Adiciona o valor no final do resultado mostrado no momento
    
    atualizarResultado();      // Atualiza o resultado mostrado na tela puxando a função atualizarResultado().
}

// Função para selecionar a operação
function escolherOperacao(op) {
    if (valorResultado == "") // ele verifica se tem alguma coisa escrita, se não tiver, ele zera o número mostrado na tela, não faz nada e reicinia a "operação".
        return;
    
    // Se a operação for raiz quadrada, realiza a operação diretamente
    if (op === 'raiz') {
        valorResultado = String(Number(valorResultado) ** 0.5);  // Calcula a raiz quadrada elevando o numero em 0.5
    } 
    // Se a operação for quadrado, calcula o quadrado do número
    else if (op === 'quadrado') {
        valorResultado = String(Number(valorResultado) * Number(valorResultado));  
    } 
    // Caso contrário, armazena o primeiro valor e a operação
    else {
        primeiroValor = valorResultado;  // Armazena o valor atual como primeiro valor
        valorResultado = "";             // Limpa o resultado na tela
        operacao = op;                   // Define a operação escolhida
    }
    
    atualizarResultado();  // Atualiza o resultado na tela puxando a função.
}

// Função para realizar o cálculo com base na operação escolhida
function calcular() {
    let resultado;               // Armazena o resultado da operação
    const valorAtual = Number(valorResultado);    // Converte o valor atual para número
    const valorAnterior = Number(primeiroValor);  // Converte o primeiro valor para número

    // Se não tiver de acordo com alguma das variaveis, ele não faz nada, só reicinia a "operação".
    if (!primeiroValor || !valorResultado || !operacao)
        return;

    if (operacao == '+') {
        resultado = valorAnterior + valorAtual;  // Soma
    } 
    else if (operacao == '-') {
        resultado = valorAnterior - valorAtual;  // Subtração
    } 
    else if (operacao == '*') {
        resultado = valorAnterior * valorAtual;  // Multiplicação
    }
    else if (operacao == '/') {
        resultado = valorAnterior / valorAtual;  // Divisão
    }
    else if (operacao == '%') {
        resultado = valorAnterior % valorAtual;  // Módulo
    }
    
    valorResultado = String(resultado);
    primeiroValor = null;  // Limpa o primeiro valor
    operacao = "";         // Limpa a operação
    
    atualizarResultado();  // Atualiza o resultado final com a função.
}
