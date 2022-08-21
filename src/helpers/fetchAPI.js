
const baseUrl = 'http://localhost:4000/api/simulation';

export const fetchAPI = (endPoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endPoint}`;

	if (method === 'GET') {
		return fetch(url);

	} else {
		return fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}
}