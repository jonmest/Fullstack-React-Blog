import {
    SEARCH_POSTS,
    GET_POST,
    GET_POSTS,
    CLEAR_POSTS
} from '../types';
import { act } from 'react-dom/test-utils';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case CLEAR_POSTS:
            return {
                ...state,
                posts: []
            }
        default:
            return state;
    }
}