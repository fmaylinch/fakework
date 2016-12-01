
/** 
 * Simulates a database
 */
class Database {

	constructor() {
		
		// simulate we have a real database
		this.movies = [
			new Movie(1, 3, "Pulp fiction", "thriller", true),
			new Movie(2, 1, "2001 space odissey", "sci-fi", true),
			new Movie(3, 4, "Pi", "thriller", false),
			new Movie(3, 2, "Mujeres al borde", "comedy", false),
		];

		this.directors = [
			new Director(1, "Kubrik", "USA"),
			new Director(2, "Almodovar", "Spain"),
			new Director(3, "Tarantino", "USA"),
			new Director(4, "Aronofsky", "USA")
		];
	}

	/** Returns an array of items according to the query */
	find(query) {

		let table;

		if (query.table === "movies") {
			table = this.movies;
		} else if (query.table === "directors") {
			table = this.directors;
		} else {
			throw "Error: table doesn't exist: " + query.table;
		}

		if (query.property) {
			return table.filter( item => item[query.property] === query.value );
		} else {
			return table;
		}
	}
}
