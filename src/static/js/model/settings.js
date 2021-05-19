/*Cerrar sesión*/
export const signOut = () => {
  const promesa = firebase
    .auth().signOut()
    .then((user) => {
      window.location.assign('#/login');
      return user;
    }).catch((error) => error);
  return promesa;
};

/*Actualizar nombre de usuario*/
export const updateName = (name) => {
  db.collection('Users').where( 'id', '==', firebase.auth().currentUser.uid)
  .get()
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
  let user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: photo,
  }).then(function () {
    // Update successful.
  }).catch(function (error) {
    // An error happened.
  });
}

/*Configuración de correo eléctronico*/
export const updateEmail = (email) => {
  let user = firebase.auth().currentUser;
  user.updateEmail("user@example.com").then(function () {
    // Update successful.
  }).catch(function (error) {
    // An error happened.
  });
}

/*Configuración de contraseña*/

export const updatePassword = (password) => {
  let user = firebase.auth().currentUser;
  user.updatePassword(newPassword).then(function () {
    // Update successful.
  }).catch(function (error) {
    // An error happened.
  });
}

/*Desactivar cuenta*/

export const deleteUser = () => {
  let user = firebase.auth().currentUser;
  user.delete().then(function () {
    // User deleted.
  }).catch(function (error) {
    // An error happened.
  });
}


