
/**
 * A service knows about the business logic,
 * and queries (makes requests to) the database
 */
class MovieService {

	constructor() {
		this.database = new Database();
	}

	/** returns an array of movies of that genre */
	findMoviesByGenre(genre) {

		let query = { table: "movies", property: "genre", value: genre };
		let movies = this.database.find(query);
		return movies;
	}

	/** returns an array of movies that are classics */
	findClassicMovies(genre) {

		let query = { table: "movies", property: "isClassic", value: true };
		let movies = this.database.find(query);
		return movies;
	}

	/** returns an array of suggested movies if you like that genre */
	findSuggestedMoviesByGenre(genre) {

		// Get movies of the given genre, and also classics you may like
		let moviesByGenre = this.findMoviesByGenre(genre);
		let moviesClassic = this.findClassicMovies();
		let movies = moviesByGenre.concat(moviesClassic);

		// Remove repeated
		let movieSet = {};
		for (let movie of movies) {
			movieSet[movie.id] = movie;
		}

		movies = Object.values(movieSet);

		return movies;
	}

	findAllMovies() {

		let query = { table: "movies" };
		let movies = this.database.find(query);
		return movies;
	}

	findAllDirectors() {

		let query = { table: "directors" };
		let directors = this.database.find(query);
		return directors;
	}
}