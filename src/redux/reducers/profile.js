import { profileActionTypes } from '../action_types';

const INITIAL_STATE = {};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case profileActionTypes.PROFILE_SET:
      return {...state,...action.payload};
    default:
      return state
  }
};

export default profileReducer;