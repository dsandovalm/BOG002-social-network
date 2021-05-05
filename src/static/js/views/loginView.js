import { signUpGoogle, signUpFacebook, logInEmail, signUpEmail } from '../model/login.js'

export const renderLogin = () => {
    let html = `
    <section id="inicio">

        <div id="Presentation">
        <h1>WALKTER</h1>
        <h2 class="slogan">Apostemos por vías más seguras para todos.</h2>
        <img class="img-login" src="static/images/Web image.png" att="app">
        </div>

        <div id="register">
            <form id="signin-form" class = "container-signin">
                <h1>WALKTER</h1>
                <input type="email" class="input-email" id="signin-email" placeholder="Correo electrónico">
                <p id = "errorMsg-signin-email"></p>
                <input type="password" class="input-password" id="signin-password" placeholder="Contraseña">
                <p id = "errorMsg-signin-password"></p>
                <a href="#/recoverPassword" class="link-forgetMyPassword" type="button">Recuperar la contraseña</a> <br>
                <button id="btn-sign-in" name="boton">Iniciar sesión</button>
                <span class="line"></span>
            </form> 
                
            <form id="signup-form" class="container-signup">
                <p class="title-Newaccount">¿No tienes una cuenta?</p>
                <p class="snRegister">Registrarme con:</p>
                <input type="email" class="input-signup-email" id="signup-email" placeholder="Correo electrónico">
                <p id = "errorMsg-signup-email"></p>
                <input type="password" class="input-signup-password" id="signup-password" placeholder="Contraseña">
                <p id = "errorMsg-signup-password"></p>
                <button id="btn-create-account" name="boton">Crear cuenta</button>
                <span class="line">o</span>
                <img class="icon-gmail" id="googleSignUp" type="button" src="static/images/icons/icon-google.png" alt="Gmail">
                <img class="icon-facebook" id="facebookSignUp" type="button" src="static/images/icons/icon-facebook.png" alt="Facebook">
            </form>
        </div>

    </section>`;

    let div = document.createElement('div');
    div.innerHTML = html;

    return div
}

export function afterRenderLogin() {
    //Iniciar sesión con Google
    const googleSignUpBtn = document.querySelector('#googleSignUp')
    googleSignUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signUpGoogle();
    });

    //Iniciar sesión con Facebook
    const fbSignUpBtn = document.querySelector('#facebookSignUp')
    fbSignUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signUpFacebook();
    });

    // Creación de cuenta con email y password 
    const signUpBtn = document.querySelector('#btn-create-account')
<<<<<<< HEAD
    const signUpPasswordMsg = document.querySelector('#errorMsg-signup-password')
=======
    //const signupForm = document.querySelector('#signup-form');
    
>>>>>>> 50acefd7070ead636e3fea54639852379775d74f
    signUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let signupEmail = document.querySelector('#signup-email').value;
        let signupPassword = document.querySelector('#signup-password').value;

        if (signupEmail == 0 || signupPassword == 0) {
            signUpPasswordMsg.innerHTML = `Hay campos que se encuentran vacios`
        }
        else {
            signUpEmail(signupEmail, signupPassword);
        }
    });

    // Inicio de sesión con email y password
    const signInBtn = document.querySelector('#btn-sign-in')
<<<<<<< HEAD
    const signInPasswordMsg = document.querySelector('#errorMsg-signin-password')
    signInBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let signinEmail = document.querySelector('#signin-email').value;
        let signinPassword = document.querySelector('#signin-password').value;

        if (signinEmail == 0 || signinPassword == 0) {
            signInPasswordMsg.innerHTML = `Hay campos que se encuentran vacios`
        }
        else {
            logInEmail(signinEmail, signinPassword);
        }
=======
    const signinForm = document.querySelector('#signin-form')
    signInBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const signinEmail = document.querySelector('#signin-email').value;
        const signinPassword = document.querySelector('#signin-password').value;
        logInEmail(signinEmail, signinPassword,signinForm);
>>>>>>> 50acefd7070ead636e3fea54639852379775d74f
    })

    //Borrar errores al modificar el campo correspondiente

    const signupEmailInput = document.querySelector('#signup-email');
    const signupPasswordInput = document.querySelector('#signup-password');

    signupEmailInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-signup-email').innerHTML = '';
    })

    signupPasswordInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-signup-password').innerHTML = '';
    })

    const signinEmailInput = document.querySelector('#signin-email');
    const signinPasswordInput = document.querySelector('#signin-password');

    signinEmailInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-signin-email').innerHTML = '';
    })

    signinPasswordInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-signin-password').innerHTML = '';
    })

}

export function printError(id, error){
    document.querySelector(`#${id}`).innerHTML = error;
}
