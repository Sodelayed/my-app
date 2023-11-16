import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { appReducer, tasksReducer } from './reducers';

const reducer = combineReducers({
	appState: appReducer,
	tasksState: tasksReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
