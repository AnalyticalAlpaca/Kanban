async function initLogin() {
    await loadDataFromServer();
    await init();   
}

function loadSignUp(){
    document.getElementById('login_container').classList.add('d-none');
    document.getElementById('signup_container').classList.remove('d-none');
}

function loadSignIn(){
    document.getElementById('login_container').classList.remove('d-none');
    document.getElementById('signup_container').classList.add('d-none');
}