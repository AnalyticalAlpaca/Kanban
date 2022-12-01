function renderLogoutBox(){
    document.getElementById('logout_box').classList.remove('d-none');
    document.getElementById('display_column').classList.remove('display_column');
    document.getElementById('display_column').classList.add('display_column_clicked');
}

function renderLogoutBoxMobil(){
    document.getElementById('logout_box_mobil').classList.remove('d-none');
    document.getElementById('display_column_mobil').classList.remove('display_column_mobil');
    document.getElementById('display_column_mobil').classList.add('display_column_clicked');
}

async function logout(){    
   
    window.location.href =`index.html?msg=You have logged out.`;
}   
 
