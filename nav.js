function renderLogoutBox(){
    document.getElementById('logout_box').classList.remove('d-none');
    document.getElementById('display_column').classList.remove('display_column');
    document.getElementById('display_column').classList.add('display_column_clicked');
}

async function logout(){
    activeUserName.remove('fullnameUser');
    await backend.removeItem('activeUserName', JSON.stringify(activeUserName));
    window.location.href ='index.html?=You have logged out.';
}   
