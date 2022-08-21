






export const getVPF = (data = []) => {
	let suma = 0;
	for (let i = 0; i < data.length; i++) {
		console.log(data[i].id, ' Este es el id')
		suma += data[i].id;
		console.log(suma)
	}
	console.log(suma, ' Este es el vpf')
	console.log(data, ' Este es el data')
	return suma;
}