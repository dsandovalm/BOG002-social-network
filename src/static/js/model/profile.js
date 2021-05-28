import { db } from '../controler/firebase_config.js';

export function getUser() {
  let user = db
    .collection('Users').where('id', '==', firebase.auth().currentUser.uid)
    .get()
  return user
}

export function getDataPost(container) {
  let post = db.collection('Posts').where('user', '==', firebase.auth().currentUser.uid)
    .get().then((snapshot) => {
      snapshot.forEach((doc) => { 
        let photoRef = firebase.storage().ref().child(doc.data().photo);
        photoRef.getDownloadURL().then(function (url) {
          let html = `
                  <div id = "data-report">
                    <div id = "dropdown-post">
                      <button class = "dropdown-btn"><img  src = "static/images/icons/icon-options.png"></button>
                      <ul class = "options-dropdown">
                        <li><button>Editar Post</button></li>
                        <li><button>Eliminar Post</button></li>
                      </ul>
                    </div>
                    <p>${doc.data().date.toDate()/* .toDateString() */}</p>
                    <p>${doc.data().description}</p>
                    <img id="img-report" class ="img-report" src = "${url}"><br>
                    <img id="point-like" src = "static/images/icons/btn-like.png"><img id="point-question" src = "static/images/icons/btn-doubt.png"><img id="point-dislike" src = "static/images/icons/btn-dislike.png">
                  </div>`
          container.innerHTML += html;      
        })
      }).catch((error) => {
        console.log('error 1')
      })
    })
    .catch((error) => {
      console.log('error 2')
    })
  return post
}


