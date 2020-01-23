import React, { Component } from 'react';
import './RatingStars.css'

class RatingStars extends Component {
    constructor(props){
        super(props)
        this.state = {
            rating:this.props.pr?this.props.pr:0
        }
    }
    changeRating = (ind)=>{
        this.setState({rating: ind}, ()=>this.props.getRating(this.state.rating))
    }
    render() {
        return (
            <div className='rating-stars' style={{cursor:'pointer'}}>
                {['✰','✰','✰','✰','✰'].map((e,i)=>{
                    return (this.state.rating>=i+1)?
                    <div key={i} onClick={()=>this.changeRating(i+1)}>🌟</div>:
                    <div key={i} onClick={()=>this.changeRating(i+1)}>{e}</div>;
                    }
                )}
            </div>
        )
    }
}
export default RatingStars;