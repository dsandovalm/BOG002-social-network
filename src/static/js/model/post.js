import { db } from '../controler/firebase_config.js';

/* Función para crear la colección de post y post en Firestore */
export function createPost(typeReport, photoReport, descriptionReport) {
  function success(pos) {
    /* Obtiene coordenadas (latitud y longitud) */
    const crd = pos.coords;
    //  Crea un objeto post
    const post = {
      ubication: [crd.latitude, crd.longitude],
      type: typeReport,
      description: descriptionReport,
      user: firebase.auth().currentUser.uid,
      date: new Date(),
      stats: {
        like: [],
        doubt: [],
        dislike: [],
      },
    };

    // Guarda el objeto post en el firestore
    db.collection('Posts').add(post)
      .then((docRef) => {
        // Guarda la foto en storage
        const photoRef = firebase.storage().ref().child(`images/${docRef.id}.jpg`);
        photoRef.put(photoReport).then((/* snapshot */) => {
          window.location.reload();
        });

        // Añade la direccion de la foto al campo photo del post
        db.collection('Posts').doc(docRef.id).set({
          photo: `images/${docRef.id}.jpg`,
        }, { merge: true })
          .then((result) => result)
          .catch((error) => error);
      }).catch((error) => error);
  }
  const error = (err) => { err; };

  return navigator.geolocation.getCurrentPosition(success, error);
}

/* Función para borrar los post creados */
export const deletePost = (postId) => {
  db.collection('Posts').doc(postId).delete()
    .then(() => {
      window.location.reload();
    })
    .catch((error) => error);
};

/* Función para editar los posts creados */
export const updatePost = (postId, typeReport, descriptionReport) => {
  db.collection('Posts').doc(postId).update({
    type: typeReport,
    description: descriptionReport,
  })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => error);
};

/* Función de calculo de puntos por post */
export function calculatePoints(post) {
  const likes = post.stats.like.length;
  const dislikes = post.stats.dislike.length;
  return likes - dislikes;
}

function isLiked(post) {
  let result = {
    isThis: false,
  };
  for (const react in post.stats) {
    const index = post.stats[react].indexOf(firebase.auth().currentUser.uid);
    if (index !== -1) {
      result = {
        isThis: true,
        reaction: react,
        index,
      };
    }
  }
  return result;
}

export function reactPost(postId, likeType) {
  // Toma el post y le añade 1 like
  const postRef = db.collection('Posts').doc(postId);
  postRef.get()
    .then((post) => {
      const current = post.data().stats;
      // Revisa que el usuario no tenga likes en el post
      const liked = isLiked(post.data());
      // 3 casos: liked.isThis = false, liked.reaction === likeType, liked.reaction !== likeType
      if (liked.isThis) {
        current[liked.reaction].splice(liked.index, 1);
        if (liked.reaction !== likeType) {
          current[likeType].push(firebase.auth().currentUser.uid);
        }
      } else {
        current[likeType].push(firebase.auth().currentUser.uid);
      }
      postRef.update({
        stats: current,
      });
    })
    .catch((error) => error);
}
