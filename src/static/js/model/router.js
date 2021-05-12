import { renderTimeline, afterRenderTimeLine } from '../views/timelineView.js';
import { renderLogin, afterRenderLogin } from '../views/loginView.js';
import { renderSettings, afterSettingsRender } from '../views/settingsView.js';
import { renderRecover, afertRenderRecover } from '../views/recoverView.js';

const container = document.getElementById('root');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location.assign('#/timeline');
  } else {
    // No user is signed in.
  }
});

export const init = () => {
  const url = window.location.hash;
  container.innerHTML = '';
  var user = firebase.auth().currentUser;
  console.log(user)

  if (user) {
    // User is signed in.
    console.log('logged in')
    switch (url) {
      case '#/timeline':
        container.appendChild(renderTimeline());
        break;
      case '#/settings':
        container.appendChild(renderSettings());
        afterSettingsRender();
        break;
      default:
        window.location.assign('#/timeline');
        break;
    }

  } else {
    // No user is signed in.
    console.log('not logged in')
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
/*
export const init = () => {
  const url = window.location.hash;
  container.innerHTML = '';

  switch (url) {
    case '#/login':
      container.appendChild(renderLogin());
      afterRenderLogin();
      break;
    case '#/timeline':
      container.appendChild(renderTimeline());
      afterRenderTimeLine();
      break;
    case '#/settings':
      container.appendChild(renderSettings());
      afterSettingsRender();
      break;
    case '#/recoverPassword':
      container.appendChild(renderRecover());
      afertRenderRecover();
      break;
    default:
      container.appendChild(renderLogin());
      afterRenderLogin();
      break;
  }
};*/
