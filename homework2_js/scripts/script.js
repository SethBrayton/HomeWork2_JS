let goods = [
   {id: 1, title: 'Микроволновка', price: 1500, count: 4},
   {id: 2, title: 'Телевизор', price: 2500, count: 1},
   {id: 3, title: 'Тумба', price: 5500, count: 5}, 
   {id: 4, title: 'Холодильник', price: 200, count: 2}, 
   {id: 5, title: 'Стол', price: 5600, count: 5}, 
   {id: 6, title: 'Телефон', price: 1900, count: 12}, 
   {id: 7, title: 'Компьютер', price: 4200, count: 11}, 
   {id: 8, title: 'Мангал', price: 250, count: 7}, 
   {id: 9, title: 'Люстра', price: 300, count: 3}, 
]

// Задача No_1
// 1 Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
// let evenID = goods.filter(e => e.id % 2 === 0);
// console.log(evenID);


// Задача No_2
// 2 Посчитайте сумму всех товаров, учитывая их количество
// let sum = 0
// let price = goods.reduce((sum, elem) => sum + elem.price *elem.count, 0)
// console.log(price);


// Задача No_3
// 3 Найдите значение элемента массива (продукта), цена которого будет кратна 5
// let result = goods.find(elem => elem.price % 5 === 0)
// console.log(result);


// Задача No_4
// Найдите индекс элемента, count которого будет больше 11
// let result = goods.findIndex(elem => elem.count > 11)
// console.log(result);


// Задача No_5
// Посчитайте количество элементов, count  которых является нечетным числом
// let result = goods.filter(elem => elem.count % 2 !== 0)
// console.log(result.length);


// Задача No_6
// Посчитайте количество элементов, имя которых начинается на “Т”
// let result = goods.filter(elem => elem.title[0] === 'Т')
// console.log(result.length);


// Задача No_7
// Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)

// let discount = goods.map(elem => elem.price * 0.65)
// console.log(discount);


// Задача No_8
// Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)
// let updatedGoods = goods.map(elem => ({...elem, count: 0}));
// console.log(updatedGoods);














