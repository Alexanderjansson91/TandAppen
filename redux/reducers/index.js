import { combineReducers } from 'redux';
import { user } from './user';

//help function that reduces the functions in user to a single reducer
const Reducers = combineReducers({
  userState: user,
});

export default Reducers;
