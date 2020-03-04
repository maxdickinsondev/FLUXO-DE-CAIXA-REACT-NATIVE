import * as firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyBL8mucsVSAP0QctQwUye21GIZ1BI5dRyQ",
    authDomain: "fluxo-de-caixa-c5cd5.firebaseapp.com",
    databaseURL: "https://fluxo-de-caixa-c5cd5.firebaseio.com",
    projectId: "fluxo-de-caixa-c5cd5",
    storageBucket: "fluxo-de-caixa-c5cd5.appspot.com",
    messagingSenderId: "103848558069"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;