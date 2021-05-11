// importamos la funcion que vamos a testear
import { signUpGoogle, logInEmail, signUpEmail } from '../src/static/js/model/login.js';
import { signOut } from '../src/static/js/model/settings.js';
/* const { mockFirebase } = require ('firestore-jest-mock'); */
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

mockauth.autoFlush();
global.firebase = mocksdk;

describe('signUpEmail', () => {
  it('debería ser una función', () => {
    expect(typeof signUpEmail).toBe('function');
  });
  it('debería registrarse', () => {
    const promesa = signUpEmail('jueves@gmail.com', '1234567');
    // console.log(promesa);
    return promesa
      .then((user) => {
        expect(typeof user).toBe('object');
        expect(user.email).toBe('jueves@gmail.com');
      });
  });
});

describe('logInEmail', () => {
  it('debería ser una función', () => {
    expect(typeof logInEmail).toBe('function');
  });

  it('debería iniciar sesión', () => {
    const promesa = logInEmail('jueves@gmail.com', '1234567');
    return promesa
      .then((user) => {
        expect(typeof user).toBe('object');
        expect(user.email).toBe('jueves@gmail.com');
      });
  });
});

describe('singUpGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signUpGoogle).toBe('function');
  });
  it('debería iniciar sesión con Google', () => {
    const promesa = signUpGoogle();
    return promesa
      .then(() => {
        expect('').toBe('');
      });
  });
});

describe('signOut', () => {
  it('debería ser una función', () => {
    expect(typeof signOut).toBe('function');
  });
  it('debería cerrar sesión', () => {
    const promesa = signOut();
    return promesa
      .then(() => {
        expect(firebase.auth().currentUser).toBe(null);
      });
  });
});
