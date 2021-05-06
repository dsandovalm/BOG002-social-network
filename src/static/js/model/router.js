import { renderTimeline } from '../views/timelineView.js';
import { renderLogin, afterRenderLogin } from '../views/loginView.js';
import { renderSettings } from '../views/settingsView.js';
import { renderRecover, afertRenderRecover } from '../views/recoverView.js'

let container = document.getElementById('root');

export const init = () => {
    const url = window.location.hash
    container.innerHTML = '';
    
    switch(url){
        case '#/login':
            container.appendChild(renderLogin());
            afterRenderLogin();
            break;
        case '#/timeline':
            container.appendChild(renderTimeline());
            break;
        case '#/settings':
            container.appendChild(renderSettings());
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
}