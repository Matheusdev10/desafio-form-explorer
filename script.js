function pegarNome (name){
    const nome = document.getElementById("first-name")
    const mudarValor = nome.value=name
    return mudarValor
}
pegarNome("camaleao")

function pegarSobrenome (sobrenome){
    const nome = document.getElementById("last-name")
    const mudarValor = nome.value=sobrenome
    return mudarValor
}
pegarSobrenome("dourado")

function pegarEmail (email){
    const nome = document.getElementById("email")
    const mudarValor = nome.value=email
    return mudarValor
}
pegarEmail("camaleao@gmail.com")

function pegarSenha (password){
    const nome = document.getElementById("password")
    const mudarValor = nome.value=password
    return mudarValor
}
pegarSenha("camaleao1726162")

function pegarNomeMentor (mentor){
    const nome = document.getElementById("mentor")
    const mudarValor = nome.value=mentor
    return mudarValor
}
pegarNomeMentor("guepardo")


function timeStart(time){
    const nome = document.getElementById("first-time-start")
    const mudarValor = nome.value = time
    return mudarValor
}
timeStart("10:00")

function timeEnd(time){
    const nome = document.getElementById("first-time-out")
    const mudarValor = nome.value = time
    return mudarValor
}
timeEnd("15:00")


function secondTimeStart(time){
    const nome = document.getElementById("second-time-start")
    const mudarValor = nome.value = time
    return mudarValor
}
secondTimeStart("07:00")


function secondTimeEnd(time){
    const nome = document.getElementById("second-time-out")
    const mudarValor = nome.value = time
    return mudarValor
}
secondTimeEnd("15:00")