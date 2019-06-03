"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = Math.pow(b, 2) - (4 * a * c);
    if (d < 0) {
        console.log("Корней нет");
        let x = [];
        return x;
    } else if (d == 0) {
        let x = (-b + Math.sqrt(d)) / (2 * a);
        console.log(x);
        return x;       
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        let x = [x1, x2];
        console.log(x);
        return x;
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let actualYear = new Date();
    let age = actualYear.getFullYear() - dateOfBirthday.getFullYear();
    let result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log(result);
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0;
    if (marks.length > 5) {
        marks = marks.slice(0, 5);
    } 
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let avg = sum / marks.length;
    return avg;
}