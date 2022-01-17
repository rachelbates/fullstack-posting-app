import * as api from './api';

// Action creators
// action creators are functions that return action
// an object that has a type and payload.
// use async (thunk), and instead of returnign action, we need to add async

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
     
}