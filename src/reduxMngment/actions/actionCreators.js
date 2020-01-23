import { ADD_MV, SEARCH_BY_RATING, SEARCH_BY_VAL } from './actionTypes.js';

export function addMV(newMV) {
    return {
        type: ADD_MV,
        payload: newMV
    }
}
export function filterByRating(rate) {
    return {
        type: SEARCH_BY_RATING,
        payload: rate
    }
}
export const filterByVal = val => ({
        type: SEARCH_BY_VAL,
        payload: val
    })

// best practice !!! your are a pro now! argument takes the name payload
// best practice !!! action creator goes by the same name of the action type exple: SEARCH_BY_VAL->searchByRating
// best practice !!! allways go with arrow func
// export const filterByVal = payload => ({
//     type: FILTER_BY_VAL,
//     payload
// })
