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

export const algorithm = () => dispatch =>{

    function partition ( list, prop, begin, end, pivot ){
        var piv = list[pivot];
        swap (list, pivot, end-1 );
        var store = begin;
        var ix;
        for ( ix = begin; ix < end - 1;  ++ix ) {
          if ( list[ix][prop] <= piv[prop] ) {
            swap (list, store, ix );
             ++store;
          }
        }
      swap (list, end-1, store );
        return store;
      }
      
      
      function swap(obj, a, b){
        var tmp = obj[a];
        obj[a] = obj[b];
        obj[b] = tmp;
      }
      
      function qsort( list, prop, begin, end ){
        if ( end - 1 > begin ) {
          var pivot = begin + Math.floor ( Math.random () * ( end - begin ) );
      
          pivot = partition ( list, prop, begin, end, pivot );
      
          qsort ( list, prop, begin, pivot );
          qsort ( list, prop, pivot + 1, end );
        }
      }
      
      function quick_sort( list, prop ){
        qsort ( list, prop, 0, list.length );
      }
}