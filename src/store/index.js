// import React from 'react'
import { createStore } from 'redux';
import rootReducer from '../reducers'
// import thunk from 'react-thunk'
// let store = createStore(rootReducer, applyMiddleware(thunk))
let store = createStore(rootReducer)

export default store;