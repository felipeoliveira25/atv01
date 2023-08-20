

var valorDigitado = Number(window.prompt("Digite um número: "));



function verificarEntrada(valorDigitado) {
    if (typeof valorDigitado === 'number') {
    if (valorDigitado % 2 === 0) {
    alert('A entrada é um número par.');
    } else {
    alert('A entrada é um número ímpar.');
    }
    } else if (typeof valorDigitado === 'string') {
    alert('A entrada é uma string.');
    } else {
    alert('A entrada não é um número nem uma string.');
    }
    }
    
    
    // Testando a função
      verificarEntrada(valorDigitado); // A entrada é um número par.
    //  verificarEntrada(7); // A entrada é um número ímpar.
    //  verificarEntrada('texto'); // A entrada é uma string.