// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const fbConfig = {
  // Your config from Firebase Console
  apiKey: "AIzaSyD5XLQH8A2mH2Ee0fxXuFjCmYtlqTs7fXg",
    authDomain: "travelandshareit.firebaseapp.com",
    databaseURL: "https://travelandshareit.firebaseio.com",
    projectId: "travelandshareit",
    storageBucket: "travelandshareit.appspot.com",
    messagingSenderId: "719016771115",
    appId: "1:719016771115:web:ecbaba1ae9543de31af46e",
    measurementId: "G-79BT3HYL03"
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase })