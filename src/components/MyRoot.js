import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const MovieDescription = x =><p>this is movie info of {x}</p>

class MyRoots extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.list.map((el,i)=><Route key={i} path={"/".concat(el.mvTitle.replace(/[!@#$%^&*(),.?":{}|<>]/g,"_"))} component={()=>MovieDescription(el.mvTitle.replace(/[!@#$%^&*(),.?":{}|<>]/g,"_"))} />)}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        list: state.movies
    }
}
export default connect(mapStateToProps,null)(MyRoots);