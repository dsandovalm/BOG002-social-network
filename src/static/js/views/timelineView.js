import { modalCreate } from './postPopUp.js'
export const renderTimeline = () => {
  const html = `
      <section id="muro">

      <header>
        <img class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
        <input type="text" maxlength="100" autocomplete="off">
        <img id=icon-lupa src="static/images/icons/icon-lupa.png">
      </header>

      <div id="map1">
        <iframe id="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.3928106861!2d-74.24789140391782!3d4.648625932164217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1618855424331!5m2!1ses!2sco"
          style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      
      <div id="modal">
      :)
      </div>

      <footer>
        <img id="icon-profile" class="icon-profile" src="static/images/icons/icon-profile.png">
        <img id="icon-report" class="icon-report" src="static/images/icons/icon-settings.png">
        <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
      </footer>

    </section>`;

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

}
