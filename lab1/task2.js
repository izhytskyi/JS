let num = prompt("Введіть число:");
let sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

alert("Сума цифр числа: " + sum);
