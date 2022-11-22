

function renderSummary() {

    document.getElementById('sideTask').classList.remove('clicked');
    document.getElementById('summary').classList.add('clicked');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML += /*html*/ `
    <div class="summary_headline">
    <h1>Summary</h1>
    <div><img class="line_vertical" src="./img/line_blue.png"></div>
    <div><img class="line_horizontal" src="./img/line_horizontal.png"></div>
    <h2>Everything in a nutshell!</h2>
</div>
<div class="container">
    <div class="summary_content">
        <div class="summary_tasks">
            <div class="task_cases">
                <div class="tasks" id="task_box_1">
                    <b id="tasks_in_board" class="tasks_in_board">5</b>
                    <div>Tasks in Board</div>
                </div>
                <div class="tasks" id="task_box_2">
                    <b id="tasks_in_progress" class="tasks_in_board">2</b>
                    <div class="text_align">Tasks in Progress</div>
                </div>
                <div class="tasks" id="task_box_3">
                    <b id="tasks_feedback" class="tasks_in_board">2</b>
                    <div class="text_align">Awaiting Feedback</div>
                </div>
            </div>
            <div class="summary_urgent" id="task_box_4">                
                    <div class="urgent_container">
                        <img class="arrows" src="./img/arrow_urgent.png">  
                        <div class="urgent_amount">
                            <b id="urgent_task" class="urgent_task">1</b>           
                            <div>Urgent</div>
                        </div>                    
                </div>
                <div><img src="./img/line_urgent.png"></div>
                <div class="date_container">
                    <div><b id="current_date" class="current_date">October 16, 2022</b></div>
                    <div>Upcoming Deadline</div>
                </div>
            </div>
            <div class="last_row">
                <div class="summary_todo_container" id="task_box_5">                     
                        <div class="summary_todo">
                        <b id="amount_todos" class="amount_todos">1</b>       
                        <div>To-do</div>
                    </div>
                </div>
                <div class="summary_done_container" id="task_box_6">                   
                    <div class="summary_todo">
                        <b id="amount_done" class="amount_done">1</b>    
                        <div>Done</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="greeting_container">
            <div id="greeting"></div>
            <div id="name_contact">Sofia Müller</div>                
        </div>
    </div>
    
</div>        
</div>`;

    renderGreeting();

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

