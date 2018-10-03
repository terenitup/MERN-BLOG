import axios from 'axios';

import { SET_MESSAGE } from './types';

export function fetchMessage() {
    return function(dispatch) {
        axios.get('http://localhost:5000/')
            .then(res => {
                dispatch({
                    type: SET_MESSAGE,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }    
}

export function signUp({email, password}) {
    return function(dispatch) {
        axios.post('http://localhost:5000/api/signup', {
            email, password
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}