import React, { Fragment } from 'react'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Auctions from './Auctions';



const useStyles = makeStyles(theme => ({

    card1: {
        backgroundColor:'#E5E5E5',
        boxShadow: "0px 2px 3px #00000099",
        borderRadius: "5px 5px 0px 0px",
        opacity: 0.79,
        margin: "15px 30px 30px",
        width: "calc(100vw - 60px)",
        padding: 15
    },

    card2: {
        background: "#E5E5E5 0% 0% no-repeat padding-box",
        boxShadow:" 0px 2px 3px #00000099",
        borderRadius: "0px 0px 5px 5px" ,
        opacity: 0.79,
        height: 'calc(100vh - 180px)',
        margin: "-25px 30px 30px",
    }


}))


const Home = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <Card className={classes.card1}>
            <span style={{color:'#23374DCC',fontSize: 20}}>
                Your invited auctions
            </span>
            </Card>
            <Card className={classes.card2}>
                <Auctions/>
            </Card>
        </Fragment>
    )
}

export default Home


