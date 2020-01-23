import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMV, editMV} from '../reduxMngment/actions/actionCreators.js';
import Popup from "reactjs-popup";

class EditRemove extends Component {
    constructor(props){
        super(props)
        this.state={
            mvTitle:this.props.list[this.props.pr].mvTitle,
            mvImgLink:this.props.list[this.props.pr].mvImgLink,
            mvRating:this.props.list[this.props.pr].mvRating,
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
            <div>
                
                <Popup trigger={<button >Edit</button>} position="center center" arrow={false} open={this.state.popupOpen} onClose={this.closeInit}>
                    <div>
                        <input name='mvTitle' onChange={this.handleChange} placeholder='movie title' value={this.state.mvTitle}/>
                        <input name='mvImgLink' onChange={this.handleChange} placeholder='movie image link' value={this.state.mvImgLink}/>
                        <input name='mvRating' onChange={this.handleChange} placeholder='movie rating' value={this.state.mvRating}/>
                        <button className='add-btn' onClick={()=>{this.props.editeMV(this.props.pr,this.convetNewMV(this.state)); this.popupClose()}}>add</button>
                    </div>
                </Popup>
                <button onClick={()=>this.props.deleteeMV(this.props.pr)}>Delete</button>
            </div>
        )
    }
}
const mapDisptachToProps = dispatch => {
    return {
        deleteeMV: payload => dispatch(deleteMV(payload)),
        editeMV: (payloadInd,payloadObj) => dispatch(editMV(payloadInd,payloadObj))
    }
}
const mapStateToProps = state =>{
    return {
        list: state.movies
    }
}
export default connect(mapStateToProps, mapDisptachToProps)(EditRemove);