import { ADD_MV }from './actionTypes.js';

export function addMV (newMV){
    return {
        type: ADD_MV,
        payload: newMV
    }
}