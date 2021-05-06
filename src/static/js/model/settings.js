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
export 

var user = firebase.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});