'use strict' 
 
const botaoTrocarCor = document.getElementById('botaoImg')

function trocarCor(){
    const cor = document.getElementById('fundo').value
console.log(cor)
document.documentElement.style.setProperty('--bg-color', cor)
}
botaoTrocarCor.addEventListener("click", trocarCor);