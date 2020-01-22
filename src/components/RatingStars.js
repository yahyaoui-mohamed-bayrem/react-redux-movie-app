import React, { Component } from 'react';
import './RatingStars.css'

class RatingStars extends Component {
    constructor({pr}){
        super({pr})
        this.state = {
            rating:pr?pr:0
        }
    }
    changeRating = (ind)=>{
        this.setState({rating: ind})
    }
    render() {
        return (
            <div className='rating-stars' style={{cursor:'pointer'}}>
                {['✰','✰','✰','✰','✰'].map((e,i)=>{
                    return (this.state.rating>=i+1)?
                    <div onClick={()=>this.changeRating(i+1)}>🌟</div>:
                    <div onClick={()=>this.changeRating(i+1)}>{e}</div>;
                    }
                )}
            </div>
        )
    }
}
export default RatingStars;