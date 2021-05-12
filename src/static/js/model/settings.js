// Cerrar sesión//
export const signOut = () => {
  const promesa = firebase
    .auth().signOut()
    .then((user) => {
      window.location.assign('#/login');
      return user;
    }).catch((error) =>
      error);
  return promesa;
};
