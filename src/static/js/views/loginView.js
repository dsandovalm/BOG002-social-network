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
            <h1>WALKTER</h1>
            <form id="signin-form" class = "container-signin">
                <p>Inicia sesión con:</p>
                <img class="icon-gmail" id="googleSignUp" type="button" src="static/images/icons/icon-google.png" alt="Gmail">
                <img class="icon-facebook" id="facebookSignUp" type="button" src="static/images/icons/icon-facebook.png" alt="Facebook">
                <p class = "line-login">o</p>
                <input type="email" class="input-email" id="signin-email" placeholder="Correo electrónico"><br>
                <input type="password" class="input-password" id="signin-password" placeholder="Contraseña">
                <p id = "errorMsg-signin"></p>
                <a href="#/recoverPassword" class="link-forgetMyPassword" type="button">Recuperar la contraseña</a> <br>
                <button id="btn-sign-in">Iniciar sesión</button>
            </form> 
                
            <form id="signup-form" class="container-signup">
                <p class="title-Newaccount">¿No tienes una cuenta?</p>
                <div id = "register-signup">
                    <p>Inicia sesión con:</p>
                    <img class="icon-gmail" id="googleSignUp" type="button" src="static/images/icons/icon-google.png" alt="Gmail">
                    <img class="icon-facebook" id="facebookSignUp" type="button" src="static/images/icons/icon-facebook.png" alt="Facebook">
                    <p class = "line-login">o</p>
                    <p>Registrate con:</p>
                    <input type="email" class="input-signup-email" id="signup-email" placeholder="Correo electrónico"><br>
                    <input type="password" class="input-signup-password" id="signup-password" placeholder="Contraseña">
                    <p id = "errorMsg-signup"></p>
                </div>
                <button id="btn-create-account">Crear cuenta</button>                
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
    const signUpBtn = document.querySelector('#btn-create-account');
    const containerSignUp = document.querySelector('#register-signup')
    const containerSignIn = document.querySelector('#signin-form')
    signUpBtn.addEventListener('click', (e) => {
        
        let signupEmail = document.querySelector('#signup-email').value;
        let signupPassword = document.querySelector('#signup-password').value;   
        e.preventDefault();
        containerSignIn.style.display = 'none'
        containerSignUp.style.display = 'block'
        signUpEmail(signupEmail, signupPassword);
    });

    // Inicio de sesión con email y password
    const signInBtn = document.querySelector('#btn-sign-in')
    signInBtn.addEventListener('click', (e) => {
        let signinEmail = document.querySelector('#signin-email').value;
        let signinPassword = document.querySelector('#signin-password').value;
        e.preventDefault();
        logInEmail(signinEmail, signinPassword);
    })


    //Borrar errores al modificar el campo correspondiente en el formulario sign up  
    const signupEmailInput = document.querySelector('#signup-email');
    const signupPasswordInput = document.querySelector('#signup-password');

    signupEmailInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-signup').innerHTML = '';
    })
    signupPasswordInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-signup').innerHTML = '';
    })


    //Borrar errores al modificar el campo correspondiente en el formulario signin 
    const signinEmailInput = document.querySelector('#signin-email');
    const signinPasswordInput = document.querySelector('#signin-password');

    signinEmailInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-signin').innerHTML = '';
    })
    signinPasswordInput.addEventListener('change', (e) => {
        document.querySelector('#errorMsg-signin').innerHTML = '';
    })

}

export function printError(id, error){
    document.querySelector(`#${id}`).innerHTML = error;
}
