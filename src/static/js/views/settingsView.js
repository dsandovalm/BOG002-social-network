import { signOut, deleteUser } from '../model/settings.js';
import { changeSettings } from './settingsPad.js';

export const renderSettings = () => {
  const html = `
        <section id="settings">
            <div class="header">
                <div>
                    <h1>WALKTER</h1>
                </div>
                <div id="home">
                    <img class="icon-home" id="icon-home" src="static/images/icons/icon-home.png">
                </div>
            </div>

            <div class="content">
                <div class="left pad">
                    <div>
                    <h2>Información Personal</h2>
                    <p id="settPic">Cambiar foto</p>
                    <p id="settName">Cambiar nombre</p>
                    <p id="settMail">Cambiar correo</p>
                    <p id="settPassword">Cambiar contraseña</p>
                    <p id="settDescription">Editar biografía</p>
                    </div>
                    <div>
                    <a id="signOut">Cerrar sesión</a><br>
                    <a id="deleteUser"> Desactivar cuenta</a>
                    </div>
                </div>
                <div class="rigth pad" id="settPad">
                    
                </div>
            </div>
        </section> 
        `;
  const div = document.createElement('div');
  div.innerHTML = html;
  return div;
};

export function afterRenderSettings() {
  
  /*Cerrar sesión*/
  const btnSignOut = document.getElementById('signOut');
  btnSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
  });

  /*Borrar usurio*/
  const btnDeleteUser = document.getElementById('deleteUser')
  btnDeleteUser.addEventListener('click',(e) => {
    e.preventDefault();
    deleteUser();
  });

  changeSettings.picture();
  
  const btnSettPic = document.getElementById('settPic');
  const btnSettName = document.getElementById('settName');
  const btnSettMail = document.getElementById('settMail');
  const btnSettPass = document.getElementById('settPassword');
  const btnSettDescr = document.getElementById('settDescription');

  btnSettPic.addEventListener('click', changeSettings.picture);
  btnSettName.addEventListener('click', changeSettings.name);
  btnSettMail.addEventListener('click', changeSettings.email);
  btnSettPass.addEventListener('click', changeSettings.password);
  btnSettDescr.addEventListener('click', changeSettings.description);

  const btnHome = document.getElementById('icon-home');
  btnHome.addEventListener('click', () => {
    window.location.assign('#/timeline');
  });
}
