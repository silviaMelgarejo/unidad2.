//conociendo el siclo for
function saludar(){
var nombre=document.getElementById("nombre").value;
var saludo="hola";
for(var i=1;i<=3;i++){//i++ --> significa que el i se va incrementar en 1
    var mensaje=` ${saludo} ${nombre} ${i}` ;
    alert(mensaje);
} 
}

function saludar1(){
    var nombre=document.getElementById("nombre").value;
    var saludo=["buenos dias","buenas tardes","buenas noches"];
    for(var i=0;i<saludo.length;i++){//i++ --> significa que el i se va incrementando en 1
    var mensaje=` ${saludo[i]} ${nombre}` ;
    alert(mensaje);
    }
}
/*
let dato;
const patron= /hola/;
const patron2=/[0-9]+/;
do {
        dato=prompt("ingrese un texto:");
    } while (!patron2.test(dato));
alert("tu expresion cumple con la vondicion");*/

//Conociendo las funciones
//Declarando funciones
function suma(a,b){
    resultado=a+b;
    return resultado;
}
function resta(a,b){
    resultado=a-b;
    return resultado;
}
function multiplication(a,b){
    resultado=a*b;
    return resultado;
} 
function division(a,b){
    resultado=a/b;
    return resultado;
} 
function potencia(a,b){ 
     resultado= a**b;
     return resultado;
    } 
    function residuo(a,b){
     resultado= a%b;
     return resultado;
    }

//nueva forma de declarar funcion en javascript

//let agregar = a => a+100;
//alert(agregar(10));

//llamada de funciones

//suma(15,23);
//resta(4,18);
//multiplication(45,7);
//division(30,5);
//potencia(3,2);
//residuo(16,3);

//residuo(24,5);
//console.log(resultado);
//alert(resultado);
//document.getElementById("resultado").innerHTML=resultado;

//Ejercicio 1: funcion que no halle el area de un circulo

//Declaramos la funcion
function areaCirculo(r) {
    //pi*r*2
    const pi=3.14;
    area=pi*(r**2);
    return area;
} 
//let radio =prompt('ingresa el radio: ');
//llamdo a la funcion
//let areaC =areaCirculo(radio);
//mostrando el resultado
//console.log(areaC);
//alert(areaC);
//document.getElementById("result").innerHTML=areaC
function notaEstudiante(nota) {
      if (nota<=10){
      alert("Estudia mas, has reprobado :/");
    }else if(nota>10){
        alert("Muy bien, aprobaste")
    }
}
let nota= prompt('ingrese su nota: ');
//llamado a la funcion
notaEstudiante(nota);

