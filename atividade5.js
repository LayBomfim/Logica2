//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.


function informaMaiorOuMenorIdade(anoDeNascimento) {
    let idade = 2022 - anoDeNascimento
        if (idade >= 18){
            return 'Maior de idade'
        } else {
            return 'Menor de idade'
        }
    }
    
    console.log(informaMaiorOuMenorIdade(2004))
