import { combineReducers } from 'redux';
import { simulationReducer } from './simulationReducer';


export const rootReducer = combineReducers({
	simulation: simulationReducer
})
