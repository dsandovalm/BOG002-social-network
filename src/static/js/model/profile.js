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

export function getUserStars(container){
  /* - - - calculo de las estrellas - - - */ 
  firebase.firestore()
  .collection('Posts').where( 'user', '==', user.id )
  .get().then((snapshot) => {
    let total = {
      like:0,
      doubt:0,
      dislike:0,
    }
    
    snapshot.forEach(post => {
      total.like += post.data().stats.like.length;
      total.doubt += post.data().stats.doubt.length;
      total.dislike += post.data().stats.dislike.length;
    });
    
    let stars = Math.round( (total.like * 5 + total.dislike * 3) / ( total.like + total.doubt + total.dislike) )
    let html = ``;
    // Acá iria la renderización de 5 spans o imagenes
    for(let i=0; i<5;i++){
      if( i<stars ) {
        html += `<span class="star star-full"></span>`
      } else {
        html += `<span class="star star-void"></span>`
      }
    }
    container.innerHtml = html;
  })
}
