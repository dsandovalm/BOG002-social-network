import { getDataPost, getUserStars } from '../model/profile.js';

export const renderProfile = (user) => {
  const description = (user.description === '' ? 'Agrega una descripción...' : user.description);
  const methods = (user.methods === '' ? 'Agrega un medio de transporte...' : user.methods);

  const html = `
  <section id = "profile">
    
      <header>
        <img class="icon-home" id="icon-home" src="static/images/icons/icon-home.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
        <form autocomplete="off">
          <div>
            <input type="text" name="input-search" placeholder="Buscar una dirección...">
          </div>
        </form>
      </header>

      <div class="info-profile">
        <div id="container-data">
          <img class="user-image" src="${user.photo}">
          <h3 id="user-name">${user.name}</h3>
          <p id="user-calification" class="calification"></p>
          <h3 id="user-description">Descripción</h3>
          <p class="description">${description}</p>
          <h3 id="user-transport">Medio de transporte</h3>
          <p class="transport">${methods}</p>
         </div>

        <div id="user-post">
          <h1 class="title-reports">Mis reportes</h1>
          <p class ="line-profile"></p>
          <div id ="container-user-report"></div>
        </div>
      </div>  

      <div id ="modal-container"></div>
  </section>`;

  const div = document.createElement('div');
  div.innerHTML = html;
  return div;
};

export function afterRenderProfile() {
  const homeBtn = document.querySelector('#icon-home');
  homeBtn.addEventListener('click', () => {
    window.location.assign('#/timeline');
  });

  const settingsBtn = document.querySelector('#icon-settings');
  settingsBtn.addEventListener('click', () => {
    window.location.assign('#/settings');
  });

  const reportContainer = document.querySelector('#container-user-report');
  const modalContainer = document.querySelector('#modal-container');
  const calification = document.querySelector('#user-calification');
  getDataPost(reportContainer, modalContainer);
  getUserStars(calification);
}
