/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  expensiveMovie() {
    if (this.budget >= 100000000) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  }
}

const series = new Movie("Mad Max: Fury Road", "George Miller", 185000000);
series.expensiveMovie();
console.log("Film budget: ", series.budget, "USD");
