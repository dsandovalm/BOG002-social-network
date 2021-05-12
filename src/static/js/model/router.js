import { renderTimeline, afterRenderTimeLine } from '../views/timelineView.js';
import { renderLogin, afterRenderLogin } from '../views/loginView.js';
import { renderSettings, afterRenderSettings } from '../views/settingsView.js';
import { renderRecover, afterRenderRecover } from '../views/recoverView.js';
import { renderProfile, afterRenderProfile } from '../views/profileView.js';

const container = document.getElementById('root');

export const init = () => {
  const url = window.location.hash;
  const user = firebase.auth().currentUser;
  container.innerHTML = '';

  if (user) {
    // User is signed in.
    //console.log('Has iniciado sesion');
    switch (url) {
      case '#/timeline':
        container.appendChild(renderTimeline());
        afterRenderTimeLine();
        break;
      case '#/settings':
        container.appendChild(renderSettings());
        afterRenderSettings();
        break;
      case '#/profile':
        container.appendChild(renderProfile());
        afterRenderProfile();
        break;
      default:
        window.location.assign('#/timeline');
        break;
    }
  } else {
    // No user is signed in.
    //console.log('No has iniciado sesion');
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

