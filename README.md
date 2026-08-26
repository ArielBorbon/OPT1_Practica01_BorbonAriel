# OPT1_Practica01_BorbonAriel
Practica 1 de Optativa 1: Temas Emergentes



Paso 2: Que creo que se va a imprimir en el codigo JS:
Al realizar este codigo en clase, se que se ejecutara de manera erronea un resultado de 35050
El cual es Incorrecto porque junta los valores en vez de sumarlos

Paso 2: ¿hubo algún error, alguna advertencia o algo en la consola que avisara?
en la ejecucion no hubo ningun error, pero esta claro que no esta dando el resultado correcto

Paso 3: si el archivo tiene un error de tipos, ¿por qué node lo ejecuta? ¿Cuál comando revisa y cuál ejecuta?
Porque node solamente es el que ejecuta, basicamente node solo se encarga de ejecutar lo que quieras, pero el encargado
de verificar la integridad del codigo es "npx tsc --noEmit", que es el que revisa las reglas estaticas

Paso 4: de las dos líneas que usan const, ¿por qué sólo una falla?
Marca error donde se intenta reasignar la variable por completo, const crea una referencia de solo lectura, lo que hace que no se pueda cambiar
(el espacio en memoria)

Paso 4: al asignarle un texto a la variable con let, nadie escribió que fuera un número. ¿De dónde salió ese tipo?
Cuando utilizas TS y colocas una variable let con un valor numerico, TS lo analiza por debajo de cuerdas y le coloca el tipo number
por eso si se le quiere meter un String despues se marca un error, por que el compilador ya lo considera ese tipo


Paso 6: 3 Errores distintos:

Error 1 (TS2339): Property 'fechaDevolucion' does not exist on type 'Prestamo'.
Que esperaba: una propiedad de las definidas dentro de prestamo
Que recibio: un dato a una propiedad que no existe (fechaDevolucion)
En que linea: 14

Error 2 (TS2322): Type 'string' is not assignable to type 'number'.
Que esperaba: un valor numerico para Multa
Que recibio: un string que dice "cien"
En que linea: 13

Error 3 (TS2554): Expected 1 arguments, but got 0.
Que esperaba: que la funcion de calcular multa tuviera adentro el argumento de prestamo
Que recibio: la funcion sin argumentos
En que linea: 34