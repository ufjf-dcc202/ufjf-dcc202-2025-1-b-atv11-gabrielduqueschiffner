//main.js

import { getLista, limpaLista, adicionaLista } from "./lista.js";

const o1Itens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar")
const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener('click', limparItensDeLista);
btnAdicionar.addEventListener('click', adicionarItemNaLista);

atualizarLista();

function atualizarLista() {
    o1Itens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        o1Itens.appendChild(li);
    }
}

function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}


function adicionarItemNaLista() {
    const textoUsuario = pEntrada.textContent.trim();

    if (!textoUsuario) return;

    adicionaLista(textoUsuario);
    atualizarLista();
}