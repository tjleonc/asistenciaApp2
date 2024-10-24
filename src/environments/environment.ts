// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
export const environment = {

  production: false,  // Añade esta propiedad

  firebase: {
    apiKey: "AIzaSyD5QN41VxhjbgwraVD9SZWEVKqQjfwHN3k",
    authDomain: "ionic-asistencias.firebaseapp.com",
    projectId: "ionic-asistencias",
    storageBucket: "ionic-asistencias.appspot.com",
    messagingSenderId: "447452325467",
    appId: "1:447452325467:web:625cdfd821ed790342417e"
  }
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(environment.firebase);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
