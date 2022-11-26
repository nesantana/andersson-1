const notas = [
  6,
  5.5,
  4.5,
  10
]

let maiorNota = 0
let menorNota = 0
let somaDasNotas = 0

notas.forEach((notaAtual, index) => {
  if (index === 0) {
    maiorNota = notaAtual
    menorNota = notaAtual
    
    return
  }

  if (maiorNota < notaAtual) {
    maiorNota = notaAtual
  }

  if (menorNota > notaAtual) {
    menorNota = notaAtual
  }

  somaDasNotas = somaDasNotas + notaAtual
})

let media = somaDasNotas / notas.length

console.log(`A média das notas é: ${media}`)
console.log(`A soma das notas é: ${somaDasNotas}`)
console.log(`A maior nota é: ${maiorNota}`)
console.log(`A menor nota é: ${menorNota}`)

console.log('-----------------------------------------')

console.log(`Esse aluno está: ${ media >= 6 ? 'Aprovado' : 'Reprovado' }`)