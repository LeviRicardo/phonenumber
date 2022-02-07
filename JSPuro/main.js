function enviar() {
    document.getElementsByClassName("numero")[0].innerHTML = "00000000000"
}

function advanced() {
    const elemento = document.getElementsByClassName("advbtn")[0]
    elemento.classList.toggle("esconder")
}

function triple() {
    const valor = Number(document.getElementsByClassName("numero")[0].innerHTML)*3
    const comprimento = (Math.floor(valor)).toString().length
    document.getElementsByClassName("numero")[0].innerHTML = "0".repeat(comprimento>11 ? 0:11-comprimento)+valor
}

function maisSete() {
    const valor = Number(document.getElementsByClassName("numero")[0].innerHTML)+7
    const comprimento = (Math.floor(valor)).toString().length
    document.getElementsByClassName("numero")[0].innerHTML = "0".repeat(comprimento>11 ? 0:11-comprimento)+valor
}

function barraCinco() {
    const valor = Number(document.getElementsByClassName("numero")[0].innerHTML)/5
    const comprimento = (Math.floor(valor)).toString().length
    document.getElementsByClassName("numero")[0].innerHTML = "0".repeat(comprimento>11 ? 0:11-comprimento)+valor
}

function menosDois() {
    const valor = Number(document.getElementsByClassName("numero")[0].innerHTML)-2
    const comprimento = (Math.floor(valor)).toString().length
    document.getElementsByClassName("numero")[0].innerHTML = "0".repeat(comprimento>11 ? 0:11-comprimento)+valor
}

function arredBaixo() {
    const valor = Math.floor(Number(document.getElementsByClassName("numero")[0].innerHTML))
    const comprimento = (Math.floor(valor)).toString().length
    document.getElementsByClassName("numero")[0].innerHTML = "0".repeat(comprimento>11 ? 0:11-comprimento)+valor
}

function sqrt() {
    const valor = (Number(document.getElementsByClassName("numero")[0].innerHTML))**0.5
    const comprimento = (Math.floor(valor)).toString().length
    document.getElementsByClassName("numero")[0].innerHTML = "0".repeat(comprimento>11 ? 0:11-comprimento)+valor
}

function quadrado() {
    const valor = Number(document.getElementsByClassName("numero")[0].innerHTML)**2
    const comprimento = (Math.floor(valor)).toString().length
    document.getElementsByClassName("numero")[0].innerHTML = "0".repeat(comprimento>11 ? 0:11-comprimento)+valor
}

function logDez() {
    const valor = Math.log10(Number(document.getElementsByClassName("numero")[0].innerHTML))
    const comprimento = (Math.floor(valor)).toString().length
    document.getElementsByClassName("numero")[0].innerHTML = "0".repeat(comprimento>11 ? 0:11-comprimento)+valor
}

