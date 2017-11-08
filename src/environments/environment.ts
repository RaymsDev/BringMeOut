// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCDDOfgg_LIbLKX31AvIyYeHgJ0WXfZVCs",
    authDomain: "bring-me-out.firebaseapp.com",
    databaseURL: "https://bring-me-out.firebaseio.com",
    projectId: "bring-me-out",
    storageBucket: "bring-me-out.appspot.com",
    messagingSenderId: "996670714871"
  },
  googlemaps:{
    apiKey:"AIzaSyDmokc17_MQlrqh97HKuq3WlHzJvcXVowo"
  }
};
