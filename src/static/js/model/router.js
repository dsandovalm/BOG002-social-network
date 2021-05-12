import { renderTimeline } from '../views/timelineView.js';
import { renderLogin, afterRenderLogin } from '../views/loginView.js';
import { renderSettings, afterRenderSettings } from '../views/settingsView.js';
import { renderRecover, afertRenderRecover } from '../views/recoverView.js';

const container = document.getElementById('root');

export const init = () => {
  const url = window.location.hash;
  const user = firebase.auth().currentUser;
  container.innerHTML = '';

  if (user) {
    // User is signed in.
    console.log('Has iniciado sesion');
  switch (url) {
    case '#/timeline':
      container.appendChild(renderTimeline());
      break;
    case '#/settings':
      container.appendChild(renderSettings());
      afterRenderSettings();
      break;
    default:
      window.location.assign('#/timeline');
      break;
  }

  } else {
    // No user is signed in.
    console.log('No has iniciado sesion');
      switch (url) {
    case '#/login':
      container.appendChild(renderLogin());
      afterRenderLogin();
      break;
    case '#/recoverPassword':
      container.appendChild(renderRecover());
      afertRenderRecover();
      break;
    default:
      window.location.assign('#/login');
      break;
}
  }
};

/*  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.assign('#/timeline');
  } else {
    // No user is signed in.
  }
});  */
