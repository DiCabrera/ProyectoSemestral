import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const environment = {
  firebase: {
    projectId: 'ionic-app-97225',
    appId: '1:432342730320:web:eb96728022d3c9f5a5b355',
    storageBucket: 'ionic-app-97225.appspot.com',
    apiKey: 'AIzaSyBC7Xa6xSK7S8_KAXksXSYv1vGmFaKmSzk',
    authDomain: 'ionic-app-97225.firebaseapp.com',
    messagingSenderId: '432342730320',
  },
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyBC7Xa6xSK7S8_KAXksXSYv1vGmFaKmSzk',
    authDomain: 'ionic-app-97225.firebaseapp.com',
    projectId: 'ionic-app-97225',
    storageBucket: 'ionic-app-97225.appspot.com',
    messagingSenderId: '432342730320',
    appId: '1:432342730320:web:eb96728022d3c9f5a5b355',
  },
  weather: {
    key: '78c43c7ed997615bfa3b0debf7667853',
  },
  googleAuth: {
    clientId:
      '251595914606-7hpm65gqvdvhdag1d921huutuks8p9a8.apps.googleusercontent.com',
  },
};
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
