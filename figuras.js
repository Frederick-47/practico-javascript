//Código del cuadrado
console.group("Cuadrados.");
/* const ladoCuadrado = 5; */
function perimetroCuadrado(lado) {  
    return lado * 4;
    }
    
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Código del cuadrado

//Triángulo 
console.group("Triangulos.");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1 +"cm, "
    + baseTriangulo + "cm, "
    + ladoTriangulo2 + "cm."
    );
    
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

const area = (baseTriangulo * alturaTriangulo) / 2
console.log("El área del triángulo es de: " + area + "cm^2"); */


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function alturaTriangulo(base, lado){
    return Math.sqrt((base/2)**2 + lado**2);
}

console.groupEnd();


// Código Círculo 
console.group("Círculos");

//Radio 
/* const radioCirculo = 4;
console.log("El radio del circulo es de: " + radioCirculo + "cm");

//  Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");

//  PI 
const PI = Math.PI;
console.log("PI: " + PI + "cm");

//  Circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm");


//  Área 
const areaCirculo = PI * (radioCirculo * radioCirculo)
console.log("El área del círculo es de: " + areaCirculo + "cm^2");
 */

function diametroCirculo(radio){
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio){
    diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();



//Aquí interactuamos con HTML 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrada() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Aquí empieza el código altura del Triangulo

function calcularAlturaTriangulo(){
    const inputLados = document.getElementById("ladosTriangulo");
    const inputBase = document.getElementById("baseTriangulo");
    const base = inputBase.value;
    const lado = inputLados.value;
    alert("La altura del triángulo es: " + alturaTriangulo(base,lado) )
    

}