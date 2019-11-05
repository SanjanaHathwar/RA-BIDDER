import { LOGIN_SUCCESSFUL , LOGIN_FAIL } from '../actions/type'

const initialState = {
    isAuthenticated: null,
    supplierId: null
}
export default function( state = initialState,action ) {
    const {type,payload} = action
    switch(type) {
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                isAuthenticated: true,
                supplierId: payload
              
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated:false
            }
        default :
            return {
                ...state
            }
    } 
}