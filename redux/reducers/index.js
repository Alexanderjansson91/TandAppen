import { combineReducers } from 'redux';
import { user } from './user';

//help function how sent to createStore.
const Reducers = combineReducers({
  userState: user,
});

export default Reducers;
