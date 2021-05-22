import {updateName, updatePhoto, updateEmail, updatePassword} from '../model/settings.js';

const settingsPad = {
  picture: `
    <h2>Selecciona una foto para tu perfil</h2>
    <div class="input-image">
      <img src="static/images/icons/icon-uploadingImg.png" alt="">
      <input type="file" id = "photo" >Selecciona del ordenador</input>
    </div>
    <button id = "btn-update-photo" class="btn-upload">Subir</button> 
  `,
  name: `
        <h2>Escribe tu nombre</h2>
        <div>
            <p>Recuerda que si cambias tu nombre no lo podrás modificar en los proximos 60 dias</p>
            <p>
                <label for="name">Nuevo nombre </label>
                <input type="text" id="name">
            </p>
            <p>
                <label for="password">Escribe tu contraseña para validar </label>
                <input type="text" id="password">
            </p>
        </div>
        <button id = "btn-update-name" class="btn-upload">Cambiar Nombre</button>
  `,
  email: `
        <h2>Cambiar correo</h2>
        <div>
        <p>Si cambias tu correo asociado, tendrás que hacer el login con este y la información de recuperación de contraseña llegará al nuevo</p>
        <p>
            <label for="mail">Nuevo correo </label>
            <input type="text" id="mail">
        </p>
        <p>
            <label for="password">Escribe tu contraseña para validar </label>
            <input type="text" id="password">
        </p>
        </div>
        <button id = "btn-update-email" class="btn-upload">Cambiar Correo</button>
  `,
  password: `
        <h2>Cambiar contraseña</h2>
        <div>
            <p>Por seguridad se recomienda cambiar la contraseña al menos dos veces al año</p>
            <p>
                <label for="password">Contraseña actual</label>
                <input type="text" id="password">
            </p>
            <p>
                <label for="newPassword">Nueva contraseña </label>
                <input type="text" id="newPassword">
            </p>
        </div>
        <button id="btn-update-password" class="btn-upload">Cambiar Contraseña</button>
  `,
};

export const changeSettings = {
  picture() {
    document.getElementById('settPad').innerHTML = settingsPad.picture;
    const updatePhotoBtn = document.querySelector('#btn-update-photo') 
    updatePhotoBtn.addEventListener('click', (e) => {
      const photo = document.querySelector('#photo').value
      updatePhoto(photo);
    })
  },
  name() {
    document.getElementById('settPad').innerHTML = settingsPad.name;
    const updateNameBtn = document.querySelector('#btn-update-name')
    updateNameBtn.addEventListener('click', (e) => {
      const name = document.querySelector('#name').value
      updateName(name);
    })
  },
  email() {
    document.getElementById('settPad').innerHTML = settingsPad.email;
    const updateEmailBtn = document.querySelector('#btn-update-email')
    updateEmailBtn.addEventListener('click', (e) => {
      const newMail= document.querySelector('#mail').value
      updateEmail(newMail);
    })
  },
  password() {
    document.getElementById('settPad').innerHTML = settingsPad.password;
    const updatePasswordBtn = document.querySelector('#btn-update-password')
    updatePasswordBtn.addEventListener('click', (e) => {
      const newPassword = document.querySelector('#newPassword').value
      updatePassword(newPassword);
    })
  },
};
