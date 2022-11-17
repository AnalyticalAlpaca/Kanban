async function initLogin() {
  
    await loadDataFromServer(); 
    await downloadFromServer();
}
async function loadDataFromServer() {
    setURL('https://gruppe-306.developerakademie.net/smallest_backend_ever');
}


function loadSignUp(){
    document.getElementById('login_container').classList.add('d-none');
    document.getElementById('signup_container').classList.remove('d-none');
}

function loadLogIn(){
    document.getElementById('login_container').classList.remove('d-none');
    document.getElementById('signup_container').classList.add('d-none');
}


async function signup() {
    let name = document.getElementById('name');
    let email = document.getElementById('email_signup');
    let password = document.getElementById('password_signup');
    await userInformation.push({fullname: name.value, password: password.value, mail: email.value});
    await backend.setItem('userInformation', JSON.stringify(userInformation));
   
    loadLogIn();

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