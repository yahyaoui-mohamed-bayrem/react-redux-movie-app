import { INITACTION }from './actionTypes.js';

export function initFunc (whatEver){
    return {
        type: INITACTION,
        payload: whatEver
    }
}