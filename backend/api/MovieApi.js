
class MovieApi {

	constructor() {
		this.movieService = new MovieService();
	}

	/** Simulates that it gets a real HTTP request */
	request(request) {

		let response;

		if (request.httpMethod === "GET" && request.path === "/movies") {

			let genre = request.data.genre;

			let movies;

			if (genre) {
				movies = this.movieService.findMoviesByGenre(genre);
			} else {
				movies = this.movieService.findAllMovies();
			}

			response = new HttpResponse(200, JSON.stringify(movies));

		} else if (request.httpMethod === "GET" && request.path === "/movies/suggested") {

			let genre = request.data.genre;

			let movies = this.movieService.findSuggestedMoviesByGenre(genre);

			response = new HttpResponse(200, JSON.stringify(movies));

		} else if (request.httpMethod === "GET" && request.path === "/directors") {

			let directors = this.movieServices.findAllDirectors();

			response = new HttpResponse(200, JSON.stringify(directors));

		} else {

			response = new HttpResponse(412, null); // wrong request
		}

		return response;
	}
}

/**
 * Every HTTP request has:
 * - method: GET POST PUT DELETE    (nothing to do with OOP "methods")
 * - path: e.g. /movies
 * - data: optional extra data that the request may need
 *         e.g. if you're searching, the data may be the search query
 *              if you're creating something, you send the data to store
 */
class HttpRequest {

	constructor(httpMethod, path, data) {
		this.httpMethod = httpMethod;
		this.path = path;
		this.data = data;
	}
}

/**
 * An HTTP response has:
 * - status: code indicating if the request was ok or failed for some reason
 *           e.g. 200 = ok, 401 = unathorised, 404 = not found, 412 = wong request, 500 = server error, etc. 
 * - data: if the request was ok, the response contains the result data
 */
class HttpResponse {

	constructor(httpStatus, data) {
		this.httpStatus = httpStatus;
		this.data = data;
	}
}
