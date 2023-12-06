function calcularTrocoFreeshop(valorGasto, valorPago, taxaDolar) {
    let trocoReais = valorPago - valorGasto;
    let trocoDolares = trocoReais / taxaDolar;

    const notasMoedasDolares = [100, 50, 20, 10, 5, 1, 0.5, 0.25, 0.10, 0.05, 0.01];
    const resultado = [];

    notasMoedasDolares.forEach(notaMoedaDolar => {
        const qtdNotasMoedasDolares = Math.floor(trocoDolares / notaMoedaDolar);
        if (qtdNotasMoedasDolares > 0) {
            const tipo = notaMoedaDolar > 1 ? "nota" : "moeda";
            resultado.push(`${qtdNotasMoedasDolares} ${tipo}(s) de ${notaMoedaDolar}`);
            trocoDolares = trocoDolares % notaMoedaDolar;
        }
    });

    return resultado;
}

// Exemplo para o teste
const despesaReais = 80;
const pagamentoReais = 120;
const taxaDolar = 4.93; // Taxa de câmbio do dia 5/12
const trocoFreeshop = calcularTrocoFreeshop(despesaReais, pagamentoReais, taxaDolar);
console.log("Resultado algoritmo:", trocoFreeshop);