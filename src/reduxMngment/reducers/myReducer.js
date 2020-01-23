import { ADD_MV, SEARCH_BY_RATING, SEARCH_BY_VAL} from '../actions/actionTypes.js';
import { movies } from '../../components/initFile.js';
const initState={
    movies,
    search:"",
    rate:0
}

const myReducer = (state = initState, action) => {
    switch (action.type){
        case ADD_MV :
            return {...state,movies:[...state.movies,action.payload]};
            
        case SEARCH_BY_RATING :
            // let a1=[...state];
            // a1.map(el=>el.show=(el.mvRating>=action.payload)?true:false);
            // return a1;
            return {...state,rate:action.payload};

        case SEARCH_BY_VAL :
            // let a2=[...state];
            // a2.map(el=>el.show=el.mvTitle.toUpperCase().includes(action.payload.toUpperCase())?el.show:false);
            // return a2;
            // return state.map(el=>el.show=(el.mvTitle.includes(action.payload))?el.show:false)
            return {...state,search:action.payload};

        // case INIT_SHOW :
        //     let a3=[...state];
        //     a3.map(el=>el.show=true);
        //     return a3;
        default : return state;
    }
}

export default myReducer;