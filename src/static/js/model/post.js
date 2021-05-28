import { db } from '../controler/firebase_config.js';

export function createPost(typeReport, photoReport, descriptionReport ) {
    
    function success(pos) {

        // Obtiene coordenadas (latitud y longitud)
        let crd = pos.coords;
        //  Crea un objeto post
        const post = {
            ubication: [ crd.latitude, crd.longitude ],
            type: typeReport,
            description: descriptionReport,
            user: firebase.auth().currentUser.uid,
            date: new Date(),
            stats: {
                like:[],
                doubt:[],
                dislike:[],
                views:0
            }
        }
        
        // Guarda el objeto post en el firestore
        firebase.firestore().
        collection("Posts").add( post )
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            
            // Guarda la foto en storage
            const photoRef = firebase.storage().ref().child(`images/${docRef.id}.jpg`);
            photoRef.put(photoReport).then((snapshot) => {
                console.log('Se ha subido una foto!', snapshot);
                return snapshot;
            });

            // Añade la direccion de la foto al campo photo del post
            firebase.firestore().
            collection("Posts").doc(docRef.id).set({
                photo: `images/${docRef.id}.jpg`
            }, { merge: true }).then(() => {
                console.log("Se ha guardado la dirección de la foto");
            }).catch((error) => {
                console.error("Error al subir la foto: ", error);
            });
        }).catch((error) => {
        console.error('Error al crear el post: ', error);
        });

        };
      
      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };
      
    return navigator.geolocation.getCurrentPosition(success, error);
    
}

export const deletePost = (postId) =>{
    db.collection('Posts').doc(postId).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}



export function reactPost (postId,likeType){

    // Opción A: stats es un campo 
    let postRef = firebase.firestore().collection('Posts').doc( postId );

    postRef.get().then( (post) => {

        let current = {}

        for (const reaction in post.data().stats) {
            current[reaction] = post.data().stats[reaction]
            let index = current[reaction].indexOf( firebase.auth().currentUser.uid );
            if( index != -1 ) {
                current[reaction].splice( index, 1 );
            }
        }

        switch(likeType){
            case 'like':
                current.like.push( firebase.auth().currentUser.uid );
                break;
            case 'dislike':
                current.dislike.push( firebase.auth().currentUser.uid );
                break;
            case 'doubt':
                current.doubt.push( firebase.auth().currentUser.uid );
                break;
            default:
                break;
        }
        postRef.update({
            stats: current
        }).then( () => {
            console.log(likeType , '!')
        }) 
       
    });
}
