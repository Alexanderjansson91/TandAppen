
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

import thunk from 'redux-thunk'
createStore(rootReducer, applyMiddleware(thunk)).getState()