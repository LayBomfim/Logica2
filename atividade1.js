//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.


function informarDiaDaSemana(diadasemana){
switch (diadasemana) {
    case 'dia1':
        return 'É domingo.'
    case 'dia2':
        return 'É segunda-feira.'
    case 'dia3':
        return 'É terça-feira.'
    case 'dia4':
        return 'É quarta-feira.'
    case 'dia5':
        return 'É quinta-feira.'
    case 'dia6':
        return 'É sexta-feira.'
    case 'dia7':
        return 'É sabado.'
    default:
        return 'Esse dia não existe.'
    }                                       

}

console.log(informardiadasemana('dia2'))