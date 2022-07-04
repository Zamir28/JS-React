
// const hamburgers = 5,
//      fries = 1;

// if (hamburgers || fries) {
//     console.log('Я сыт')
// }

// console.log((hamburgers && fries));

let num=50;

// while (num<=55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num<=55);
 
let result = '';
const length = 7;

for (let i=1; i<length; i++){

    for (let j=0; j<i; j++){
        result += "*"; 
    }
    result += '\n';
}
console.log(result);

first: for (let i=0; i<3; i++){
    console.log(`First level: ${i}`);
    for (let j=0; j<3; j++){
        console.log(`Second level: ${j}`);
        for (let k=0; k<3; k++){
            if (k===2) continue first;
            console.log (`Third level: ${k}`);
        }
    }
}

// задачи №1 

for (let i=5; i<=10; i++) {
    console.log(i);
}

for (let i=20; i>=10; i--) {
    if(i===13) break;
    console.log(i);
}

even: for (let i=2; i<=10; i++) {
    if(i % 2 === 1) continue even;
    console.log(i);
}


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while ( i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } 
    else {
        console.log(i);
    }
    i++;
}


let arr = [5, 6,7,8,9,10];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}


function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}



// задачи №2 

const length = 3;
const filledArray = Array(length).fill({ value: 0 });
filledArray; // [{ value: 0 }, { value: 0 }, { value: 0 }]

const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = arr.map(n => n);

    console.log(result);


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = arr;

    console.log(result);



    const data = [5, 10, 'Shopping', 20, 'Homework'];
    
    const oddNumbers = data.forEach(n => console.log(if (typeof n) n*2; else typeof "n-done");
     

// Работа с функциями


function sayHello(name){

    return `Привет!, ${name}`;
}

console.log(sayHello('Artem'));

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(9));

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(2,0));



const str = 'Hello Zamir Tur';
console.log(str.slice(-6, 0));


function summa(a, b){
    alert(a+b);
}
document.getElementById('b1').onclick = function(){
    summa(1, 7);
};

