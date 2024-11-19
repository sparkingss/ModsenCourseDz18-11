// Запуск npm start или использовать расширение Live Server.

/*
Задание 1:
Задача: Напишите функцию countNumericValues(obj), которая принимает объект и возвращает количество его свойств, значения которых являются числами. 
Этапы решения: 
    - Создайте функцию countNumericValues, которая принимает объект obj. 
    - Используйте Object.values(obj), чтобы получить массив всех значений объекта. 
    - Примените метод .filter() для массива значений, оставляя только числовые значения. 
    - Возвращайте длину полученного массива с числовыми значениями. 
*/

function countNumericValues(obj){
    return Object.values(obj).filter(element => typeof element === 'number' && !isNaN(element));
}

const testUserObj = {
    name: 'Vladimir',
    age: 35,
    ageString: '35',
    phoneNum: '+375443332211',
    testNaN: NaN,
    testArray: []
};

console.log('Количество свойств, значениями которых являются числа:', countNumericValues(testUserObj));

/*
Задание 2:
Свойство, скрытое от перечисления 
    - Создайте объект car и добавьте ему свойство price со значением 10000. Сделайте так, чтобы это свойство: 
    - Не выводилось в списке ключей (то есть не было перечисляемым). 
    - Но его можно было изменять и удалять. 
Этапы решения: 
    - Создайте объект car. 
    - Добавьте свойство price с помощью Object.defineProperty(), установив в дескрипторе флаг enumerable как false. 
*/

const car = {
    price: 10000
};

Object.defineProperty(car, 'price', {
    enumerable: false,
});

const result = JSON.stringify(Object.getOwnPropertyDescriptors(car));
console.log('Вывод флагов свойства у объекта car: ', result);

/*
Задание 3:
Объединение ключей и значений 
Задача: Создайте функцию combineKeysAndValues(keys, values), которая принимает два массива (один с ключами, второй со значениями) и возвращает объект, где ключи соответствуют своим значениям. 
Этапы решения: 
    - Создайте функцию combineKeysAndValues, принимающую два параметра: массив keys и массив values. 
    - Используйте метод .map() для создания массива пар [key, value]. Каждая пара создаётся путём сопоставления элементов массива keys с соответствующими элементами из values (через keys.map((key, i) => [key, values[i]])). 
    - Преобразуйте массив пар [key, value] в объект с помощью Object.fromEntries. 
    - Верните получившийся объект. 
*/

function combineKeysAndValues(keys, values) {
    newArray = keys.map((key, i) => [key, values[i]]);
    return Object.fromEntries(newArray);
}

const keys = ['a', 'b', 'c', 'd'];
const values = [100, 2, 44, 23];

console.log('Полученный в результате объединения ключей и значений объект: ', combineKeysAndValues(keys, values));

/*
Задание 4:
Напишите функцию deepCopy(obj), которая выполняет глубокое копирование объекта (включая вложенные объекты). Не используйте библиотечные функции.
*/

function deepCopy(obj){
    if(typeof obj !== 'object' || typeof obj === null) return obj;
    const objCopy = {};

    for(let key in obj){
        objCopy[key] = obj[key];
        if(obj[key] === 'object'){
            objCopy[key] = seekDeeper(obj, objCopy)
        }
    }
    return objCopy;
}

const testObj = {
    a: 10,
    b: 'sasaf',
    c: {
        a: 34,
        b: 'sdf',
        c: {
            o: 3994
        }
    },
    d: {
        a: 9
    }
};

let copy = deepCopy(testObj);
testObj.a = 1000;
console.log('Вывод копии', copy);
console.log('Вывод изменённого оригинала: ', testObj);

/*
Задание 5:
Напишите функцию, которая удаляет свойства из объекта по заданному массиву ключей. Используйте Object.keys() для проверки наличия ключей и удаления их через delete.
const obj = { a: 1, b: 2, c: 3, d: 4 };
removeKeys(obj, ['a', 'c']);
console.log(obj); // { b: 2, d: 4 }
*/

function removeKeys(obj, keys){
    keys.forEach(key => {
        if(Object.keys(obj).includes(key)){
            delete obj[key];
        }
    });
    return obj;
}

const obj = { a: 1, b: 2, c: 3, d: 4 };
removeKeys(obj, ['a', 'c']);
console.log('Вывод объекта с удалёнными по ключам свойствами: ', obj); // { b: 2, d: 4 }