/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)//true :(

/*
left-to-right

(true && null) // null ---  && - оператор короткого замыкания возращает первое ложное значение;

(true && 'abc' && 10) // 10;

3 || null || false // 3 --- || - возращает первое правдивое значение;
*/
