// Task 1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - (4 * a * c);
    if (D < 0) {
        return {D: D};
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        return { roots: [ x1 ], D: D };
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { roots: [ x1, x2 ], D: D };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    window.roots = `Вычисляем корни квадратного уравнения ${a}*x^2 + (${b})*x + (${c})`;
    console.log(window.roots);
    window.discriminant = `Значение дискриминанта: ${result.D}`;
    console.log(window.discriminant);
    if (result.D < 0) {
        window.solution = `Уравнение не имеет вещественных корней`;
        
    } else if (result.D == 0) {
        window.solution = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
    } else if (result.D > 0) {
        window.solution = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }
    console.log(window.solution);
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Task 2

function getAverageScore(data) {
    for (let prop in data) {
        data[prop] = getAverageMarks(data[prop]);
    }
    data.average = getAverageData(data);
    return data;
}
function getAverageMarks(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let avg = sum / marks.length;
    return avg;
}

function getAverageData(data) {
    let sum = 0;
    let count = 0;
    for (let prop in data) {
        count += 1;
        sum += data[prop];
    }   
    let average = sum / count;
    return average;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 4, 3],
    chemistry: [2],
    french: [4,4]
}));

// Task 3

function getPersonData(secretData) {
    
    return {firstname: getDecode(secretData), secondname: getDecode(secretData)};
}

function getDecode(secretData){
    for ( let prop in secretData ) {
        if (secretData[prop] = 0) {
            secretData[prop] = `Родриго`;
        } else if (secretData[prop] = 1) {
            secretData[prop] = `Эмильо`;
        }
    }
    return secretData;
}

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}))