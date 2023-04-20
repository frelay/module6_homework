// Задание 4
function printNumsWithInterval(firstNum, lastNum, interval) {
    const intervalId = setInterval(function () {
        if (firstNum <= lastNum) {
            console.log(firstNum++);
        } else {
            clearInterval(intervalId);
        }
    }, interval);
}

printNumsWithInterval(5, 15, 1000);
