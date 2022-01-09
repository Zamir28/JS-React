"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');


// personalMovieDB.movies[c]=d;

function rememberMyFilm() {
    for (let i=0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
            if (a!='' && b!='' && a!=null && b!=null && a.length<50) {
                personalMovieDB.movies[a]=b;  
                console.log('done');
            }     
            else{
                console.log('error');
            }
            
        }
}

// rememberMyFilm();

function detectPersonalLevel() {
    if (personalMovieDB.count<10){
        console.log('Просмотрено довольно мало фильмов');
    }
    else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log('Вы классический зритель');
    }
    else if (personalMovieDB.count>30){
        console.log('Вы киноман');
    }
    else {
        console.log('Произошла ошибка');
    }

}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
    
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i<=3; i++ ) {
        personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// console.log(personalMovieDB);




// const leftBorder=1;

// const obj = {
//     a: 50
// };
// obj.a = 1000000;
// console.log(obj);
// const result = confirm("Are you here?");
// console.log(result);
// const answer = prompt("Вам есть 18?")
// console.log(typeof(answer + 5));
// const answers=[];
// answers[0] = prompt('Как Ваше имя?', '');
// answers[1] = prompt('Как Ваше фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// document.write(answers);



// let i = 0;

// while (i<2) { 
//    const a = prompt('Один и последних просмотренных фильмов', ''),
//          b = prompt('На сколько оцените его', '');
//     i++;
 
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//         if (personalMovieDB.count<10){
//         console.log('Просмотрено довольно мало фильмов');
//     }
//     else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
//         console.log('Вы классический зритель');
//     }
//     else if (personalMovieDB.count>30){
//         console.log('Вы киноман');
//     }
//     else {
//         console.log('Произошла ошибка');
//     }
//    }
//    console.log(personalMovieDB);

// // do {
// //         console.log(num);    
// //         num++;
// // }
// // while (num<=55); 


// for (let i=1; i<8; i++) {
//     console.log(num);
//     num++;
// }


// const logg= "Hi i am Zamir!";
// console.log(logg.slice(3, 13));