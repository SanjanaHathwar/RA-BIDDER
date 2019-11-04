import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getInvitedAuction ,getItem ,participateAuction } from '../../actions/auctionAction'
import Countdown from 'react-count-down';
import CloseIcon from '@material-ui/icons/Close';
import RefreshIcon from '@material-ui/icons/Refresh';
import { 
    Grid, 
    Paper, 
    Button, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField, 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment'

const useStyles = makeStyles(theme => ({ 
    Paper: {
        width: 402,
        height: 153,
        background: "#23374D 0% 0% no-repeat padding-box",
        borderRadius: 5 ,
        opacity: 1,
        margin: 10
    },

}))
const Auctions = ({getInvitedAuction,auctions: {auction ,itemId,ItemName,mindecrement,auctionId,startingprice,endtime},getItem,participateAuction}) => {
    const classes = useStyles()
    const [open , setOpen] = useState(false)
    const [newBid,setBid] = useState(startingprice)
    let time
    const tableHeader = ["PRODUCT ID","PRODUCT NAME","UNITS OF MEASURE","STARTING PRICE","BID AMOUNT"]

    useEffect(() => {
       setBid(startingprice)
        getInvitedAuction()
    },[getInvitedAuction,startingprice])

    

    const Moment = (start) => {
       
        var gmtDateTime = moment.utc(start)
        var local = gmtDateTime.local().format('DD/MMM/YYYY  HH:mm' );
        return local
        
    }
    const timerOptions =  {
            endDate:  endtime
            
        
    }

    const participate = (item,min,price,id,endTime) => {
        
        //call getItem action
        getItem(item)
        //call participate action
        participateAuction(min,price,id,endTime)
        setOpen(true)
    }

    return (
        <div> 
            <Scrollbars  style={{ width:"100%",height:350}} >
                <Grid container spacing={0}>
                    {
                        (auction.length > 0) ? 
                            auction.map(res =>
                                
                                <Grid item xs key={res.auctionId}> 
                                    <Paper className={classes.Paper}>
                                        <span style={{marginLeft:10}}>
                                            <Grid container spacing={0}>
                                                <Grid item xs>
                                                    <span style={{color:'#E5E5E5',fontSize:18,marginLeft:5}}>Auction {res.auctionId}</span>
                                                </Grid>
                                                <Grid item xs>
                                                    <span style={{color:'#E5E5E5',font:'Light 10px/13px Roboto'}}>
                                                        Opens on :{ time = Moment(res.startTime)}
                                                    </span>
                                                </Grid>
                                            </Grid> 
                                            <br/>
                                            <div>
                                                <span style={{
                                                    textAlign: "left" ,
                                                    font: "Light 13px/18px Roboto",
                                                    letterSpacing: 0,
                                                    color:" #E5E5E5" ,
                                                    opacity: 1,
                                                    margin: 10
                                                }}>
                                                    Auction for product {} with a starting price of Rs.{res.startingPrice} and minimum decrement Rs.{res.minDecrement}  
                                                </span>
                                            </div>
                                            {
                                                res.status === "Close" ? (
                                                    <span style={{float:'right',color:'#1089FF',fontSize:16,margin: 10}}>AUCTION CLOSED</span>
                                                ) : (

                                                    <Button 
                                                        color="primary" 
                                                        variant="contained" 
                                                        style={{float:"right",margin:10,textTransform:'none'}}
                                                        disabled = {res.status === "Close"}
                                                        onClick = {() => participate(res.item,res.minDecrement,res.startingPrice,res.auctionId,res.endTime)}
                                                    >
                                                        {`Participate`}
                                                    </Button>
                                                )
                                            }
                                            
                                        </span>
                                    </Paper>
                                </Grid>  
                            )
                        :
                        null
                    }
                </Grid>
            </Scrollbars>

            <Dialog maxWidth ='xl' fullWidth={true} open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle>
                    <IconButton style={{float:"right"}} aria-label="Close"  onClick={() => setOpen(false)}>
                        <CloseIcon color="secondary"/>
                    </IconButton>
                    <IconButton style={{float:"right"}} aria-label="Refresh" >
                        <RefreshIcon color="secondary"/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <span style={{color:'#23374DCC',fontSize: 20}}>
                            Auction {auctionId}
                        </span><br/>
                        <span style={{color:'#23374DCC',fontSize: 17}}>
                            Auction for product {ItemName} with starting price of Rs.{startingprice} and minimum decrement of Rs.{mindecrement}
                        </span>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper  style={{borderRadius:"40px"}} className="timer">
                            <Countdown  className="countdown" options={timerOptions} />
                        </Paper>
                    </Grid>
                </Grid>
                <br/>
                <Table>
                    <TableHead>
                        <TableRow>
                        {
                            tableHeader.map(head => 
                                <TableCell key={head}>{head}</TableCell>
                            )
                        }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{itemId}</TableCell>
                            <TableCell>{ItemName}</TableCell>
                            <TableCell>{`Kg`}</TableCell>
                            <TableCell>{startingprice}</TableCell>
                            <TableCell>
                                <TextField
                                    id="standard-number"
                                    type="number"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={newBid}
                                    onChange = {(e) => setBid(e.target.value)}
                                    margin="dense"
                                    inputProps={{ min: "0", max: startingprice, step: mindecrement }}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                
                            
                </DialogContent><br/><br/>
                <DialogActions>
                <Button  color="primary" variant="contained">
                    Save
                </Button>
                <Button  color="primary">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

Auctions.propTypes = {
    getInvitedAuction: PropTypes.func.isRequired,
    auctions: PropTypes.object.isRequired,
    getItem : PropTypes.func.isRequired,
    ItemName : PropTypes.string,
    participateAuction: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auctions : state.auction,
   
    
    
})
export default connect(mapStateToProps,{getInvitedAuction,getItem,participateAuction})(Auctions)
