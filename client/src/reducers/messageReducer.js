import { SET_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
    message: ''
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_MESSAGE:
            const { message } = action.payload;
            return {
                message
            }
        default: return state
    }
}