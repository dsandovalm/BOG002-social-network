export const signOut = () => {
  const promesa = firebase
    .auth().signOut()
    .then((user) => {
      window.location.assign('#/login');
      return user;
    }).catch((error) => error);
  return promesa;
};

/*export 
var user = firebase.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});*/
