import {
  UPLOAD_PIC_SUCCESS,
  UPLOAD_PIC_FAILURE
} from './../consts/types';

const client = window.client;

export function uploadPic () {
  return function(dispatch) {
    client.pick({
      accept: 'image/*',
      maxFiles: 1,
      fromSources: ['local_file_system', 'imagesearch']
    }).then(result => {
      if(!Object.keys(result.filesFailed)) {
        dispatch({
          type: UPLOAD_PIC_FAILURE,
          payload: "Something went wrong"
        })
      } else {
        dispatch({
          type: UPLOAD_PIC_SUCCESS,
          payload: result.filesUploaded[0].url
        })
      }
    }).catch(error => {
      dispatch({
        type: UPLOAD_PIC_FAILURE,
        payload: error
      })
    })
  }
}

export function clearUplodedPic() {
  return {
    type: UPLOAD_PIC_SUCCESS,
    payload: ''
  }
}