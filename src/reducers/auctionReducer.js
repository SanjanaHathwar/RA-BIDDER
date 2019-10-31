import { GET_INVITED_AUCTIONS, INVITED_AUCTIONS_FAIL } from "../actions/type";

const initialState = {
   
    itemName: null,
    auction: [],
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
        default : 
            return state
            
    }
}