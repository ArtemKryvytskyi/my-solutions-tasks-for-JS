/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const arrCar=[
   {
      carBrand: "Mers",
      price: 25,
      isAvailableForSale: true,
   },
   {
      carBrand: "BMW",
      price: 35,
      isAvailableForSale: false,
   },
   {
      carBrand: "FORD",
      price: 45,
      isAvailableForSale: true,
   }
]

arrCar.push({
   carBrand: "AUDI",
      price: 55,
      isAvailableForSale: false,
})

console.log(arrCar);