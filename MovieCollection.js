var movies = [
    { MovieID: 1, Title: "The Shawshank Redemption", Genre: "Drama", Rating: 9.3, ReleasedYear: 1994 },
    { MovieID: 2, Title: "The Godfather", Genre: "Crime", Rating: 9.2, ReleasedYear: 1972 },
    { MovieID: 3, Title: "The Dark Knight", Genre: "Action", Rating: 9.0, ReleasedYear: 2008 },
    { MovieID: 4, Title: "Inception", Genre: "Sci-Fi", Rating: 8.8, ReleasedYear: 2010 },
    { MovieID: 5, Title: "Interstellar", Genre: "Sci-Fi", Rating: 8.7, ReleasedYear: 2014 }
];
function displayAllMovies() {
    console.log("========================================================================================");
    console.log("MOVIE COLLECTION");
    console.log("========================================================================================");
    console.log("ID\tTitle\t\t\t\tGenre\t\tRating\tYear");
    console.log("----------------------------------------------------------------------------------------");
    movies.forEach(function (movie) {
        console.log("".concat(movie.MovieID, "\t").concat(movie.Title, "\t\t").concat(movie.Genre, "\t\t").concat(movie.Rating, "\t").concat(movie.ReleasedYear));
    });
    console.log("========================================================================================");
}
function displayHighRatedMovies() {
    var highRatedMovies = movies.filter(function (movie) { return movie.Rating > 8; });
    console.log("\nMOVIES WITH RATING GREATER THAN 8");
    console.log("================================================================================");
    console.log("ID\tTitle\t\t\t\tGenre\t\tRating\tYear");
    console.log("--------------------------------------------------------------------------------");
    highRatedMovies.forEach(function (movie) {
        console.log("".concat(movie.MovieID, "\t").concat(movie.Title, "\t\t").concat(movie.Genre, "\t\t").concat(movie.Rating, "\t").concat(movie.ReleasedYear));
    });
    console.log("================================================================================");
}
function displayLatestMovie() {
    var latestMovie = movies[0];
    for (var i = 1; i < movies.length; i++) {
        if (movies[i].ReleasedYear > latestMovie.ReleasedYear) {
            latestMovie = movies[i];
        }
    }
    console.log("\nLATEST RELEASED MOVIE");
    console.log("==================================================");
    console.log("Title: ".concat(latestMovie.Title));
    console.log("Genre: ".concat(latestMovie.Genre));
    console.log("Rating: ".concat(latestMovie.Rating));
    console.log("Released Year: ".concat(latestMovie.ReleasedYear));
    console.log("==================================================");
}
displayAllMovies();
displayHighRatedMovies();
displayLatestMovie();
