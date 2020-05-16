import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index';

const logger = (store) => (next) => (action) => {
    console.log("Dispatch Action\n", JSON.stringify(action, null, 4));
    const result = next(action);
    console.log("Next State\n", JSON.stringify(store.getState(), null, 4));
    return result;
};

export default applyMiddleware(thunk, logger)(createStore)(rootReducer);