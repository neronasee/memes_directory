import {
  UPLOAD_MEM_SUCCESS,
  UPLOAD_MEM_FAILURE,
  FETCH_MEMES,
  FETCH_SINGE_MEM,
} from './../consts/types';
import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3030';

export function getMemes() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/memes`)
      .then(response => {
        dispatch({
          type: FETCH_MEMES,
          payload: response.data
        })
      }) 
      .catch(error => {
        console.log(error)
      })
  }
}

export function getSingleMem(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/memes/${id}`)
      .then(response => {
        dispatch({
          type: FETCH_SINGE_MEM,
          payload: response.data.mem
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function uploadMem ({title, description=null, imgUrl=null}) {
  return function(dispatch) {
    const mem = {
      title,
      description,
      img: imgUrl
    };
    console.log(description)
    axios.post(`${ROOT_URL}/memes`, mem)
      .then(response => {
        dispatch({
          type: UPLOAD_MEM_SUCCESS
        })
        browserHistory.push('/browse');
      })
      .catch(error => {
        dispatch({
          type: UPLOAD_MEM_FAILURE,
          payload: "Error occured"
        })
      })
  }
}

