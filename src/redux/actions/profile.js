import { profileActionTypes } from '../action_types';

export const setProfile = profileData => (
  {
    type: profileActionTypes.PROFILE_SET,
    payload: profileData,
  }
);