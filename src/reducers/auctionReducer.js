import { GET_INVITED_AUCTIONS, INVITED_AUCTIONS_FAIL, GET_ITEM, PARTICIPATE,SAVE_BID,SUBMIT_BID, SAVE_BID_FAIL ,GET_BIDS, LOWEST, NOT_LOWEST } from "../actions/type";
import Timsort from 'timsort'

const initialState = {
    auction: [],
    ItemName: null,
    mindecrement : null,
    auctionId: null,
    startingprice : null,
    endtime : null,
    itemId: null,
    bids:[],
    status: null,
    bid: 0,
    winner: null
}

export default function( state = initialState,action ) {
    const { payload,type } = action
    switch(type) {
        case GET_INVITED_AUCTIONS : 
            return{
                ...state,
                auction: payload
            }
        case INVITED_AUCTIONS_FAIL :
            return {
                ...state
            }

        case GET_ITEM : 

            return {
                ...state,
                ItemName : payload.itemName,
                itemId: payload.itemId
            }
        case PARTICIPATE:
            return {
                ...state,
                
                mindecrement: payload.mindecrement,
                auctionId: payload.auctionId,
                startingprice: payload.startingprice,
                endtime: payload.endtime
            }

        case SAVE_BID:
            return {
                ...state,
                bid:payload
            }
        case SAVE_BID_FAIL :
            return{
                ...state,
                
            }
        case GET_BIDS : 
            // var Sorted = Timsort.sort(payload)
            return {
                ...state,
                bids: payload
            }
        case SUBMIT_BID :
            return{
                ...state,
                bid :payload
            }

        case LOWEST :

            return {
                ...state,
                winner: 'LOWEST'
            }
        case NOT_LOWEST : 
            return {
                ...state,
                winner: "NOT LOWEST"
            }
            
        default : 
            return state
            
    }
}