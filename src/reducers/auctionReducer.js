import { GET_INVITED_AUCTIONS, INVITED_AUCTIONS_FAIL, GET_ITEM, PARTICIPATE } from "../actions/type";

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
    bid: null
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
                ItemName : payload.name,
                itemId: payload.id
            }
        case PARTICIPATE:
            return {
                ...state,
                bid: payload.startingprice,
                mindecrement: payload.mindecrement,
                auctionId: payload.auctionId,
                startingprice: payload.startingprice,
                endtime: payload.endtime
            }
        default : 
            return state
            
    }
}