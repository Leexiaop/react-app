import { combineReducers } from 'redux'
import user from './user'
import details from './details'

const rootReducer = combineReducers({
    user,
    details
})
export default rootReducer;