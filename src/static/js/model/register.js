import { db } from '../controler/firebase_config.js';

/*Colección de datos para todos los usarios*/
export function registerData(profile) {
  const user = {
    id: profile.user.uid,
    mail: profile.user.email,
    name: profile.user.displayName,
    description: '',
    methods: '',
    photo: profile.user.photoURL,
  }
//crear el condicional para eliminar la duplicacion en la colección
  db.collection('Users').add( user )
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  return user;
}

/*Actualizar los datos de usuarios registrados con correo y contraseña*/
export const updateData = (userName, userDescription, userMethods, userPhoto) => {

  db.collection('Users').where( 'id', '==', firebase.auth().currentUser.uid)
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
              console.log("Document successfully updated!");
              window.location.assign('#/timeline');
            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
};
