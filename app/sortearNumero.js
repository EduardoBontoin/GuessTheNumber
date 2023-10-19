const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarAleatorio()
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')


elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor



function gerarAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}




