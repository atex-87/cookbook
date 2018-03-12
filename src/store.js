/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './business/reducers';

const store = createStore(
    reducers,
    applyMiddleware(
		thunk,
		createLogger({
			collapsed: true,
			timestamp: false
		})
	)
);
export default store;
