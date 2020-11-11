// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: `https://platzi-store.herokuapp.com/products`,
  firebaseConfig: {
    apiKey: 'AIzaSyBv5JFUdUkGNeH0FcsNF9vqa9bYICW3b2o',
    authDomain: 'platzishop-62e5c.firebaseapp.com',
    databaseURL: 'https://platzishop-62e5c.firebaseio.com',
    projectId: 'platzishop-62e5c',
    storageBucket: 'platzishop-62e5c.appspot.com',
    messagingSenderId: '79346753519',
    appId: '1:79346753519:web:adeee3e253d0a3a1db601a',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
