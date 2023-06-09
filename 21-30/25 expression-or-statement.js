/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *    всегда возращает значение
 * ---
 *  - инструкция (statement)
 *    выполняет действие
 * ---
 *  - выражение-инструкция (expression statement)
 * 
 */

15 // <--- expression // expression statement

const myObject = {
  x: 10,          //<---statement // 
  y: true,
}

myObject.z = 'abc' //<--- statement // expression

delete myObject.x //<---statement

let newVariable //<--- statement

newVariable = 30 + 5 //<--- expression

console.log(newVariable) //<---statement //expression

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`) //<---statement
}
