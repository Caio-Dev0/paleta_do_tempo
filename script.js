let mensagem = document.querySelector('#msg')
let mensagemChegada = document.querySelector("#msg-chegada")
let body = document.querySelector("body")

function carregarHoraAtual(){
    let dataAtual = new Date();
    let horaAtual = dataAtual.getHours();
    mensagem.textContent = `Agora são ${horaAtual} horas`
    return horaAtual
}

function mudaPaletaTempo(){
    const horaAtual = carregarHoraAtual()
    if(horaAtual >= 6 && horaAtual < 12){
        mensagemChegada.textContent = "🌞 Bom dia, Flor do dia"
        body.style.backgroundImage = "url(/assets/manha.jpg)"
        
    }else if(horaAtual >= 12 && horaAtual < 18){
        mensagemChegada.textContent = "😎 Boa tarde, Flor da tarde"
         body.style.backgroundImage = "url(/assets/tarde.jpg)"
    }else{
        mensagemChegada.textContent = "😴 Boa noite, Flor da noite"
        body.style.backgroundImage = "url(/assets/noite.jpg)"
    }
}

carregarHoraAtual()
mudaPaletaTempo()