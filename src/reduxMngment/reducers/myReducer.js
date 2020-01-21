import { INITACTION } from '../actions/actionTypes.js';

let initState = [];

const myReducer = (state = initState, action) => {
    switch (action.type){
        case INITACTION :
            return state;
        default : return state;
    }
}

export default myReducer;