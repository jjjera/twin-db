import { createStore, applyMiddleware } from 'redux';
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export {store};
