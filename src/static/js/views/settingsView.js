import { signOut } from '../model/settings.js';

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
                    <p id="sesttPic">Cambiar foto</p>
                    <p id="settName">Cambiar nombre</p>
                    <p id="settMail">Cambiar correo</p>
                    <p id="settPassword">Cambiar contraseña</p>
                    </div>
                    <div>
                    <a href="#" id="signOut">Cerrar sesión</a>
                    <p>Desactivar cuenta</p>
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

export function afterSettingsRender() {
  const btnSignOut = document.getElementById('signOut');
  btnSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
  });
}
