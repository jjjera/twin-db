import firebase from 'firebase/app';
import '@firebase/messaging';

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    // console.log('messaging is',messaging);
    await messaging.requestPermission();
    // console.log('messaging awai',messaging);
    const token = await messaging.getToken();
    console.log('token do usuário:', token);
    return token;
  } catch (error) {
    console.log('error block called');
    console.error(error);
  }
}
