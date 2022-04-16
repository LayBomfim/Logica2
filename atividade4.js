//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.


function mostraSeParOuImpar(numero) {
    if (numero % 2 == 0) {
      return `${numero} é par.`
    } else {
      return `${numero} é ímpar.`
    }
}


const resultado = mostraSeParOuImpar(23)
console.log(resultado)