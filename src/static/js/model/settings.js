import { getUser } from './profile.js';
import { db } from '../controler/firebase_config.js';

/*Actualizar nombre de usuario*/
export const updateName = (name) => {
  getUser()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      return db.collection('Users').doc(doc.id).update( {name: name} )
      .then(() => {
        console.log("Document successfully updated!");
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
}

/*Actualizar foto de perfil*/
export const updatePhoto = (photo) => {
  getUser()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      return db.collection('Users').doc(doc.id).update( {photo: photo} )
      .then(() => {
        console.log("Document successfully updated!");
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
}

/*Configuración de correo eléctronico*/
export const updateEmail = (email) => {
  //Configuración email en la colección 
  getUser()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      return db.collection('Users').doc(doc.id).update({mail: email})
      .then(() => {
        console.log("Document successfully updated!");
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

  //Configuración email en la autenticación
  let user = firebase.auth().currentUser;
  user.updateEmail(email).then(function () {
    // Update successful.
  }).catch(function (error) {
    // An error happened.
  });
}

/*Configuración de contraseña*/

export const updatePassword = (newPassword) => {
  let user = firebase.auth().currentUser;
  user.updatePassword(newPassword).then(function () {
    console.log('Update successful.')
  }).catch(function (error) {
    // An error happened.
  });
}

/*Cerrar sesión*/
export const signOut = () => {
  const promesa = firebase
    .auth().signOut()
    .then((user) => {
      console.log('Sign out')
      window.location.assign('#/login');
      return user;
    }).catch((error) => error);
  return promesa;
};

/*Desactivar cuenta*/
export const deleteUser = () => {
  //Borra el usuario en la colección
  getUser()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        firebase.firestore().collection('Users').doc(doc.id).delete();
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

  //Borra la autenticación
  let user = firebase.auth().currentUser;
  user.delete().then(function () {
    console.log('User deleted.') 
    window.location.assign('#/login');
  }).catch(function (error) {
    // An error happened.
  });
}


