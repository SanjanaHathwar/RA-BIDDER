import { combineReducers } from 'redux'
import auctionReducer from './auctionReducer';
import authReducer from './authReducer'

export default combineReducers({
    auction: auctionReducer,
    auth : authReducer
})