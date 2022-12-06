
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
    renderTasksInBoard();  
    renderTasksInProgress();
    renderTasksFeedback();
    renderUrgentTasks();
    renderTasksTodo();
    renderTasksDone();
    showUpcomingDeadline();
   
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


/* // Filter Tasks Depending On Status
toDo = tasks.filter(tasks => tasks.status == "To Do");
inProgress = tasks.filter(tasks => tasks.status == "In Progress");
awaitingFeedback = tasks.filter(tasks => tasks.status == "Awaiting Feedback");
done = tasks.filter(tasks => tasks.status == "Done"); */

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
    let urgent = tasks.filter(tasks => tasks.prio == "Urgent").length;
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

function showUpcomingDeadline(){
    duedateOutput = document.getElementById('current_date');
    let dueDate = tasks.filter(tasks => tasks.dueDate == "2022-11-15");
    console.log(dueDate);
    duedateOutput.innerHTML = dueDate; 
}


/* function upcomingDeadline(){
    let findnextDate = 
    }
 */
/* function parseDate(input) {
    var parts = input.split('-');  
      // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
      return new Date(parts[2], parts[0]-1, parts[1]); // Note: months are 0-based
      
    }
     */


/* function upcomingDeadline(){
    var nextdate, today = new Date();

    for(var i=0; i<tasks.length; i++){
        if(parseDate(tasks[i].dueDate) > today){
            nextdate = tasks[i].dueDate;
            break;
        }
    }
    
}
   */
