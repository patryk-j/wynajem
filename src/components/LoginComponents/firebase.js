import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const config = {
  apiKey: "AIzaSyCP2geR-FUWTjEjOueE4jpSaMkTTxEVz10",
  authDomain: "wynajemv2.firebaseapp.com",
  projectId: "wynajemv2",
  storageBucket: "wynajemv2.appspot.com",
  messagingSenderId: "415634800297",
  appId: "1:415634800297:web:c774dcc851a61dc9e4b3b8",
}

const firebase = app.initializeApp(config)

export default firebase
