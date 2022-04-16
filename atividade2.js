//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles,
//se os números forem iguais, mostre uma mensagem no console "Os números são iguais".


//quero verificar se a pessoa pode comprar o ingresso

function liberarIngresso(dinheiro){
    const ingresso = 25
    let troco = dinheiro - ingresso

    if (dinheiro == 25){
        console.log("Ingresso Liberado. Aguarde a impressão.")
    } else if (dinheiro > 25){
        console.log(`Aguarde seu troco. Receberá em breve R$ ${troco}.`)
    } else if (dinheiro < 25){
        console.log("Infelizmente seu ingresso nao podera ser liberado.")
    }
}

console.log(liberarIngresso(25))

