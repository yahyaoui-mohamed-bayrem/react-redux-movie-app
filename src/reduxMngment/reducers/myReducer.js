import { ADD_MV } from '../actions/actionTypes.js';
import { initState } from '../../components/initFile.js';

const myReducer = (state = initState, action) => {
    switch (action.type){
        case ADD_MV :
            return [...state, action.payload];
        default : return state;
    }
}

export default myReducer;