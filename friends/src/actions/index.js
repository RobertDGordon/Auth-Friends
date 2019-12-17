import {axiosWithAuth} from '../utils/axiosWithAuth'

export const DATA_LOAD_START = "DATA_LOAD_START";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_FAILURE = "DATA_LOAD_FAILURE";

export const DATA_POST_START = "DATA_POST_START";
export const DATA_POST_SUCCESS = "DATA_POST_SUCCESS";
export const DATA_POST_FAILURE = "DATA_POST_FAILURE";

export const getData = () => dispatch => {
    //   console.log('dispatch',dispatch);
      dispatch({ type: DATA_LOAD_START });
      axiosWithAuth()
      .get('/friends')
      .then(res => dispatch({type: DATA_LOAD_SUCCESS, payload: res.data}))
      .catch(err => console.log(err,'get'))
    };

export const postData = (payload) => dispatch => {
    dispatch({type: DATA_POST_START});
    axiosWithAuth()
    .post('/friends', payload)
    .then(res => dispatch(getData()))
    .catch(err => console.log(err))
    }

export const deleteData = (id) => dispatch => {
    dispatch({type: DATA_POST_START});
    console.log('deleting', id)
    axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(res => dispatch(getData()))
    .catch(err => console.log(err))
    }

export const putData = (payload) => dispatch => {
    dispatch({type: DATA_POST_START});
    console.log('putting', payload.id)
    axiosWithAuth()
    .put(`/friends/${payload.id}`, payload)
    .then(res => dispatch(getData()))
    .catch(err => console.log(err))
    }