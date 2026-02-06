const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "Interstellar", rating: 8.6 },
  { title: "The Dark Knight", rating: 9.0 },
  { title: "Dune", rating: 8.2 }
];

const bestMovie = movies.reduce((best, current) => {
  return current.rating > best.rating ? current : best;
}, movies[0]);

console.log(bestMovie);