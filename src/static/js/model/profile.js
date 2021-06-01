import { db } from '../controler/firebase_config.js';
import { modalProfile } from '../views/profilePopUp.js';

export function getUser() {
  const user = db
    .collection('Users').where('id', '==', firebase.auth().currentUser.uid)
    .get();
  return user;
}

<<<<<<< HEAD
export function getDataPost(container) {
  var post = db.collection('Posts').where('user', '==', firebase.auth().currentUser.uid)
    .get().then((snapshot) => {
      snapshot.forEach((doc) => {
        var photoRef = firebase.storage().ref().child(doc.data().photo);
        photoRef.getDownloadURL().then(function (url) {
          var btnId = `${doc.id}btn`
          var listId = `${doc.id}list`
          var html = `
                  <div id = "data-report">
                    <div id = "dropdown-post">
                      <div class = "jsBtnContainer">
                      <button id = "${btnId}" class = "optionButtons"><img  src = "static/images/icons/icon-options.png"></button>
                      </div>
                      <ul id = "${listId}" class = "options-dropdown">
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

=======
export function getDataPost(container, modalContainer) {
  const post = db.collection('Posts').where('user', '==', firebase.auth().currentUser.uid)
    .get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const photoRef = firebase.storage().ref().child(doc.data().photo);
        photoRef.getDownloadURL().then((url) => {
          const idDelete = `${doc.id}`;
          const idEdit = `${doc.id}`;
          const html = `
          <div id = "data-report">
            <div id = "dropdown-post">
              <img  src="static/images/icons/icon-options.png" class = "optionBtn">
              <ul id = "parent-list" class = "options-dropdown">
                <li id = "${idDelete}" class="deleteBtn">Eliminar Post</li>
                <li id = "${idEdit}" class="editBtn">Editar Post</li>
              </ul>
            </div>
            
            <div>
              <p>${doc.data().date.toDate()/* .toDateString() */}</p>
              <p>${doc.data().description}</p>
              <img id="img-report" class ="img-report" src = "${url}"><br>

            </div>
            <div class="profile-reactions">
              <img id="point-like" src = "static/images/icons/btn-like.png">
              <img id="point-question" src = "static/images/icons/btn-doubt.png">
              <img id="point-dislike" src = "static/images/icons/btn-dislike.png">
            </div>
          </div>`;
          container.innerHTML += html;

          /* Ciclo para los botones de eliminar post */
          let deleteBtns = document.getElementsByClassName('deleteBtn');
          for (const button of deleteBtns){
            button.addEventListener('click', () => modalProfile.delete(modalContainer, button.id));
          }

          /* Ciclo para los botones de editar post */
          let editBtns = document.getElementsByClassName('editBtn');
          for (const button of editBtns){
            button.addEventListener('click', () => modalProfile.edit(modalContainer, button.id));
          }
>>>>>>> a3606178b9ef8a14185d7c93c4ab78b01cc33f82
        })
        .catch((error) => error)
      })
    })
    .catch((error) => error)
  return post;
}

export function getUserStars(container) {
  /* - - - calculo de las estrellas - - - */
  db.collection('Posts').where('user', '==', firebase.auth().currentUser.uid)
    .get()
    .then((snapshot) => {
      const total = {
        like: 0,
        doubt: 0,
        dislike: 0,
      }

      snapshot.forEach(post => {
        total.like += post.data().stats.like.length;
        total.doubt += post.data().stats.doubt.length;
        total.dislike += post.data().stats.dislike.length;
      });

      const stars = Math.round((total.like * 5 + total.dislike * 3) / (total.like + total.doubt + total.dislike))
      let html = ``;
      // Acá iria la renderización de 5 spans o imagenes
      for (let i = 0; i < 5; i++) {
        if (i < stars) {
          html += `<span class="star star-full"> </span>`;
        } else {
          html += `<span class="star star-void"> </span>`;
        }
      }
      container.innerHtml = html;
    });
};
