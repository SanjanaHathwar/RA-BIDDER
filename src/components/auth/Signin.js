import React, { Fragment, useState  } from 'react'
import PropTypes from 'prop-types'
import { Card, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom'
import { supplierLogin } from '../../actions/authAction';
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({ 
    Card: {
        width:'35%',
        background: '#23374D 0% 0% no-repeat padding-box',
        borderRadius: 5,
        opacity: 1,
        margin: '10% auto',
        padding: 50
    }
}))
const Signin = ({supplierLogin,isAuthenticated}) => {
    
    const [values,setValues] = useState({
        sid:'',
        password: ''
    })
    const classes = useStyles();

 
    if(isAuthenticated){
        return <Redirect to="/home" />
    }
 
    return (
        <Fragment>
            <Card className={classes.Card}>
                <TextField 
                    margin="dense"
                    variant="outlined"
                    placeholder="Supplier Id"
                    fullWidth
                    inputProps={{
                                    style: {backgroundColor:'#EEEEEE',borderRadius: 5} 
                                }}
                    onChange={(e)=>setValues({sid:e.target.value})}
                /><br/><br/>
                <TextField 
                    margin="dense"
                    variant="outlined"
                    placeholder="Password"
                    fullWidth
                    inputProps={{
                                    style: {backgroundColor:'#EEEEEE',borderRadius: 5} 
                                }}
                    onChange={(e)=>setValues({password:e.target.value})}
                />
                <br/><br/>
                <Button fullWidth variant="contained" color="primary" onClick={()=>supplierLogin(values.sid)} style={{textTransform:'none'}}>Login as Supplier</Button>
            </Card>
            
        </Fragment>
    )
}

Signin.propTypes = {
    supplierLogin : PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{supplierLogin})(Signin)
