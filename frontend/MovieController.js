
class MovieController {

	constructor() {
		// This is a simulation, actually you don't have an Api object from the frontend.
		// You make HTTP requests to it (because the API is in the remote server).
		this.movieApi = new MovieApi(); 
	}


	/** Searches movies that have the genre specified in the input */
	searchByGenre() {

		let genreToSearch = document.getElementById("genre-input").value;
		
		// Simulate HTTP request like: GET /movies with data {genre:"thriller"}
		// GET http://fake-movies-app.com/movies?genre=thriller

		console.log("Requesting movies of genre: " + genreToSearch);

		let data = {genre: genreToSearch};

		let movies = fakeAjaxCall(this.movieApi, "GET", "/movies", data);

		this.displayMovies(movies);
	}


	/** Searches movies suggested from the genre specified in the input */
	suggestByGenre() {

		let genreToSearch = document.getElementById("genre-input").value;
		
		// Simulate HTTP request like: GET /movies with data {genre:"thriller"}
		// GET http://fake-movies-app.com/movies?genre=thriller

		console.log("Requesting movies of genre: " + genreToSearch);

		let data = {genre: genreToSearch};

		let movies = fakeAjaxCall(this.movieApi, "GET", "/movies/suggested", data);

		this.displayMovies(movies);
	}


	/** 
	 * Display movies in HTML.
	 *
	 * Note:
	 * This is a bit dirty.
	 * It's much cleaner using a web framework like angular.js or vue.js
	 */
	displayMovies(movies) {

		let html = "";

		for (let movie of movies) {
			html += "<p>" + movie.title + "</p>";
		}

		let resultDiv = document.getElementById("result");
		resultDiv.innerHTML = html;
	}
}









