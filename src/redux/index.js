import { combineReducers } from 'redux';
import profileReducer from './reducers/profile'

export default combineReducers({
    profile: profileReducer
});