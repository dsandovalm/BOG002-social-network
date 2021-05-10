// Cerrar sesión//
export const signOut = () => {
  firebase
    .auth().signOut()
    .then(() => {
      window.location.assign('#/login');
      // Sign-out successfl.
    }).catch((error) => {
      // An error happened.
    });
};
