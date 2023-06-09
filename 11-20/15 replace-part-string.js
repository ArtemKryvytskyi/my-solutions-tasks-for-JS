/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

const myWord = "Good Morning";
let sepmyWord = myWord.split(' ');
sepmyWord[1] = "Evening";
sepmyWord=sepmyWord.join(" ");
console.log(sepmyWord);
//!---------------------------------------
const updateGreeting = myWord.replace('Morning','Evening');
console.log(updateGreeting);