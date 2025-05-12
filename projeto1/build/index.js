"use strict";
//pegando as referências
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btnSoma = document.querySelector('#btnsomar');
const btnSubtrair = document.querySelector('#btnsub');
const btnLimpar = document.querySelector('#btnlimpar');
//criando o elemento p dinamicamente
const resparagrafo = document.createElement('p');
resparagrafo.id = 'resultado';
resparagrafo.style.marginTop = '20px';
resparagrafo.style.fontSize = '24px';
//adiciona o p no final do body
document.body.appendChild(resparagrafo);
function opercao({ tipo, a, b }) {
    if (tipo === "Soma") {
        return a + b;
    }
    else {
        return a - b;
    }
}
btnSoma.addEventListener('click', function () {
    const res = opercao({
        tipo: "Soma",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    resparagrafo.textContent = `Resultado da soma: ${res}`;
});
btnSubtrair.addEventListener('click', function () {
    const res = opercao({
        tipo: "Subtrair",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    resparagrafo.textContent = `Resultado da subtração: ${res}`;
});
btnLimpar.addEventListener('click', function () {
    input1.value = '';
    input2.value = '';
    resparagrafo.textContent = '';
});
