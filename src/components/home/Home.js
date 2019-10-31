import React from 'react'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

    card1: {
        backgroundColor:'#E5E5E5',
        boxShadow: "0px 2px 3px #00000099",
        borderRadius: "5px 5px 0px 0px",
        opacity: 0.79,
        margin: 50,
        width:'100%'
    }

}))


const Home = () => {
    const classes = useStyles()
    return (
        <Card className={classes.card1}>
           <div>
               sdasdsad
           </div>
        </Card>
    )
}

export default Home


