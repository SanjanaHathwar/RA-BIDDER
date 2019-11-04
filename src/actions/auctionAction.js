
import { GET_INVITED_AUCTIONS ,INVITED_AUCTIONS_FAIL , GET_ITEM, PARTICIPATE } from './type'
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

export const getItem = (Itemid) => async dispatch => {

    const  id= Itemid.split('#')[1]
    const res = await Axios.get(`/item/fetchbyId/${id}`)
    dispatch({
        type: GET_ITEM,
        payload: {name:res.data.itemName,id:id},
    })

}


export const participateAuction = (min,price,id,endTime ) => dispatch => {
    dispatch({
        type: PARTICIPATE,
        payload: {mindecrement: min,startingprice: price , auctionId: id , endtime: endTime}
    })
}