// importamos la funcion que vamos a testear
import { signUpGoogle, logInEmail, signUpEmail } from '../src/static/js/model/login.js';
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
  it.only('debería registrarse', () => {
    const promesa = signUpEmail('jueves@gmail.com', '1234567');
    // console.log(promesa);
    return promesa
      .then((user) => {
        console.log(user);
        /* expect(typeof user).toBe('object');
        expect(user.email).toBe('jueves@gmail.com');
        expect(user.password).toBe('1234567'); */
      });
  });
});

describe('logInEmail', () => {
  it('debería ser una función', () => {
    expect(typeof logInEmail).toBe('function');
  });

  it('debería iniciar sesión', () => {
    const promesa = logInEmail('jueves@gmail.com', '1234567');
    // console.log(promesa);
  });
});

describe('singUpGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signUpGoogle).toBe('function');
  });
});
