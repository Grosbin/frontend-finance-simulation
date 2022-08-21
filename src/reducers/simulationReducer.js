import React from 'react'

const initialState = {
	data: [],
	active: {}
}

export const simulationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'AddSimulation':
			return {
				...state,
				data: [...state.data, action.payload]
			};
		case 'GetSimulations':
			return {
				...state,
				data: action.payload
			};
		case 'ActiveSimulation':
			return {
				...state,
				active: action.payload
			}
		default:
			return state;
	}
}
