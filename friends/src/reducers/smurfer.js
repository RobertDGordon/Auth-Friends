import {
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE
  } from "../actions";

  const initialState = {
    isLoading: false,
    dataLoaded: false,
    error: "",
    data: [{}]
  };

const smurfer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_LOAD_START:
        return {
          ...state,
          isLoading: true
        };
      case DATA_LOAD_SUCCESS:
        console.log('data load success',action.payload)
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          dataLoaded: true,
        };
      case DATA_LOAD_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default smurfer;