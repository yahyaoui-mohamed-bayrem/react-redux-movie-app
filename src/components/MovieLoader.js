import React, { Component } from 'react';
import MovieRender from './MovieRender.js';
import './MovieLoader.css';

class MovieLoader extends Component{
    constructor(props){
        super(props)
        this.state={
            test:false
        }
    }
    render(){
            setTimeout(
                function() {
                    this.setState({test: true});
                }
                .bind(this),
                4000
            );
            if (this.state.test) return <MovieRender/>;
            return <img src='https://pngimage.net/wp-content/uploads/2018/06/loading-png-6.png' alt='jgj' className='spinner'/>;
          
    }
}
export default MovieLoader;