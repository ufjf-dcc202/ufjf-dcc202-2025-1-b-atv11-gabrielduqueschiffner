//main.js

import { getLista } from "./lista";

const o1Itens = document.querySelector ("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("adicionar")
const btnLimpar = document.querySelector("#limpar");

atualizarLista();

function atualizarLista(){
    o1Itens.innerHTML = "";
    let lista = getLista();
    for(let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        o1Itens.appendChild(li);
    }
}
