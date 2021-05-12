import {
  signUpGoogle, logInEmail, signUpEmail,
} from '../model/login.js';

export const renderLogin = () => {
  const html = `
    <section id="inicio">

        <div id="Presentation">
        <h1>WALKTER</h1>
        <h2 class="slogan">Apostemos por vías más seguras para todos.</h2>
        <img class="img-login" src="static/images/Web image.png" att="app">
        </div>

        <div id="register">
            <h1>WALKTER</h1>
            <form id="signin-form" class = "container-signin">
                <div>
                    <p>¿Tienes una cuenta?</p>
                    <a id = "link-login" class = "link">Iniciar sesión</a>
                </div>
                <div id = "register-signin">
                    <button id="btn-google" class="btn-google"><img class="icon-gmail" src="static/images/icons/icon-google.png" alt="Gmail">Iniciar sesión con Google</button>
                    <p class = "line-login">o</p>
                    <input type="email" class="input-email" id="signin-email" placeholder="Correo electrónico"><br>
                    <input type="password" class="input-password" id="signin-password" placeholder="Contraseña">
                    <p id = "errorMsg-signin"></p>
                    <a href="#/recoverPassword" class="link" type="button">Recuperar la contraseña</a><br>
                    <button id="btn-sign-in">Iniciar sesión</button>
                </div>
            </form> 
                
            <form id="signup-form" class="container-signup">
                <p class="title-Newaccount">¿No tienes una cuenta?</p>
                <div id = "register-signup">
                    <button id="btn-google2" class="btn-google"><img class="icon-gmail" src="static/images/icons/icon-google.png" alt="Gmail">Iniciar sesión con Google</button>
                    <p class = "line-login">o</p>
                    <p>Registrate con:</p>
                    <input type="email" class="input-signup-email" id="signup-email" placeholder="Correo electrónico"><br>
                    <input type="password" class="input-signup-password" id="signup-password" placeholder="Contraseña">
                    <p id = "errorMsg-signup"></p>
                    <button id="btn-create-account">Crear cuenta</button> 
                </div>
                <a id = "link-signup" class="link" type="button">Registrate</a>

            </form>
        </div>

    </section>`;

  const div = document.createElement('div');
  div.innerHTML = html;

  return div;
};

export function afterRenderLogin() {
  // Ocultar y mostrar containers en interfaz login
  const containerSignUp = document.querySelector('#register-signup');
  const containerSignIn = document.querySelector('#register-signin');
  const registerBtn = document.querySelector('#link-signup');
  const loginBtn = document.querySelector('#link-login');

  registerBtn.addEventListener('click', () => {
    registerBtn.style.display = 'none';
    containerSignIn.style.display = 'none';
    containerSignUp.style.display = 'block';
    loginBtn.style.display = 'block';
  });

  loginBtn.addEventListener('click', () => {
    registerBtn.style.display = 'block';
    containerSignIn.style.display = 'block';
    containerSignUp.style.display = 'none';
    loginBtn.style.display = 'none';
  });

  // Iniciar sesión con Google
  const googleSignInBtn = document.querySelector('#btn-google');
  googleSignInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpGoogle();
  });

  // Registro con Google
  const googleSignUpBtn = document.querySelector('#btn-google2');
  googleSignUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpGoogle();
  });

  // Creación de cuenta con email y password
  const signUpBtn = document.querySelector('#btn-create-account');
  signUpBtn.addEventListener('click', (e) => {
    const signupEmail = document.querySelector('#signup-email').value;
    const signupPassword = document.querySelector('#signup-password').value;
    e.preventDefault();
    signUpEmail(signupEmail, signupPassword).then((result) => {
      if (result.error) {
        document.querySelector('#errorMsg-signup').innerHTML = result.message;
      }
    });
  });

  // Inicio de sesión con email y password
  const signInBtn = document.querySelector('#btn-sign-in');
  signInBtn.addEventListener('click', (e) => {
    const signinEmail = document.querySelector('#signin-email').value;
    const signinPassword = document.querySelector('#signin-password').value;
    e.preventDefault();
    logInEmail(signinEmail, signinPassword).then((result) => {
      if (result.error) {
        document.querySelector('#errorMsg-signin').innerHTML = result.message;
      }
    });
  });

  // Borrar errores al modificar el campo correspondiente en el formulario sign up
  const signupEmailInput = document.querySelector('#signup-email');
  const signupPasswordInput = document.querySelector('#signup-password');

  signupEmailInput.addEventListener('change', () => {
    document.querySelector('#errorMsg-signup').innerHTML = '';
  });
  signupPasswordInput.addEventListener('change', () => {
    document.querySelector('#errorMsg-signup').innerHTML = '';
  });

  // Borrar errores al modificar el campo correspondiente en el formulario signin
  const signinEmailInput = document.querySelector('#signin-email');
  const signinPasswordInput = document.querySelector('#signin-password');

  signinEmailInput.addEventListener('change', () => {
    document.querySelector('#errorMsg-signin').innerHTML = '';
  });
  signinPasswordInput.addEventListener('change', () => {
    document.querySelector('#errorMsg-signin').innerHTML = '';
  });
}
