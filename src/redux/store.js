import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { tasksReducer } from './reducer';

const store = createStore(
	tasksReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
