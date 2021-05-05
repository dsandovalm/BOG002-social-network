export const renderRecover = () => {
    let html = `
    <section id = "recoverPassword">
        <h1>WALKTER</h1>
        <div class = "container-recover">
            <h2>Recuperación de contraseña</h2>
            <p> Ingresa tu correo electrónico para recibir un correo con la información para recuperar la contraseña </p>
            <input id = input-email-recover class = "input-recover" placeholder = "Correo electrónico"></input>
            <button id = "btn-recover">Recuperar contraseña</button><br>
            <a href="#/login" class="link-forgetMyPassword" type="button">Iniciar sesión</a>
        <div>
    </section>
    `;
    let div = document.createElement('div');
    div.innerHTML = html;

    return div
}