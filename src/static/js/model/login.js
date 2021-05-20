import { auth } from '../controler/firebase_config.js';
import { registerData } from './register.js';

// Crear cuenta con Google
export const signUpGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const promesa = auth
    .signInWithPopup(provider)
    .then((result) => {
      if(result.additionalUserInfo.isNewUser){
        registerData(result);
      }
      window.location.assign('#/timeline');
      const credential = result.credential;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      return error;
    });
  return promesa;
};

// - - - EMAIL Y PASSWORD

// Inicio de sesión con email y password
export const logInEmail = (email, password) => {
  const promesa = auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.assign('#/timeline');
      return userCredential;
    })
    .catch((error) => {
      const errorMessage = error.message;
      // printHtml('errorMsg-signin', errorMessage);
      return {
        error: true,
        message: errorMessage,
      };
    });
  return promesa;
};

// Creación de cuenta con email y password
export const signUpEmail = (email, password) => {
  const promesa = auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      registerData(userCredential);
      window.location.assign('#/register');
      return userCredential;
    })
    .catch((error) => {
      const errorMessage = error.message;
      // printHtml('errorMsg-signup', errorMessage);
      return {
        error: true,
        message: errorMessage,
      };
    });
  return promesa;
};
