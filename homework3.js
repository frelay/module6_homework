// Задание 3
function getSum(firstNum) {
    return function (secondNum) {
        return firstNum + secondNum;
    };
}

// Вариант с записью возвращаемой функции в переменную
const result = getSum(10);
console.log(result(5));

// Вариант с записью через вторые скобки без сохранения в переменную
console.log(getSum(2)(3));
