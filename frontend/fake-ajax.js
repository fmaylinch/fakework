
/** Simulates an AJAX HTTP request to some api */

function fakeAjaxCall(api, httpMethod, path, data) {

	let request = new HttpRequest(httpMethod, path, data);
	let response = api.request(request);
	if (response.httpStatus === 200) {
		// console.log("Received data as JSON string: " + response.data);
		let resultObjects = JSON.parse(response.data);
		return resultObjects;
	} else {
		throw "There was an error in the AJAX call: " + respose.httpStatus;
	}
}
