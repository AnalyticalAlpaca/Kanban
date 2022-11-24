let userInformation = [];

const urlParams = new URLSearchParams(window.location.search);
if(window.location.search.length > 0) {
setTimeout(() => {
  msgBox.innerHTML = `You signed in successfully! You can now login.`;  
}, 1000)} 


async function initLogin() {
  
    await loadDataFromServer(); 
    await downloadFromServer();
    userInformation = JSON.parse(backend.getItem('userInformation')) || [];
    setTimeout(addClassList, 1000, 'login-overlay', 'd-none');
   
}

function addClassList(id, classList) {
    document.getElementById(id).classList.add(classList);
}


async function loadDataFromServer() {
    
    setURL('https://gruppe-374.developerakademie.net/smallest_backend_ever');
}


function loadSignUp(){
    document.getElementById('login_container').classList.add('d-none');
    document.getElementById('signup_container').classList.remove('d-none');
}

function loadLogIn(){
    document.getElementById('login_container').classList.remove('d-none');
    document.getElementById('signup_container').classList.add('d-none');
    document.getElementById('forgot_password_container').classList.add('d-none');
}

function loadForgotPassword(){
    document.getElementById('login_container').classList.add('d-none');
    document.getElementById('forgot_password_container').classList.remove('d-none');
}

async function signup() {
    let name = document.getElementById('name');
    let email = document.getElementById('email_signup');
    let password = document.getElementById('password_signup');
    
    userInformation.push({fullname: name.value, password: password.value, mail: email.value});  
    await backend.setItem('userInformation', JSON.stringify(userInformation));
      
    window.location.href = 'index.html?msg=Du hast dich erfolgreich registrie,rt';   
    
   }   
  
async function login(){
   
    let email = document.getElementById('login-email');
    let password = document.getElementById('login-password');
    let user = userInformation.find( u => u.mail == email.value && u.password == password.value);

    console.log(user);
    if(user) {
        window.location.href ='summary.html';
    }
}


function logout(){
    
           window.location.href ='index.html';
    }   

    
function guestLogin(){
    window.location.href ='summary.html';
}

function loadFormForgotPassword(){
    window.location.href ='new_password.html';
}

function loadLogInFromPasswordForm(){
    window.location.href ='index.html';
}
    
function changePassword() {
    window.location.href ='index.html';
} 







