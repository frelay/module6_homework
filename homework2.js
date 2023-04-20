// Задание 2
function checkPrimeNumber(numberToCheck) {
    if (numberToCheck > 1000) {
        return "Число должно быть меньше 1000";
    }

    if (
        typeof numberToCheck !== "number" ||
        isNaN(numberToCheck) ||
        typeof numberToCheck === "undefined"
    ) {
        return `Введите ЧИСЛО больше еденицы!`;
    }

    if (numberToCheck > 1) {
        for (let i = 2; i < numberToCheck; i++) {
            if (numberToCheck % i === 0) {
                return `Число ${numberToCheck} не является простым`;
            }
        }

        return `Число ${numberToCheck} является простым`;
    } else {
        return `Число ${numberToCheck} должно быть больше еденицы`;
    }
}

console.log(checkPrimeNumber(87));
console.log(checkPrimeNumber(2));
console.log(checkPrimeNumber(1));
console.log(checkPrimeNumber(0));
console.log(checkPrimeNumber(599));
console.log(checkPrimeNumber(1001));
console.log(checkPrimeNumber("hello"));
console.log(checkPrimeNumber("hello" * 3));
console.log(checkPrimeNumber());
