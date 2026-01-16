import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDL6AXo-eDAPI_DdJ9N5xnMvqMh7HeLjCQ",
  authDomain: "internx-a69f1.firebaseapp.com",
  projectId: "internx-a69f1",
  storageBucket: "internx-a69f1.firebasestorage.app",
  messagingSenderId: "513154566068",
  appId: "1:513154566068:web:2f4d260cb8f86150c854e1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
