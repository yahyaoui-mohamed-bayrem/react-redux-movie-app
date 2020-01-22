import React, { Component } from 'react';
import RatingStars from './RatingStars.js';
import './SeachBarr.css';

class SeachBarr extends Component {
    constructor(){
        super()
        this.state = {
            serchValu:"",
            searchRating:0
        }
    }
    render() {
        return (
            <div className='search-barr'>
                <input type='search' placeholder='Search'/>
                <RatingStars/>
            </div>
        )
    }
}
export default SeachBarr;