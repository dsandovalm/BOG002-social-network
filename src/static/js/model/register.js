import { db } from '../controler/firebase_config.js';

/* Colección de datos para todos los usarios */
export function registerData(profile) {
  const user = {
    id: profile.user.uid,
    mail: profile.user.email,
    name: profile.user.displayName,
    description: '',
    methods: '',
    photo: profile.user.photoURL,
  };

  db.collection('Users').doc(firebase.auth().currentUser.uid).set(user)
    .then((docRef) => docRef)
    .catch((error) => error);
  return user;
}

/* Actualizar los datos de usuarios registrados con correo y contraseña */
export const updateData = (userName, userDescription, userMethods, userPhoto) => {
  db.collection('Users').where('id', '==', firebase.auth().currentUser.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        return db.collection('Users').doc(doc.id).update({
          name: userName,
          description: userDescription,
          methods: userMethods,
          photo: userPhoto,
        })
          .then(() => {
            window.location.assign('#/timeline');
          })
          .catch((error) => error);
      });
    })
    .catch((error) => error);
};
