async function loadDataFromServer() {    
    setURL('https://gruppe-374.developerakademie.net/smallest_backend_ever');
}

async function renderSummary() {

    await loadDataFromServer(); 
    await downloadFromServer();
    userInformation = JSON.parse(backend.getItem('userInformation')) || [];
    activeUserName = JSON.parse(backend.getItem('activeUserName')) || [];

    const urlParams = new URLSearchParams(window.location.search); 

    if(window.location.search == `?Guest`) {
        setTimeout(() => {   
            name_contact.innerHTML = `Guest`;
            
          }, 1000)} 
    
    if(window.location.search == `?msg=You%20succsessfully%20logged%20in`) {
        setTimeout(() => {  
            name_contact.innerHTML = currentUser();  
          }, 1000)}  
    
    
    document.getElementById('sideTask').classList.remove('clicked');
    document.getElementById('summary').classList.add('clicked');     
    
    renderGreeting();     
   
}

function currentUser(){ 
    let currentuser = activeUserName[0]['fullnameUser'];
    console.log(currentuser);
    return currentuser;
 } 
 

function renderGreeting() {
    let greetingOutput = document.getElementById('greeting');
    greetingOutput.innerHTML = checkGreetingForm();
}
function checkGreetingForm() {
    let hour = new Date().getHours();
    if (hour > 5 && hour <= 11) return 'Good morning,';
    if (hour > 11 && hour < 18) return 'Good afternoon,';
    return 'Good evening,';
}

async function logout(){    
   
     window.location.href ='index.html?=You have logged out.';
}   




