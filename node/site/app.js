const firebaseConfig = {
    apiKey: "AIzaSyDOlKH8ohgbGEN5Bcu7U_hYpCh08fSz1hE",
    authDomain: "pojeto2mibteste.firebaseapp.com",
    projectId: "pojeto2mibteste",
    storageBucket: "pojeto2mibteste.appspot.com",
    messagingSenderId: "634010998556",
    appId: "1:634010998556:web:80a829d3f1c170dfc90cd9"
};

const emailField=document.getElementById('email');
const passwordField= document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click',()=>{ 
    const email = emailField.value; 
    const password = passwordField.value;

    firebase.auth().signinWithEmailAndPassword(email,password)
    .then((userCredential)=>{ 
        // Usuário logado com sucesso
        const user = userCredential.user 
        console.log("Usuário logado:',user");
    })
    .catch((error)=>{
        // Tratar erros de autenticação 
        const errorMessage = error.message;
        console.error('Erro de autenticação, errorMessage');
    });
});

