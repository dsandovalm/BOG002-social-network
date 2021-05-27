import { modalCreate, modalView } from './postPopUp.js';
import { bubble } from './postBubbles.js';
import { geoFindMe, initMap} from '../model/location.js';
import { init } from '../controler/router.js';

//El timeline debe recibir un arreglo de posts que entran en el area de visualización

export const renderTimeline = () => {
  const html = `
    <section id="muro">

    <header>
      <img id="icon-profile" class="icon-profile" src="static/images/icons/icon-profile.png">
      <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
      <img id="icon-report" class="icon-report" src="static/images/icons/icon-add.png">
      <input type="text" maxlength="100" autocomplete="off">
      <img id=icon-lupa src="static/images/icons/icon-lupa.png">
    </header>
    <div id="map"></div>      
    <div id="modal"></div>
    </section>
    `;


  const div = document.createElement('div');
  div.innerHTML = html;

  return div;
};

function openPopUp(div) {
  console.log(div);
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal').innerHTML = '';
  document.getElementById('modal').appendChild(div);
}

function closePopUp() {
  document.getElementById('modal').style.display = 'none';
}


export function afterRenderTimeline() {

  const divMap = document.querySelector('#map');
  initMap(divMap)

  const iconProfile = document.querySelector('#icon-profile');
  iconProfile.addEventListener('click', () => {
    window.location.assign('#/profile');
  });

  const iconReport = document.querySelector('#icon-report');
  iconReport.addEventListener('click', () => {
    openPopUp(modalCreate.render());
    modalCreate.afterRender(closePopUp);
  });

  const iconSettings = document.querySelector('#icon-settings');
  iconSettings.addEventListener('click', () => {
    window.location.assign('#/settings');
  });
}
  //Deberia haber un after render tambien de los posts

  /* visiblePosts.forEach(post => {
    bubble.afterRender(
      post, openPopUp( 
        modalView.render(post, user)
      )
    ) 
  }); */