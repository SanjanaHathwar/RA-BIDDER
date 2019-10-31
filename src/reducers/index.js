import { combineReducers } from 'redux'
import auctionReducer from './auctionReducer';


export default combineReducers({
    auction: auctionReducer
})