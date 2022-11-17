async function initLogin() {
    await loadDataFromServer(); 
}

async function loadDataFromServer() {
    setURL('https://gruppe-306.developerakademie.net/smallest_backend_ever');
}


function loadSignUp(){
    document.getElementById('login_container').classList.add('d-none');
    document.getElementById('signup_container').classList.remove('d-none');
}

function loadSignIn(){
    document.getElementById('login_container').classList.remove('d-none');
    document.getElementById('signup_container').classList.add('d-none');
}








































/* async function signup() {
    let name = checkIfNameIsComplete('name');
    let email = document.getElementById('email_signup');
    let password = document.getElementById('password_signup');
    await addDataToUserInformation(name, email, password);
}

function checkIfNameIsComplete(id) {
    let regName = /^[a-zA-Z]+( [a-zA-Z]+)+$/;
    let nametocheck = document.getElementById(id).value;
    if(!regName.test(nametocheck)){
        alert('Please enter your full name (first & last name).');
        document.getElementById(id).focus();
    }else{
        return document.getElementById(id);
    }
}

async function addDataToUserInformation(name, email, password) {  
        let userInfo = { fullname: name.value, password: password.value, mail: email.value};
        userInformation.push(userInfo);
        await backend.setItem('userInformation', JSON.stringify(userInformation));
        //switchOverview('signup', 'login', 'd-none');
    }



function login() {
    let email = document.getElementById('login-email');
    let password = document.getElementById('login-password');
    let emailArray = getEmailDataFromJson();
    let index = getIndexOfArray(emailArray, email.value);
    checkLoginData(index, password);
}

function getEmailDataFromJson() {
    let emails = [];
    for (let i = 0; i < userInformation.length; i++) {
        emails.push(userInformation[i].mail);
    }
    return emails;
}

function getIndexOfArray(array, value) {
    return array.indexOf(value);
}

function checkLoginData(index, password) {
    let text;
    if (index == -1) {
        loginMailError(text);
    } else if (userInformation[index].password === password.value) {
        switchOtherHtml('summary.html?');
        checkIncognitoModeToLogin(index);
    } else {
        loginPasswordError(text);
    }
}

 */