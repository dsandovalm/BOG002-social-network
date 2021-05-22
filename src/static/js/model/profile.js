export function getUser(){
    let user = firebase.firestore()
    .collection('Users').where( 'id', '==', firebase.auth().currentUser.uid)
    .get()
    return user
  }