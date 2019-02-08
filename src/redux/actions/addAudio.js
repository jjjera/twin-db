import { storage } from '../../firebase/firebase';
import {
  ADD_AUDIO_STARTED,
  ADD_AUDIO_COMPLETED,
  ADD_AUDIO_ERROR
} from '../actionTypes/actionTypes';
import { toast } from 'react-toastify';

export const addAudioStart = () => ({
  type: ADD_AUDIO_STARTED
});
export const addAudioSuccess = () => ({
  type: ADD_AUDIO_COMPLETED
});
export const addAudioFailure = () => ({
  type: ADD_AUDIO_ERROR
});

export const addAudio = (values, pathName) => {
  const toastId = toast('Uploading Audio, Please wait..', {
    autoClose: false
  });
  return (dispatch) =>
    new Promise(function(resolve, reject) {
      dispatch(addAudioStart());
      const timeStamp = new Date().getTime();
      const audio = values.audio[0];
      var name = timeStamp.toString().concat(audio.name);
      const audioUpload = storage.ref(`${pathName}/${name}`).put(audio);
      audioUpload.on(
        'state_changed',
        (snapshot) => {
          switch (snapshot.state) {
            case 'paused':
              reject('Upload is paused');
              dispatch(addAudioFailure('Upload is paused'));
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              reject('Permission Denied');
              dispatch(addAudioFailure('Permission Denied'));
              break;
            case 'storage/canceled':
              reject('Upload Cancelled');
              dispatch(addAudioFailure('Upload Cancelled'));
              break;
            case 'storage/unknown':
              reject('Server Response Error');
              dispatch(addAudioFailure('Server Response Error'));
              break;
          }
        },
        () => {
          toast.update(toastId, {
            render: 'Audio Uploaded successfully',
            type: toast.TYPE.SUCCESS
          });
          storage
            .ref(pathName)
            .child(name)
            .getDownloadURL()
            .then((url) => {
              dispatch(addAudioSuccess());
              resolve(url);
            });
        }
      );
    });
};
