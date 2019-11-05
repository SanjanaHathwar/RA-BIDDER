import { LOGIN_SUCCESSFUL } from './type'

export const supplierLogin = (sid) => dispatch => {
    // try {
       localStorage.setItem("sid",sid)
        dispatch({
            type: LOGIN_SUCCESSFUL,
            payload:sid
        })
    // } catch (error) {
    //     dispatch({
    //         type: LOGIN_FAIL
    //     })
    // }

}
