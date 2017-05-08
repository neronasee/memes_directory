import {
  FETCH_SINGE_MEM
} from './../consts/types';

const initialState = {};

export default (state=initialState, action) => {
  switch(action.type){
    case FETCH_SINGE_MEM:
      return {...state, mem: action.payload}
    default:
      return state;
  }
}
