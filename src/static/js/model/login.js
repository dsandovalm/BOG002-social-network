import { printHtml } from '../controler/loginControler.js';

// - - - GOOGLE Y FACEBOOK

// Crear cuenta con Google
export const signUpGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((/* result */) => {
      window.location.assign('#/timeline');
      /** @type {firebase.auth.OAuthCredential} */
      // const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
    }).catch((/* error */) => {
      /* // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ... */
    });
};

// Crear cuenta con Facebook

export const signUpFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((/* result */) => {
      window.location.assign('#/timeline');
      /** @type {firebase.auth.OAuthCredential} */
      // const credential = result.credential;

      // The signed-in user info.
      // const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const accessToken = credential.accessToken;

      // ...
    })
    .catch((/* error */) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The firebase.auth.AuthCredential typse that was used.
      // const credential = error.credential;

      // ...
    });
};

// - - - EMAIL Y PASSWORD

// Inicio de sesión con email y password
export const logInEmail = (email, password) => {
  firebase
    .auth().signInWithEmailAndPassword(email, password)
    .then((/* userCredential */) => {
      window.location.assign('#/timeline');
    })
    .catch((error) => {
      const errorMessage = error.message;
      printHtml('errorMsg-signin', errorMessage);
    });
};

// Creación de cuenta con email y password
export const signUpEmail = (email, password) => {
  const promesa = firebase
    .auth().createUserWithEmailAndPassword(email, password)
    .then((/* userCredential */) => {
      window.location.assign('#/timeline');
    })
    .catch((error) => {
      const errorMessage = error.message;
      printHtml('errorMsg-signup', errorMessage);
    });
  return promesa;
};
