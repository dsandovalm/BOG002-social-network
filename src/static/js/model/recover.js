import { printError } from '../views/loginView.js';

// Recuperación de contraseña por correo
export const passwordRecover = (email) => {
    firebase
    .auth().sendPasswordResetEmail(email)
    .then(function () {
        printError('msg-recover', `Fue enviado un mensaje a tu correo, por favor verifica`)
    }).catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        printError('errorMsg-recover', errorMessage);
    });

}