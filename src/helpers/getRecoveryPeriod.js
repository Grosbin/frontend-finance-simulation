

export const getRecoveryperiod = (data = [], inv) => {
	let suma = 0;
	let contador = 1;
	for (let i = 0; i < data.length; i++) {
		suma += data[i].id;
		if (suma >= inv) {
			return contador;
		}
		contador++
	}
	return 'La inversión no se recupera en ningun ';
}
