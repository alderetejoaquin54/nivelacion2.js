const n1 = parseInt(prompt("Ingrese el primer numero"));
const n2 = parseInt(prompt("Ingrese el segundo numero"));
const operacion = window[prompt("sumar o restar")];
function sumar(n1, n2) {
    return n1 + n2;
}
function restar(n1, n2) {
    return n1 - n2;
}
function calcular(n1, n2, operacion) {
    return operacion(n1, n2);
}
const resultado = calcular(n1, n2, operacion);
//const resultResta = calcular(n1, n2, restar);
console.log(resultado);
alert(resultado);
//alert(resultResta);