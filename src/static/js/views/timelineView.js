import { modalCreate /* , modalView */ } from './postPopUp.js';
import { displayMarker } from './postBubbles.js';
import { initMap } from '../model/location.js';

export const renderTimeline = () => {
  const html = `
      <header>
        <img id="icon-profile" class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
        <img id="icon-report" class="icon-report" src="static/images/icons/icon-add.png">
        <form autocomplete="off">
          <div>
            <input type="text" name="input-search" placeholder="Buscar una dirección...">
          </div>
        </form>
      </header>
      <div id = "post-container">
        <div id="map"></div> 
        <div id="modal"></div>
      </div>`;

  const section = document.createElement('section');
  section.setAttribute('id', 'muro');
  section.innerHTML = html;

  return section;
};

function openPopUp(div) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal').innerHTML = '';
  document.getElementById('modal').appendChild(div);
}

export function afterRenderTimeline() {
  const divMap = document.querySelector('#map');
  const map = initMap(divMap);
  displayMarker(map);

  const iconProfile = document.querySelector('#icon-profile');
  iconProfile.addEventListener('click', () => {
    window.location.assign('#/profile');
  });

  const iconReport = document.querySelector('#icon-report');
  iconReport.addEventListener('click', () => {
    openPopUp(modalCreate.render(() => {
      document.getElementById('modal').style.display = 'none';
    }));
    modalCreate.afterRender(() => {
      document.getElementById('modal').style.display = 'none';
    });
  });

  const iconSettings = document.querySelector('#icon-settings');
  iconSettings.addEventListener('click', () => {
    window.location.assign('#/settings');
  });
}
