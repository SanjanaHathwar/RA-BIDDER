
import { GET_INVITED_AUCTIONS ,INVITED_AUCTIONS_FAIL , GET_ITEM, PARTICIPATE, SAVE_BID,SAVE_BID_FAIL, SUBMIT_BID, SUBMIT_BID_FAIL } from './type'
import Axios from 'axios'
import store from '../store'



export const getInvitedAuction = () => async dispatch => {
    const Suppid = store.getState().auth.supplierId
    try {
        
        
        const res = await Axios.post(`/auction/dq`,{
            SID : Suppid
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
    console.log(id)
    const res = await Axios.get(`/item/fetchbyId/${id}`)
    console.log(res)
    dispatch({
        type: GET_ITEM,
        payload: res.data,
    })

}


export const participateAuction = (min,price,id,endTime ) => dispatch => {
    dispatch({
        type: PARTICIPATE,
        payload: {mindecrement: min,startingprice: price , auctionId: id , endtime: endTime}
    })
}

export const saveBid = (bid) =>async dispatch => {
    const Suppid = store.getState().auth.supplierId
    console.log(bid)
    try {
        const res = await Axios.post('/auction/confirmBid3',{
            auctionId : store.getState().auction.auctionId,
            sid: Suppid,
            bid : bid,
            bstate : "SAVE"
        })
        dispatch({
            type: SAVE_BID,
            payload: bid
        })
        
    } catch (error) {
        dispatch({
            type: SAVE_BID_FAIL,
            
        })
    }
    
}
export const submitBid = (bid) =>async dispatch => {
    const Suppid = store.getState().auth.supplierId
    console.log(bid)
    try {
        const res = await Axios.post('/auction/confirmBid3',{
            auctionId : store.getState().auction.auctionId,
            sid: Suppid,
            bid : bid,
            bstate : "CONFIRM"
        })
        dispatch({
            type: SUBMIT_BID,
            payload: res.data
        })
        
    } catch (error) {
        dispatch({
            type: SUBMIT_BID_FAIL,
            payload: error
        })
    }
}
