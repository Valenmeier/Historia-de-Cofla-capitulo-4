class Calculadora {
    constructor() {

    }
    sumar (num1,num2) {
        return parseInt(num1)+parseInt(num2);
    } 
    restar (num1,num2) {
        return parseInt(num1)-parseInt(num2);
    } 
     multiplicar (num1,num2) {
        return parseInt(num1)*parseInt(num2);
    } 
     dividir (num1,num2) {
        return parseInt(num1)/parseInt(num2);
    }
    potenciar (num1,exp) {
        return num1**exp
    } 
    raizCuadrada (num1) {
        return Math.sqrt(num1)
    }
    raizCubica (num1) {
        return Math.cbrt(num1)
    }
}

const calculadora= new Calculadora()

alert(`¿Qué operación deseas realizar?`);
let operacion=prompt(`1:suma, 2:resta, 3:multiplicación, 4:división, 5:potenciación,6:raiz cuadrada, 7: raiz cubica` );
if (operacion==1) {
    let num1=prompt(`Primer número para sumar`);
    let num2=prompt(`Segundo número para sumar`);
    let resultado= calculadora.sumar(num1,num2)
    alert(`Tú resultado es ${resultado}`) 
}else if (operacion==2) {
    let num1=prompt(`Primer número para restar`);
    let num2=prompt(`Segundo número para restar`);
    let resultado= calculadora.restar(num1,num2)
    alert(`Tú resultado es ${resultado}`)
}else if (operacion==3) {
    let num1=prompt(`Primer número para multiplicar`);
    let num2=prompt(`Segundo número para multiplicar`);
    let resultado= calculadora.multiplicar(num1,num2)
    alert(`Tú resultado es ${resultado}`)
}else if (operacion==4) {
    let num1=prompt(`Primer número para dividir`);
    let num2=prompt(`Segundo número para dividir`);
    let resultado= calculadora.dividir(num1,num2)
    alert(`Tú resultado es ${resultado}`)
}else if (operacion==5) {
    let num1=prompt(`Numero a potenciar`);
    let num2=prompt(`exponente`);
    let resultado= calculadora.potenciar(num1,num2)
    alert(`Tú resultado es ${resultado}`)
}else if (operacion==6) {
    let num1=prompt(`Conocer la raiz cuadrada de`);
    let resultado= calculadora.raizCuadrada(num1)
    alert(`Tú resultado es ${resultado}`)
}else if (operacion==7) {
    let num1=prompt(`Conocer la raiz cubica de`);
    let resultado= calculadora.raizCubica(num1)
    alert(`Tú resultado es ${resultado}`)
}else {
    alert(`operacion no valida`)
}