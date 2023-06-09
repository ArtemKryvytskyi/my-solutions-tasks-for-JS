/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

const printWord = () => console.log("Hello, world!");
setTimeout(printWord, 5000);
// or setTimeout(() => console.log("Hello, world!"), 5000)