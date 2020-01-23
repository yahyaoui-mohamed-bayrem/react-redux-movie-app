import React, { Component } from 'react';
import { connect } from 'react-redux';
import RatingStars from './RatingStars.js';
import './MovieRender.css';
import Popup from "reactjs-popup";
import { addMV } from '../reduxMngment/actions/actionCreators.js';
import { Link } from 'react-router-dom';
import EditRemove from './EditRemove';

class MovieRender extends Component {
    constructor(props){
        super(props)
        this.state={
            mvTitle:"",
            mvImgLink:"",
            mvRating:0,
            popupOpen: null
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    popupClose = ()=>{
        this.setState({popupOpen: false})
        
    }
    closeInit=()=>{
        this.setState({
            mvTitle:"",
            mvImgLink:"",
            mvRating:0,
            popupOpen: null
        })
    }
    convetNewMV = (x)=>{
        return {
            mvTitle: x.mvTitle,
            mvImgLink: x.mvImgLink,
            mvRating:x.mvRating,
        }
    }
    render() {
        return (
            <div className='movie-render'>
                {this.props.list.filter(e=>e.mvTitle.toLowerCase().includes(this.props.searchVal.toLowerCase()) && e.mvRating>=this.props.searchRate).map((el,i)=>{
                    return (
                    <div className='movie-card' key={i}>
                    <Link  to={"/".concat(el.mvTitle.replace(/[!@#$%^&*(),.?":{}|<>]/g,"_"))} style={{textDecoration:'none', cursor:'pointer'}}>
                    
                        <RatingStars pr={el.mvRating}/>
                        <img src={el.mvImgLink} style={{width:'150px'}} alt='imgimg'/>
                        <h3 style={{textAlign:'center'}}>{el.mvTitle}</h3>
                    
                    </Link>
                    <EditRemove pr={i} style={{alignSelf: 'flex-end'}}/>
                    </div>)
                })}
                <Popup trigger={<div className='movie-card add'></div>} position="center center" arrow={false} open={this.state.popupOpen} onClose={this.closeInit}>
                    <div>
                        <input name='mvTitle' onChange={this.handleChange} placeholder='movie title'/>
                        <input name='mvImgLink' onChange={this.handleChange} placeholder='movie image link'/>
                        <input name='mvRating' onChange={this.handleChange} placeholder='movie rating'/>
                        <button className='add-btn' onClick={()=>{this.props.addIt(this.convetNewMV(this.state)); this.popupClose()}}>add</button>
                    </div>
                </Popup>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        list: state.movies,
        searchVal:state.search,
        searchRate:state.rate
    }
}
const mapDispachToProps = dispatch =>{
    return {
        addIt: obj=>dispatch(addMV(obj))
    }
}
export default connect(mapStateToProps,mapDispachToProps)(MovieRender);