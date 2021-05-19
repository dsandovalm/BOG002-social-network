export function getUser(){
    console.log( firebase.auth().currentUser)
    let user = firebase.firestore()
    .collection('Users').where( 'id', '==', firebase.auth().currentUser.uid)
    .get()
    return user
  }
  