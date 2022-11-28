// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebase: {
    projectId: 'ionic-app-97225',
    appId: '1:432342730320:web:eb96728022d3c9f5a5b355',
    storageBucket: 'ionic-app-97225.appspot.com',
    apiKey: 'AIzaSyBC7Xa6xSK7S8_KAXksXSYv1vGmFaKmSzk',
    authDomain: 'ionic-app-97225.firebaseapp.com',
    messagingSenderId: '432342730320',
  },
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
