import { passwordRecover } from '../model/recover.js'

export const renderRecover = () => {
    let html = `
    <section id = "recoverPassword">
        <h1>WALKTER</h1>
        <form class = "container-recover">
            <h2>Recuperación de contraseña</h2>
            <p> Ingresa tu correo electrónico para recibir un mensaje con la información de recuperación de contraseña </p>
            <input type = "email" id = "input-email-recover" class = "input-recover" placeholder = "Correo electrónico"></input><br>
            <p id = "msg-recover"></p>
            <p id = "errorMsg-recover"></p>
            <button id = "btn-recover">Recuperar contraseña</button><br>
            <a href="#/login" class="link-forgetMyPassword" type="button">Iniciar sesión</a>
        </form>
        <footer class = "footer"><footer>
    </section>`;
    let div = document.createElement('div');
    div.innerHTML = html;

    return div
}

export function afertRenderRecover(){

    // Recuperar contraseña
    const recoverBtn = document.querySelector('#btn-recover')
    recoverBtn.addEventListener('click', (e) => {
        let recoverEmail = document.querySelector('#input-email-recover').value
        e.preventDefault();
        passwordRecover(recoverEmail);
    });

    //Borrar errores al modificar el campo correspondiente en el formulario recover
    const recoverEmailInput = document.querySelector('#input-email-recover')
    recoverEmailInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-recover').innerHTML = '';
        document.querySelector('#msg-recover').innerHTML = '';
    })  
}