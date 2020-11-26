"use strict";

let personalMoveDB = {
  count: 0,
  movies: {},
  actors: [],
  genres: [],
  privat: false,
  start: () => {
    personalMoveDB.count = +prompt("Сколько фильмов уже посмотрели?", "");

    while (
      personalMoveDB.count == "" ||
      personalMoveDB.count == null ||
      isNaN(personalMoveDB.count)
    ) {
      personalMoveDB.count = +prompt("Сколько фильмов уже посмотрели?", "");
    }
  },
  rememberMyFilm: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "от 0 до 10");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMoveDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMoveDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMoveDB.count >= 10 && personalMoveDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMoveDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function() {
    if (personalMoveDB.privat == false) {
      console.log(personalMoveDB);
    } else {
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      while (genre == null || genre == '') {
        genre = prompt(`Ваш любимый жанр под номером ${i}`);
      }
      personalMoveDB.genres[i - 1] = genre;
    }
    let ind = 1;
    personalMoveDB.genres.forEach((element, i) => {
       console.log(`Любимый жанр #${i+1} - это ${element}`);
       ind++;
    });
  },
  toggleVisibleMyDB: function() {
      if (personalMoveDB.privat == false) {
          personalMoveDB.privat = true;
      } else {
        personalMoveDB.privat = false;
      }
  }
};

personalMoveDB.writeYourGenres();
console.log(personalMoveDB.genres);