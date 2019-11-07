import { LOWEST ,NOT_LOWEST,GET_BIDS } from './type'
import Axios from 'axios'
import store from '../store'


export const GetLowest = () => async dispatch =>{
    try {
        const res = await Axios.post(`/supplier/fetch`,{
            aid: store.getState().auction.auctionId
        })
        dispatch({
            type: GET_BIDS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)        
    }
}

export const SendWinner = () => {
    
}