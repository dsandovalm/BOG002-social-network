import {printError} from '../views/loginView.js';

// - - - GOOGLE Y FACEBOOK

//Crear cuenta con Google
export const signUpGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            window.location.assign('#/timeline')
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
};


// Crear cuenta con Facebook

export const signUpFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            window.location.assign('#/timeline')
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential typse that was used.
      var credential = error.credential;

      // ...
    });
};

// - - - EMAIL Y PASSWORD

// Inicio de sesión con email y password
export const logInEmail = (email, password) => {
    firebase
        .auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.assign('#/timeline')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            
            switch (errorCode) {
                case 'auth/wrong-password':
                    printError('errorMsg-signin-password', 'Contraseña incorrecta');
                    break;
                
                case 'auth/invalid-email':
                    printError('errorMsg-signin-email', 'Correo no válido');
                    break;

                case 'auth/user-not-found':
                    printError('errorMsg-signin-email', 'Usuario no registrado');
                    break;

                case 'auth/internal-error':
                    printError('errorMsg-signin-email', 'Error interno. Vuelve a intentarlo');
                    break;
            
                default:
                    printError('errorMsg-signin-email', errorMessage);
                    break;
            }
        });
}

// Creación de cuenta con email y password 
export const signUpEmail = (email, password) => {
    //Comprobar si el usuario existe
    firebase
        .auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("registrado")
        })
        .catch((error) => {
            
            var errorCode = error.code;
            var errorMessage = error.message;
        
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    printError('errorMsg-signup-email', 'Este usuario ya está registrado');
                    break;

                case 'auth/invalid-argument':
                    printError('errorMsg-signup-email', 'Uno de los datos ingresados es invalido');
                    break;
            
                default:
                    printError('errorMsg-signup-email', errorMessage);
                    break;
            }
        });
}