import {
  updateName, updatePhoto, updateEmail, updatePassword, updateDescription,
} from '../model/settings.js';

const settingsPad = {
  picture: `
          <h2>Selecciona una foto para tu perfil</h2>
          <div id = "input-container-photo">
            <img src="static/images/icons/icon-uploadImg.png" id = "img-upload">
            <input type="file" id = "input-photo"></input>
          </div>
          <button id = "btn-update-photo" class="btn-upload">Guardar cambios</button> 
  `,
  name: `
        <h2>Edita tu nombre</h2>
        <div class="input-container">
            <p>
                <label for="name">Nombre:</label>
                <input id="name" class = "settings-input">
            </p>
            <p>
                <label for="password">Confirma tu contraseña:</label>
                <input id="password" class = "settings-input">
            </p>
            <div class = "note-container">
            <p>Nota: Recuerda que si cambias tu nombre no lo podrás modificar en los proximos 60 dias</p>
            </div>
        </div>
        <button id = "btn-update-name" class="btn-upload">Guardar cambios</button>
  `,
  email: `
        <h2>Edita tu correo</h2>
        <div class="input-container">
          <p>
              <label for="mail">Correo:</label>
              <input id="mail" class = "settings-input">
          </p>
          <p>
              <label for="password">Confirma tu contraseña:</label>
              <input id="password" class = "settings-input">
          </p>
          <div class = "note-container">
          <p>Nota: Si cambias tu correo asociado, tendrás que hacer el login con este y la información de recuperación de contraseña llegará al nuevo</p>
          </div>
        </div>
        <button id = "btn-update-email" class="btn-upload">Guardar cambios</button>
  `,
  password: `
        <h2>Edita tu contraseña</h2>
        <div class="input-container">
            <p>
                <label for="password> Contraseña actual: </label>
                <input id="password" class = "settings-input">
            </p>
            <p>
                <label for="newPassword>Nueva contraseña:</label>
                <input id="newPassword" class = "settings-input">
            </p>
            <div class = "note-container">
            <p>Nota: Por seguridad se recomienda cambiar la contraseña al menos dos veces al año</p>
            </div>
        </div>
        <button id="btn-update-password" class="btn-upload">Guardar cambios</button>
  `,
  description: `
        <h2>Edita tu biografía</h2>
        <div class="input-container">
            <p>
                <label for="description">Descripción:</label>
                <input id="newDescription" class = "settings-input">
            </p>
            <p>
                <label for="methods">Métodos de transporte:</label>
                <input id="newMethods" class = "settings-input">
            </p>
            <div class = "note-container">
            <p>Nota: Por seguridad se recomienda cambiar la contraseña al menos dos veces al año</p>
            </div>
        </div>
        <button id="btn-update-description" class="btn-upload">Guardar cambios</button>
  `,
};

export const changeSettings = {
  picture() {
    document.getElementById('settPad').innerHTML = settingsPad.picture;
    const updatePhotoBtn = document.querySelector('#btn-update-photo');
    updatePhotoBtn.addEventListener('click', () => {
      const photo = document.querySelector('#photo').value;
      updatePhoto(photo);
    });
  },
  name() {
    document.getElementById('settPad').innerHTML = settingsPad.name;
    const updateNameBtn = document.querySelector('#btn-update-name');
    updateNameBtn.addEventListener('click', () => {
      const name = document.querySelector('#name').value;
      updateName(name);
    });
  },
  email() {
    document.getElementById('settPad').innerHTML = settingsPad.email;
    const updateEmailBtn = document.querySelector('#btn-update-email');
    updateEmailBtn.addEventListener('click', () => {
      const newMail = document.querySelector('#mail').value;
      updateEmail(newMail);
    });
  },
  password() {
    document.getElementById('settPad').innerHTML = settingsPad.password;
    const updatePasswordBtn = document.querySelector('#btn-update-password');
    updatePasswordBtn.addEventListener('click', () => {
      const newPassword = document.querySelector('#newPassword').value;
      updatePassword(newPassword);
    });
  },
  description() {
    document.getElementById('settPad').innerHTML = settingsPad.description;
    const updateDescriptionBtn = document.querySelector('#btn-update-description');
    updateDescriptionBtn.addEventListener('click', () => {
      const newDescription = document.querySelector('#newDescription').value;
      const newMethods = document.querySelector('#newMethods').value;
      updateDescription(newDescription, newMethods);
    });
  },
};
