function calcularTrocoFreeshop(valorGasto, valorPago, taxaDolar) {
    let trocoReais = valorPago - valorGasto;
    let trocoDolares = trocoReais / taxaDolar;

    const notasDolares = [100, 50, 20, 10, 5, 1];
    const resultado = {};

    notasDolares.forEach(notaDolar => {
        const qtdNotasDolares = Math.floor(trocoDolares / notaDolar);
        if (qtdNotasDolares > 0) {
            resultado[notaDolar] = qtdNotasDolares;
            trocoDolares = trocoDolares % notaDolar;
        }
    });

    return resultado;
}

const despesaReais = 37;
const pagamentoReais = 50;
const taxaDolar = 5.30; 
const trocoFreeshop = calcularTrocoFreeshop(despesaReais, pagamentoReais, taxaDolar);
console.log(trocoFreeshop);
