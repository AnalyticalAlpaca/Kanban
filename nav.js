function renderLogoutBox(){
    document.getElementById('logout_box').classList.remove('d-none');
    document.getElementById('display_column').classList.remove('display_column');
    document.getElementById('display_column').classList.add('display_column_clicked');
}

function logout(){
    
    window.location.href ='index.html?=You have logged out.';
}   
