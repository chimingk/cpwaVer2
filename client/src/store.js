import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Create initial state
const initialState = {};

// Create middleware
const middleware = [thunk];

// Create Store takes three parameters
const store = createStore(
	rootReducer, 
	initialState, 
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);



// Export our Store
export default store;

