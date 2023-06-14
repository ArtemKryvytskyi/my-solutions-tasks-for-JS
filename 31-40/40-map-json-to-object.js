/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]

const myArray = [];

postsJSON.forEach((index)=> {myArray.push( JSON.parse(index))})

console.log(myArray);
console.log(myArray[1].postId);
console.log(myArray[myArray.length-1].commentsQuantity)

//решение учителя

const postsJS = postsJSON.map((post)=>JSON.parse(post));

const postsJS1 = postsJSON.map(JSON.parse);

console.log(postsJS1);
console.log(postsJS1[1].postId);
console.log(postsJS1[myArray.length-1].commentsQuantity)