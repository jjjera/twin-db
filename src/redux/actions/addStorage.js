import { storage } from '../../firebase/firebase';
import {
  ADD_IMAGE_STARTED,
  ADD_IMAGE_COMPLETED,
  ADD_IMAGE_ERROR
} from '../actionTypes/actionTypes';
import { toast } from 'react-toastify';

export const addImageStart = () => ({
  type: ADD_IMAGE_STARTED
});
export const addImageSuccess = () => ({
  type: ADD_IMAGE_COMPLETED
});
export const addImageFailure = () => ({
  type: ADD_IMAGE_ERROR
});

export const addImage = (values, pathName) => {
  const toastId = toast('Uploading Image, Please wait..', {
    autoClose: false
  });
  return (dispatch) =>
    new Promise(function(resolve, reject) {
      dispatch(addImageStart());
      const timeStamp = new Date().getTime();
      const image = values.profilePicture[0];
      var name = timeStamp.toString().concat(image.name);
      const imageUpload = storage.ref(`${pathName}/${name}`).put(image);
      imageUpload.on(
        'state_changed',
        (snapshot) => {
          switch (snapshot.state) {
            case 'paused':
              reject('Upload is paused');
              dispatch(addImageFailure('Upload is paused'));
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              reject('Permission Denied');
              dispatch(addImageFailure('Permission Denied'));
              break;
            case 'storage/canceled':
              reject('Upload Cancelled');
              dispatch(addImageFailure('Upload Cancelled'));
              break;
            case 'storage/unknown':
              reject('Server Response Error');
              dispatch(addImageFailure('Server Response Error'));
              break;
          }
        },
        () => {
          toast.update(toastId, {
            render: 'Image Uploaded successfully',
            type: toast.TYPE.SUCCESS
          });
          storage
            .ref(pathName)
            .child(name)
            .getDownloadURL()
            .then((url) => {
              dispatch(addImageSuccess());
              resolve(url);
            });
        }
      );
    });
};
