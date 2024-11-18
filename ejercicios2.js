/*
 1. Crea una función que compruebe si un número está entre 
*/

/*
  Arregla los errores
*/

const firstName = 'Jose Miguel';
const lastName = 'González García';
const fullName = firstName + lastName;
const fullName = '${fristName} ${lastName}';

console.log(fullName)


/*
  Arregla el error
*/

let x = 2;
const y = 4;
x = y + x;

/*
  Cambia la declaración de variables usando let o const
*/

const myVar1 = 1;
const myVar2 = 25;
let sum = myVar1 + myVar2;
sum = sum +1;


/*
  Declara una variable que contenga un número, otra que contenga el texto 'Hola' y otra que contenga el texto "Hola [NUMERO]" donde el [NUMERO] será el valor de la primera variable.
*/ 
 const number = 2;
 const text = 'Hola';
 const botht =`${text} ${number}`;

/*
 Declara una variable con una cadena de texto y escribe en la consola el texto "Mi cadena de texto tiene [NUMERO] caracteres", donde [NUMERO] será el tamaño de esa cadena de texto. 
 Por ejemplo, si la cadena de texto es "hola", el resultado debe ser "Mi cadena de texto tiene 4 caracteres".
*/


const text1 = 'Hola';
const textWhithLength = `Mi cadena de texto ${text.lenght} caracteres`
console.log( `Mi cadena de texto ${text.lenght} caracteres`)

/*
 Declara una variable numérica, y 3 más de tipo booleano, una que indique si es mayor que 3, otra que indique si es menor que 5 y otra que indique si es igual a 8.
*/

const number2 = 4;
const mayorque3 = number < 3;
console.log(mayorque3);

const menorque5 = number2 < 5;
console.log(menorque5);




// Ejercicios clase 2

/*
Escribe qué valor debe ser X e Y para que las siguientes condiciones se cumplan (den true)
Cada ejercicio puede tenenr un valor de X e y distinto
Es posible que alguna condición no se pueda dar nunca. Indica por qué
*/
let result;
let x;
let;

// Ejemplo, x= 3, y = 1
result = x > y;
console.log(result);

// x = 7 y = 1
result = x > y + 5;
console.log(result);

// y = 6
result = 'pepito'.length === y;
console.log(result);

// x = 'Pepito se fue a comprar fruta :)' y = 32
result = 'La venganza de los ornitorrincos salvajes'.length < y + 10 && x.length === y;
console.log(result);

// const y = 'Pepito se fue a comprar fruta :)'

const prueba = 'Pepito se fue a comprar fruta :)';  // prueba para saber el length
console.log(prueba.length)

// x = 5 y = 5
result = x >= y;
console.log(result);

// x = 'x'
result = x !== 'number';
console.log(result);

// y = 6 x = 'camión'
result = y && !x; 
console.log(result);

// x = 1 y = 1 -- x = 7 y = 2
result = y <= x || x > y;
console.log(result);

// x = 27 y = 51 
result = -1 + x === y - 25;
console.log(result);

// y = 'text'
result = typeof y === 'String';
console.log(result);

// x = 0.5 y = 0.3
result = x > 0 && x < 1 && y > 0 && y < x;
console.log(result); 

// result = 0.5 > 0 && 0.5 < 1 && 0.3 > 0 && 0.3 < 0.5;
// console.log(result) 

// x = 'j'
result = 'j' !== '' && 'j'.length < 2;
console.log(result);

// x = 6 Revisar 
result = typeof 6 === 'number' && 6 > '5';
console.log(result);

// Es imposible porque se junta numero con .length habria que hacer: number.toString().length 
result = x.length > 5 && x.length < 6.0000000000001;
console.log(result);

// y = 'camión' x = 'carretera'
result = 'camión'.length && 'carretera'.length && 'carretera'.length !== 'camión'.length;
console.log(result);

// Es imposible porque un numero no puede tener length. Habria que hacer : number.toString().length
result = x.length > 0 && x.length < 1;
console.log(result);

// x = true y = 'text'
result = typeof true === 'boolean' && typeof 'text' === 'string';
console.log(result);

// x = 5 y = '5'
result = 5 !== '5' && 5 === 5 && '5' == 5;
console.log(result);

//
result = !x || (x && !y) || (y && x);
console.log(result);

// Es imposible
result = y === x && y !== 'number' && x.length;
console.log(result);

// x = 2 y = -1
result = (!2 && !-1 && 2) || (-1 && 2 && 2 < 100 && -1 < 0);
console.log(result);

// Es imposible porquue ambas se contardicen
result = y !== '' && typeof y === 'number';
console.log(result);

// Es imposible porque el .toLowerCase transforma todo el string en minisculas por lo tanto no va a incuir 'A'
result = y.toLowerCase().includes('A');
console.log(result);

// y = ''
result = '' === '' && typeof '' !== 'number';
console.log(result);

//
result = !y && y !== false && y !== 0;
console.log(result);

//
result = typeof x == 'number' && !x;
console.log(result);

//
result = (x === y && x < 1 && y > 0) || (x === y && x > 1 && y < 0) || (x !== y && x === y + 1) || x == 5;
console.log(result);

//
result = x > 5 && y.length * 2 == x;
console.log(result);
