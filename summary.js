
 const urlParams = new URLSearchParams(window.location.search); 
 
 

async function loadDataFromServer() {    
    setURL('https://gruppe-374.developerakademie.net/smallest_backend_ever');
}

async function renderSummary() {

    await loadDataFromServer(); 
    await downloadFromServer();
    userInformation = JSON.parse(backend.getItem('userInformation')) || [];
    activeUserName = JSON.parse(backend.getItem('activeUserName')) || [];
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    allTask = JSON.parse(backend.getItem('allTask')) || [];

    

    if(window.location.search == `?Guest`) {
        setTimeout(() => {   
            name_contact.innerHTML = `Guest`;
            
          }, 1000)} 
    
    if(window.location.search == `?msg=You%20succsessfully%20logged%20in`) {
        setTimeout(() => {  
            name_contact.innerHTML = currentUser();  
            name_contact_guest.classList.add('d-none');
          }, 1000)}  
    
    
    document.getElementById('sideTask').classList.remove('clicked');
    document.getElementById('summary').classList.add('clicked');     
    
    renderGreeting();   
    renderTasksInBoard();  
    renderTasksInProgress();
    renderTasksFeedback();
    renderUrgentTasks();
    renderTasksTodo();
    renderTasksDone();
    upcomingDeadline();
   
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

function renderTasksInBoard(){
    let tasksInBoardOutput = document.getElementById('tasks_in_board');
    let tasksInBoard = tasks.length;
   /*  console.log(tasksInBoard); */
    tasksInBoardOutput.innerHTML = tasksInBoard;
}


function renderTasksInProgress(){
    let tasksInProgressOutput = document.getElementById('tasks_in_progress');
    let inProgress = tasks.filter(tasks => tasks.status == "In Progress").length;
    console.log('Tasks in Progress:' +` ${inProgress}`);
    tasksInProgressOutput.innerHTML = inProgress; 
}

function renderTasksFeedback(){
    let tasksFeedbackOutput = document.getElementById('tasks_feedback');
    let awaitingFeedback = tasks.filter(tasks => tasks.status == "Awaiting Feedback").length;
    console.log('Awaiting Feedback:' +` ${awaitingFeedback}`);
    tasksFeedbackOutput.innerHTML = awaitingFeedback; 
}


function renderUrgentTasks(){
    let tasksUrgentOutput = document.getElementById('urgent_task');
    let urgent = tasks.filter(tasks => tasks.priority == "Urgent").length;
    console.log('Urgent tasks:' +` ${urgent}`);
    tasksUrgentOutput.innerHTML = urgent; 
}

function renderTasksTodo(){
    let tasksTodoOutput = document.getElementById('amount_todos');
    let todos = tasks.filter(tasks => tasks.status == "To Do").length;
    console.log('Tasks to do:' +` ${todos}`);
    tasksTodoOutput.innerHTML = todos; 
}

function renderTasksDone(){
    let tasksDoneOutput = document.getElementById('amount_done');
    let doneTasks = tasks.filter(tasks => tasks.status == "Done").length;
    console.log('Tasks done:' +` ${doneTasks}`);
    tasksDoneOutput.innerHTML = doneTasks; 
}

/* function showUpcomingDeadline(){
    duedateOutput = document.getElementById('current_date');
    let dueDate = upcomingDeadline();
    console.log(dueDate);
    duedateOutput.innerHTML = dueDate; 
}
 */

function upcomingDeadline(){
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    duedateOutput = document.getElementById('current_date');
    
        const today = new Date().getTime();
      
        let deadlines = allTask.map((task) => {
          return new Date(task.taskDate).getTime();
        });
        console.log(deadlines);
      
        let deadlineDist = deadlines.filter(d => {
          let dist = d - today;
          return dist > 0;
        });
        console.log(deadlineDist);
      
        let closestDate = Math.min(...deadlineDist);
        console.log(closestDate);
        console.log(new Date(closestDate).toLocaleDateString('de-DE'));

        //duedateOutput.innerHTML = new Date(closestDate).toLocaleDateString('de-DE');
        duedateOutput.innerHTML = monthNames[new Date(closestDate).getMonth()] + ' ' + new Date(closestDate).getDate() + ',' + new Date(closestDate).getFullYear() ;
             
    }


    
