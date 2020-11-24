"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов уже посмотрели?", "");
  }
}

start();

let personalMoveDB = {
  count: numberOfFilms,
  movies: {},
  actors: [],
  genres: [],
  privat: false,
};

writeYourGenres ();

detectPersonalLevel();

function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "от 0 до 10");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMoveDB.movies[a] = b;
      console.log('done');
    } else {
        console.log('error');
        i--;
    }
  }
}

rememberMyFilm();

function detectPersonalLevel() {
  if (personalMoveDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMoveDB.count >= 10 && personalMoveDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMoveDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
};

function showMyBD() {
    if (personalMoveDB.privat == false) {
        console.log(personalMoveDB)
    } else {

    }
};

showMyBD();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMoveDB.genres[i - 1] = genre;
    }
}

writeYourGenres ();
