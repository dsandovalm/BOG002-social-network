import { getUser } from './profile.js';
import { db } from '../controler/firebase_config.js';

/* Actualizar nombre de usuario */
export const updateName = (name) => {
  getUser()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        db.collection('Users').doc(doc.id).update({ name: name })
          .then((result) => result)
          .catch((error) => error);
      });
    }).catch((error) => error);
};

/* Actualizar foto de perfil */
export const updatePhoto = (photo) => {
  getUser()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        db.collection('Users').doc(doc.id).update({ photo: photo })
          .then((result) => result)
          .catch((error) => error);
      });
    }).catch((error) => error);
};

/* Configuración de correo eléctronico */
export const updateEmail = (email) => {
  // Configuración email en la colección
  getUser()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        db.collection('Users').doc(doc.id).update({ mail: email })
          .then((result) => result)
          .catch((error) => error);
      });
   }).catch((error) => error);

  // Configuración email en la autenticación
  const user = firebase.auth().currentUser;
  user.updateEmail(email)
    .then((result) => result)
    .catch((error) => error);
};

/* Configuración de contraseña */
export const updatePassword = (newPassword) => {
  const user = firebase.auth().currentUser;
  user.updatePassword(newPassword)
    .then((result) => result)
    .catch((error) => error);
};

/* Configuración de descripción */
export const updateDescription = (description, methods) => {
  // Configuración descripción en la colección
  getUser()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        db.collection('Users').doc(doc.id).update({ description: description, methods: methods })
          .then((result) => result)
          .catch((error) => error);
      });
    })
    .catch((error) => error);
};

/* Cerrar sesión */
export const signOut = () => {
  const promesa = firebase
    .auth().signOut()
    .then((user) => {
      window.location.assign('#/login');
      return user;
    }).catch((error) => error);
  return promesa;
};

/* Desactivar cuenta */
export const deleteUser = () => {
  // Borra el usuario en la colección
  getUser()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firebase.firestore().collection('Users').doc(doc.id).delete();
      });
    })
    .catch((error) => error);

  // Borra la autenticación
  const user = firebase.auth().currentUser;
  user.delete()
    .then(() => {
      window.location.assign('#/login');
    })
    .catch((error) => error);
};
