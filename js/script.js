const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);

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

