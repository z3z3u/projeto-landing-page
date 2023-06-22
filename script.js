var setaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leo")
var Samanta = window.document.getElementById("sam")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function rolardireita(){
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style="display:none"
    setaEsquerda.style="display:flex; margin-top:120%"
}

function rolaresquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top:120%"
    setaEsquerda.style = "display:none"
}