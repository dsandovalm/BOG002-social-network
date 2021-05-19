import { modalCreate, modalView } from './postPopUp.js';
import { bubble }  from './postBubbles.js';

//El timeline debe recibir un arreglo de posts que entran en el area de visualización

export const renderTimeline = ( /* visiblePosts = un arreglo de posts*/ ) => {
  const html = `
      <section id="muro">

      <header>
        <img class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
        <input type="text" maxlength="100" autocomplete="off">
        <img id=icon-lupa src="static/images/icons/icon-lupa.png">
      </header>
      <div id="map"></div>      
      <div id="modal"></div>

      <footer>
        <img id="icon-profile" class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-report" class="icon-report" src="static/images/icons/icon-settings.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
      </footer>

    </section>`;
    // Como se visualizarian los posts?

    /* 
    arrayPosts = [];
    visiblePosts.forEach(post => {
      arrayPosts.push(bubble.render(post));
      // Donde los pondria?
    }); */

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

export function afterRenderTimeline( /* visiblePosts = un arreglo de posts*/ ) {

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
    console.log('clickonsettings');
    window.location.assign('#/settings');
  });

  //Deberia haber un after render tambien de los posts

  /* visiblePosts.forEach(post => {
    bubble.afterRender(
      post, openPopUp( 
        modalView.render(post, user)
      )
    ) 
  }); */

}
