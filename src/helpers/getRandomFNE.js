
export const getRandomFNE = (min, max, num) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	let random = [];
	let contador = 1;
	for (let i = 0; i < num; i++) {
		random.push(
			{
				year: contador,
				id: Math.floor(Math.random() * (max - min + 1) + min)
			}
		);
		contador++;

	}

	return random;
}