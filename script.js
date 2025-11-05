let mensagem = document.querySelector('#msg')

function carregar(){
    let dataAtual = new Date();
    let horaAtual = dataAtual.getHours();
    mensagem.textContent = `Agora são ${horaAtual} horas`
    return horaAtual
}

carregar()