import {
  UPLOAD_PIC_SUCCESS,
  UPLOAD_PIC_FAILURE
} from './../consts/types';

const initialState = {};

export default (state=initialState, action) => {
  switch(action.type){ 
    case UPLOAD_PIC_SUCCESS:
      return {...state, uploadedPic: action.payload}
    case UPLOAD_PIC_FAILURE:
      return {...state, error: action.payload}
    default: 
      return state;
  }
}