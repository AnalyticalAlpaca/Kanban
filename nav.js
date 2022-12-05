function renderLogoutBox(){
    var logoutbox = document.getElementById('logout_box');
    logoutbox.classList.toggle('logout_box');
    logoutbox.classList.toggle('d-none');

    var boxstyle = document.getElementById('display_column');
    boxstyle.classList.toggle('display_column_mobil');
    boxstyle.classList.toggle('display_column_clicked');


} 

function renderLogoutBoxMobil(){
    var logoutboxMobil = document.getElementById('logout_box_mobil');
    logoutboxMobil.classList.toggle('logout_box_mobil');
    logoutboxMobil.classList.toggle('d-none');

    var boxstyleMobil = document.getElementById('display_column_mobil');
    boxstyleMobil.classList.toggle('display_column_mobil');
    boxstyleMobil.classList.toggle('display_column_clicked');



   /*  document.getElementById('logout_box_mobil').classList.remove('d-none');
    document.getElementById('display_column_mobil').classList.remove('display_column_mobil');
    document.getElementById('display_column_mobil').classList.add('display_column_clicked'); */
}

async function logout(){    
   
    window.location.href =`index.html?msg=You have logged out.`;
}   
 
