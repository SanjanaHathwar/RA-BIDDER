
import { GET_INVITED_AUCTIONS ,INVITED_AUCTIONS_FAIL } from './type'
import Axios from 'axios'



export const getInvitedAuction = () => async dispatch => {
    try {
        
        const res = await Axios.post(`/auction/dq`,{
            SID : "S1"
        })
        dispatch({
            type: GET_INVITED_AUCTIONS,
            payload: res.data
        })
    }
    catch (error) {
        dispatch({
            type: INVITED_AUCTIONS_FAIL,
            payload: error
        })
    }
    
}