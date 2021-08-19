import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCp-dyf3U_HkVB6S4gpspssxc8Bs3d0oYA',
  authDomain: 'ecommerce-5fc9b.firebaseapp.com',
  projectId: 'ecommerce-5fc9b',
  storageBucket: 'ecommerce-5fc9b.appspot.com',
  messagingSenderId: '17057546937',
  appId: '1:17057546937:web:6bb6610845739b520ad168',
}

//inicialisamos la app
const firebaseApp = firebase.initializeApp(firebaseConfig)

//construimos el objeto de autenticacion
const auth = firebase.auth()

export { auth }
