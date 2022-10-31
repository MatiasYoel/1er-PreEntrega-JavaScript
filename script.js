/*Algoritmo que pida el nombre de un alumno y sus notas una a una, hastaque se ingrese un 0, 
luego mostrar el nombre y el promedio de ese alumno; indicar siha aprobado o no la materia, 
considerando que se aprueba con una nota igual o mayor a 6.*/
let nombre=prompt("Ingresa Nombre del Alumno")
let notaIngresada=0
let promedio=0
let contadorNotas=0
let acumulador=0
do {
    notaIngresada=parseInt(prompt("Ingrese Nota"))
    contadorNotas++
    acumulador=acumulador+notaIngresada
} while (parseInt(notaIngresada));
contadorNotas=contadorNotas-1
promedio=acumulador/contadorNotas
if (promedio>=6) {
    alert(nombre+" "+"Has aprobado la materia con: "+promedio)
}else {
    alert(nombre+" "+"Has desaprobado la materia con: "+promedio)
}

/*Leer números enteros positivos de teclado, hasta que el usuario ingrese el 0 o una letra. Informar cuál fue el mayor número ingresado.*/
let numeros=0
let k=0
let mayor=0
do {
    numeros=parseInt(prompt("Ingrese para saber cual es el Numero Mayor"))
    k++
    if (k==1) {
        mayor=numeros
    } else if(numeros>mayor){
        mayor=numeros
    }
} while (parseInt(numeros));
alert("El Mayor es: "+mayor)
/*Leer números enteros de teclado, hasta que el usuario ingrese el 0 o una letra. 
Finalmente,mostrar la sumatoria de todos los números ingresados (contando el 0).*/

let num=1
let suma=0
let i=0
do {
    num=parseInt(prompt("Ingrese un numero"))
    i++
    if (num>0){
        suma=suma+num}
} while (parseInt(num));
alert(suma)
