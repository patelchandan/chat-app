import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-n32SDDZ0lKODdJu1FuHbuW4X-T9MQm4",
    authDomain: "chat-app-9072b.firebaseapp.com",
    projectId: "chat-app-9072b",
    storageBucket: "chat-app-9072b.appspot.com",
    messagingSenderId: "20432089274",
    appId: "1:20432089274:web:c41befbcacc29d45e61283",
    measurementId: "G-QJ1FB3L2P8"
})

const db = firebaseApp.firestore();

export default db;