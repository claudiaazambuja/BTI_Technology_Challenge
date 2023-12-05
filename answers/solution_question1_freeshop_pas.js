function calcularTrocoFreeshop(valorGasto, valorPago, taxaDolar) {
    let trocoReais = valorPago - valorGasto;
    let trocoDolares = trocoReais / taxaDolar;

    const notasMoedasDolares = [100, 50, 20, 10, 5, 1, 0.5, 0.25, 0.10, 0.05, 0.01];
    const resultado = {};

    notasMoedasDolares.forEach(notaMoedaDolar => {
        const qtdNotasMoedasDolares = Math.floor(trocoDolares / notaMoedaDolar);
        if (qtdNotasMoedasDolares > 0) {
            resultado[notaMoedaDolar] = qtdNotasMoedasDolares;
            trocoDolares = trocoDolares % notaMoedaDolar;
        }
    });

    return resultado;
}

// Exemplo de uso
const despesaReais = 37;
const pagamentoReais = 50;
const taxaDolar = 2.75; // Exemplo de taxa de câmbio
const trocoFreeshop = calcularTrocoFreeshop(despesaReais, pagamentoReais, taxaDolar);
console.log(trocoFreeshop);
