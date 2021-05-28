
export function createPost(typeReport, photoReport, descriptionReport ) {
    // - - - - - - - - - Crea un objeto post
    function success(pos) {
        let crd = pos.coords;

        const post = {
            ubication: [ crd.latitude, crd.longitude ],
            type: typeReport,
            description: descriptionReport,
            user: firebase.auth().currentUser.uid,
            date: new Date(),
            timeline: true, // Esto pasa a ser false cuando han pasado 48 horas desde que se subió
            stats: {
                like: 0,
                meh: 0,
                dislike: 0,
                views: 0
            },
        }

        console.log(post.ubication);

        // - - - - - - - - - Guarda el objeto post en el firestore
    firebase.firestore().
    collection("Posts").add( post )
    .then((docRef) => {

        console.log("Document written with ID: ", docRef.id);

        const photoRef = firebase.storage().ref().child(`images/${docRef.id}.jpg`);
        photoRef.put(photoReport).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
            return snapshot;
        });

        firebase.firestore().
        collection("Posts").doc(docRef.id).set({
            photo: `images/${docRef.id}.jpg`
        }, { merge: true })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });

      };
      
      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };
      
    return navigator.geolocation.getCurrentPosition(success, error);
    
}

/* export function reactPost (postId,likeType){
    // Toma el post y le añade 1 like
    let promise;
    switch(likeType){
        case 'like':
            promise = firebase.firestore().collection("Posts").doc(postId).update({
                stats: {
                    like: firebase.firestore.FieldValue.increment(1),
                    dislike: firebase.firestore.FieldValue.increment(0),
                    meh: firebase.firestore.FieldValue.increment(0),
                    views: firebase.firestore.FieldValue.increment(0),
                }
            })
            break;
        case 'dislike':
            promise = firebase.firestore().collection("Posts").doc(postId).update({
                stats: {
                    like: firebase.firestore.FieldValue.increment(0),
                    dislike: firebase.firestore.FieldValue.increment(1),
                    meh: firebase.firestore.FieldValue.increment(0),
                    views: firebase.firestore.FieldValue.increment(0),
                }
            })
            break;
        case 'meh':
            promise = firebase.firestore().collection("Posts").doc(postId).update({
                stats: {
                    like: firebase.firestore.FieldValue.increment(0),
                    dislike: firebase.firestore.FieldValue.increment(0),
                    meh: firebase.firestore.FieldValue.increment(1),
                    views: firebase.firestore.FieldValue.increment(0),
                }
            })
            break;
    }
    promise.then(() => {
        console.log(likeType, ' !');
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });       
}
 */