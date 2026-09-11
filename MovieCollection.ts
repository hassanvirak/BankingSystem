interface Movie {
    MovieID: number;
    Title: string;
    Genre: string;
    Rating: number;
    ReleasedYear: number;
}
const movies: Movie[] = [
    { MovieID: 1, Title: "The Shawshank Redemption", Genre: "Drama", Rating: 9.3, ReleasedYear: 1994 },
    { MovieID: 2, Title: "The Godfather", Genre: "Crime", Rating: 9.2, ReleasedYear: 1972 },
    { MovieID: 3, Title: "The Dark Knight", Genre: "Action", Rating: 9.0, ReleasedYear: 2008 },
    { MovieID: 4, Title: "Inception", Genre: "Sci-Fi", Rating: 8.8, ReleasedYear: 2010 },
    { MovieID: 5, Title: "Interstellar", Genre: "Sci-Fi", Rating: 8.7, ReleasedYear: 2014 }
];
function displayAllMovies(): void {
    console.log("========================================================================================");
    console.log("MOVIE COLLECTION");
    console.log("========================================================================================");
    console.log("ID\tTitle\t\t\t\tGenre\t\tRating\tYear");
    console.log("----------------------------------------------------------------------------------------");
    movies.forEach(movie => {
        console.log(`${movie.MovieID}\t${movie.Title}\t\t${movie.Genre}\t\t${movie.Rating}\t${movie.ReleasedYear}`);
    });
    console.log("========================================================================================");
}
function displayHighRatedMovies(): void {
    const highRatedMovies = movies.filter(movie => movie.Rating > 8);
    console.log("\nMOVIES WITH RATING GREATER THAN 8");
    console.log("================================================================================");
    console.log("ID\tTitle\t\t\t\tGenre\t\tRating\tYear");
    console.log("--------------------------------------------------------------------------------");
    highRatedMovies.forEach(movie => {
        console.log(`${movie.MovieID}\t${movie.Title}\t\t${movie.Genre}\t\t${movie.Rating}\t${movie.ReleasedYear}`);
    });
    console.log("================================================================================");
}
function displayLatestMovie(): void {
    let latestMovie = movies[0];
    for (let i = 1; i < movies.length; i++) {
        if (movies[i].ReleasedYear > latestMovie.ReleasedYear) {
            latestMovie = movies[i];
        }
    }
    console.log("\nLATEST RELEASED MOVIE");
    console.log("==================================================");
    console.log(`Title: ${latestMovie.Title}`);
    console.log(`Genre: ${latestMovie.Genre}`);
    console.log(`Rating: ${latestMovie.Rating}`);
    console.log(`Released Year: ${latestMovie.ReleasedYear}`);
    console.log("==================================================");
}
displayAllMovies();
displayHighRatedMovies();
displayLatestMovie();