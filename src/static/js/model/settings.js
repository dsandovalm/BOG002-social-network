// Cerrar sesión//
export const signOut = () => {
  const promesa = firebase
    .auth().signOut()
    .then((user) => {
      window.location.assign('#/login');
      // Sign-out successfl.
      return user;
    }).catch((error) =>
      // An error happened.
      error);
  return promesa;
};
