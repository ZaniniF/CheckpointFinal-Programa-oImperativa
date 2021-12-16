// Microdesafio 1 //

const consertos = require('./consertos');


// Microdesafio 2 //

const aparelhosProntos = consertos
    .filter((aparelho) => aparelho.pronto === true)
    .map((aparelho) => {
        return (`${aparelho.aparelho} está DISPONÍVEL`)
    }
    );

const aparelhosPendentes = consertos
    .filter((aparelho) => aparelho.pronto === false)
    .map((aparelho) => {
        return (`${aparelho.aparelho} está INDISPONÍVEL`)
    }
    );

// Microdesafio 3 //

let AparelhosProntosValores = [];

for (let i = 0; i < consertos.length; i++) {
    if (consertos[i].pronto) {
        let total = 0;
        for (let j = 0; j < consertos[i].valores.length; j++) {
            total = total + consertos[i].valores[j];
        }
        AparelhosProntosValores.push([`Olá cliente , o seu aparelho ${consertos[i].aparelho}, necessitou de  consertos em ${consertos[i].itensConsertados}, por esse motivo, o valor da sua fatura é de ${total.toFixed(2)}`]);
    }
};

