import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getInvitedAuction } from '../../actions/auctionAction'


const Auctions = ({getInvitedAuction,auctions}) => {

    useEffect(() => {
        console.log("Hello")
        getInvitedAuction()
    },[getInvitedAuction])

    return (
        <div> 
            {
                (auctions.length > 0) ? 
                    auctions.map(res =>
                        <div>{res.auctionId}</div>
                    )
                :
                null
            }
        </div>
    )
}

Auctions.propTypes = {
    getInvitedAuction: PropTypes.func.isRequired,
    auctions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auctions : state.auction.auction
})
export default connect(mapStateToProps,{getInvitedAuction})(Auctions)
