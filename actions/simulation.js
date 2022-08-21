import { fetchAPI } from "../src/helpers/fetchAPI";

export const startAddSimulation = (data) => {
	return async (dispatch) => {

		try {
			const response = await fetchAPI('', data, 'POST');
			const body = await response.json();

			if (body.ok) {
				dispatch(addNewSimulation(data));
			} else (
				console.log(body.errores)
			)

		} catch (error) {
			console.log(error);
		}
	}
}

const addNewSimulation = (data) => {
	return {
		type: 'AddSimulation',
		payload: data
	}
}

export const startGetSimulations = () => {
	return async (dispatch) => {

		try {
			const response = await fetchAPI('');
			const body = await response.json();

			if (body.ok) {
				dispatch(getSimulations(body.simulate));
			} else (
				console.log(body.errores)
			)

		} catch (error) {
			console.log(error);
		}
	}
}

const getSimulations = (data) => {
	return {
		type: 'GetSimulations',
		payload: data
	}
}

export const startDeleteSimulation = (id) => {
	return async (dispatch) => {

		try {
			const response = await fetchAPI(`/${id}`, {}, 'DELETE');
			const body = await response.json();

			if (body.ok) {
				dispatch(deleteSimulation(id));
			} else (
				console.log(body.errores)
			)

		} catch (error) {
			console.log(error);
		}
	}
}

const deleteSimulation = (id) => {
	return {
		type: 'DeleteSimulation',
		payload: id
	}
}

export const startActiveSimulation = (simulation) => {
	return async (dispatch) => {
		dispatch(activeSimulation(simulation));
	}
}

export const activeSimulation = (simulation) => {
	return {
		type: 'ActiveSimulation',
		payload: simulation
	}
}

