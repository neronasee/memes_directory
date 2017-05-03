import {
  UPLOAD_MEM_SUCCESS,
  UPLOAD_MEM_FAILURE,
  FETCH_MEMES
} from './../consts/types';

const initialState = {};

export default (state=initialState, action) => {
  switch(action.type){
    case FETCH_MEMES:
    case UPLOAD_MEM_SUCCESS:
      //console.log(action.payload)
      //CHANGE FOR UPDATING
      return {...state, ...action.payload}
    case UPLOAD_MEM_FAILURE:
      return {...state, errorMessage: action.payload}
    default:
      return state;
  }
}
