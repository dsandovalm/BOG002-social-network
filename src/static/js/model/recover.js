import { printHtml } from '../controler/loginControler.js';

// Recuperación de contraseña por correo
export const passwordRecover = (email) => {
  firebase
    .auth().sendPasswordResetEmail(email)
    .then(() => {
      printHtml('msg-recover', 'Fue enviado un mensaje a tu correo, por favor verifica');
    }).catch((error) => {
      const errorMessage = error.message;
      printHtml('errorMsg-recover', errorMessage);
    });
};
