
let numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '1');
let personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: [],
    privat: false
};
console.log(personalMoveDB);

let a = prompt('Один из последних просмотренных фильмов?', '');
    b = +prompt('На сколько оцените его?', 'от 0 до 10');
    c = prompt('Один из последних просмотренных фильмов?', '');
    d = +prompt('На сколько оцените его?', 'от 0 до 10');



personalMoveDB.movies[a] = b;
personalMoveDB.movies[c] = d;
console.log(personalMoveDB.movies[0]);

