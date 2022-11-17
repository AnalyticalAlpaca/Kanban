

function renderAddTask(){
    document.getElementById('summary').classList.remove('clicked');
    document.getElementById('sideTask').classList.add('clicked');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML =`
    Halloasdasdddddddddddddddddddddddddddddddddddddddddddddddasdasddddddddddddddddddddddddddddddddddddddddddddddd`
    
}

function renderSummary(){

    document.getElementById('sideTask').classList.remove('clicked');
    document.getElementById('summary').classList.add('clicked');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML +=`
    Summary`;
}