import {combineReducers} from 'redux'
import suscribersReducer from './suscribers.reducer';

export default combineReducers({
    suscribers: suscribersReducer
})