// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv11XYhjiD6wpfubQs_OS93fdKVBgTm0g",
    authDomain: "gym-trainer-634e1.firebaseapp.com",
    projectId: "gym-trainer-634e1",
    storageBucket: "gym-trainer-634e1.appspot.com",
    messagingSenderId: "386072481284",
    appId: "1:386072481284:web:b5103361ca4eebff78ef51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;