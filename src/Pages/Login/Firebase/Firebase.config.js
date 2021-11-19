const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};


// const firebaseConfig = {
//     apiKey: "AIzaSyAFrhW7s5xCLrwMiN-zGligym-8iJdapZQ",
//     authDomain: "new-doctors-portal.firebaseapp.com",
//     projectId: "new-doctors-portal",
//     storageBucket: "new-doctors-portal.appspot.com",
//     messagingSenderId: "1026022056053",
//     appId: "1:1026022056053:web:9fe9cda740613cc1b9183c"
// };

export default firebaseConfig;