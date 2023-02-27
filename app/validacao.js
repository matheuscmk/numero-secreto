function verificarChuteValorValido(chute){
    const numero = +chute

    if(NumeroInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }
    if(numeroMaiorMenorVP(numero)){
        elementoChute.innerHTML += `<div>O valor é entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Você acertou</h2>
        <h3>O numero secreto é ${numeroSecreto}</h3>
        <button id="id-jogar-novamente" class="btn-jogar">Jogar de novo?</button>`
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML +=  `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }else {
        elementoChute.innerHTML +=  `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function NumeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenorVP(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'id-jogar-novamente'){
        window.location.reload()
    }
})