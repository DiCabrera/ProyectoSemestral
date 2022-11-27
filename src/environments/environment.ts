// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyDJd462nVzyraifHC2KxUfOmIbcPXWsXdg",
    authDomain: "proyecto-semestral-ce970.firebaseapp.com",
    databaseURL: "https://proyecto-semestral-ce970-default-rtdb.firebaseio.com",
    projectId: "proyecto-semestral-ce970",
    storageBucket: "proyecto-semestral-ce970.appspot.com",
    messagingSenderId: "504846135462",
    appId: "1:504846135462:web:151dad889d27a8933e4467",
    measurementId: "G-WN8KFH3SLM"
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
