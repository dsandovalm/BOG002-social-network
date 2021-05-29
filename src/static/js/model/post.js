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

function calculatePoints(post){
    let likes = post.stats.like.length();
    let dislikes = post.stats.dislike.length();
    let points = likes - dislikes;
    return points;  
}

function isLiked(post){
    let result = {
        isThis: false
    }
    for (const react in post.stats) {
        let index = post.stats[react].indexOf( firebase.auth().currentUser.uid );
        if ( index != -1 ) {
            result = {
                isThis: true,
                reaction: react,
                index: index,
            }
        }
    }
    return result
}



export function reactPost (postId,likeType){
    
    // Toma el post y le añade 1 like
    let postRef = firebase.firestore().collection("Posts").doc(postId).get();
    postRef.then( (post) => {
        
        /*
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
        */
        
        let current = post.data().stats;
        // Revisa que el usuario no tenga likes en el post
        let liked = isLiked( post.data() );

        // 3 casos: liked.isThis = false, liked.reaction === likeType, liked.reaction != likeType
        if( liked.isThis ) {
            current[ liked.reaction ].splice( liked.index, 1 );
            if( liked.reaction != likeType ) {
                current[likeType].push( firebase.auth().currentUser.uid );
            }
        } else {
            current[likeType].push( firebase.auth().currentUser.uid );
        }

        postRef.update({
            stats: current
        })
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });    
}
