import React, { Component } from 'react';
import RatingStars from './RatingStars.js';
import './SeachBarr.css';
import { connect } from 'react-redux'
import { filterByRating, filterByVal } from '../reduxMngment/actions/actionCreators.js'

class SeachBarr extends Component {
    constructor(props){
        super(props)
        this.state = {
            serchVal:"",
            searchRating:0
        }
    }
    getRating = (x)=>{
        this.setState({searchRating: x},()=>this.props.searchByRating(this.state.searchRating))
    }
    handleSearchVal = (e)=>{
        this.setState({serchVal: e.target.value},()=>this.props.serchByVal(this.state.serchVal))
    }
    render() {
        return (
            <div className='search-barr'>
                <input type='search' placeholder='Search' onChange={this.handleSearchVal}/>
                <RatingStars getRating={this.getRating}/>
            </div>
        )
    }
}
const mapDispatchToPros = dispatch => {
    return {
        searchByRating: payload => dispatch(filterByRating(payload)),
        serchByVal: payload => dispatch(filterByVal(payload))
        // initShow: ()=> dispatch(initSHOW())
    }
}
export default connect(null,mapDispatchToPros) (SeachBarr);