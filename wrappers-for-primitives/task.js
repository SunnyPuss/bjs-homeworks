"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let endDate = +new Date(date);
    let startDate = +new Date();
    let monthsInMilSec = endDate - startDate;
    let n = Math.ceil(monthsInMilSec / 2628000000);
    let p = parseInt(+percent) / 100;
    let P = p / 12  
    let amountPerMonth = (parseInt(+amount) - parseInt(+contribution)) * (P + P / ((Math.pow(1 + P, n) - 1)));
    let totalAmount = amountPerMonth * n;
    if (isNaN(+percent)){
        return `Параметр 'Процентная ставка' содержит неправильное значение '${percent}'`;
    }
    if (isNaN(+amount)){
        return `Параметр 'Общая стоимость' содержит неправильное значение '${amount}'`;
    }
    if (isNaN(+contribution)){
        return `Параметр 'Начальный взнос' содержит неправильное значение '${contribution}'`;
    }
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name === "" || "null" || null){
        name = "Аноним";
    } else if (name == "undefined" || undefined) {
        name = "Аноним";
    }

    let greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting)
    return greeting;
}