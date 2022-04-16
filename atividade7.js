//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso,
// se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.



function divisao(num1, num2){
    const resultado = num1/num2
    if (resultado % 2 == 0){
        return `Este resultado ${resultado} é par`
    } else {
        return `Este resultado ${resultado} é impar`
    }
}

console.log(divisao(32, 4))