import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCI-k7aghM4eBySikmI4ELOHtNjCGUXUXU",
    authDomain: "flyinoz.firebaseapp.com",
    projectId: "flyinoz",
    storageBucket: "flyinoz.appspot.com",
    messagingSenderId: "1080103279122",
    appId: "1:1080103279122:web:3135d9a3638f05dbc3d6cb"
};

firebase.initializeApp(firebaseConfig);

export default firebase;