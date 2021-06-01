import { renderTimeline, afterRenderTimeline } from '../views/timelineView.js';
import { renderLogin, afterRenderLogin } from '../views/loginView.js';
import { renderSettings, afterRenderSettings } from '../views/settingsView.js';
import { renderRecover, afterRenderRecover } from '../views/recoverView.js';
import { renderProfile, afterRenderProfile } from '../views/profileView.js';
import { renderRegister, afterRenderRegister } from '../views/registerView.js';
import { getUser } from '../model/profile.js';

const container = document.getElementById('root');

export const init = () => {
  const url = window.location.hash;
  const user = firebase.auth().currentUser;
  container.innerHTML = '';

  if (user) {
    // console.log('Has iniciado sesion');
    switch (url) {
      case '#/timeline':
        container.appendChild(renderTimeline());
        afterRenderTimeline();
        break;
      case '#/register':
        container.appendChild(renderRegister());
        afterRenderRegister();
        break;
      case '#/settings':
        container.appendChild(renderSettings());
        afterRenderSettings();
        break;
      case '#/profile':
        getUser().then((snapshot) => {
          snapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const dataUser = doc.data();
            container.appendChild(renderProfile(dataUser));
            afterRenderProfile();
          });
        });
        break;
      default:
        window.location.assign('#/timeline');
        break;
    }
  } else {
    // console.log('No has iniciado sesion');
    switch (url) {
      case '#/login':
        container.appendChild(renderLogin());
        afterRenderLogin();
        break;
      case '#/recoverPassword':
        container.appendChild(renderRecover());
        afterRenderRecover();
        break;
      default:
        window.location.assign('#/login');
        break;
    }
  }
};
/* firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.assign('#/timeline');
  } else {
    // No user is signed in.
  }
}); */
