
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
    document.getElementById('content').innerHTML += /*html*/ `
    <div class="summary_headline">
    <h1>Summary</h1>
    <div><img src="./img/line_blue.png"></div>
    <h2>Everything in a nutshell!</h2>
</div>
<div class="container">
    <div class="summary_content">
        <div class="summary_tasks">
            <div class="task_cases">
                <div class="tasks" id="task_box_1" onmouseover=onmouseoverBoard() onmouseout=onmouseoutBoard()>
                    <div><b id="tasks_in_board" class="tasks_in_board">5</b></div>
                    <div>Tasks in Board</div>
                </div>
                <div class="tasks" id="task_box_2" onmouseover=onmouseoverProgress() onmouseout=onmouseoutProgress() >
                    <div><b id="tasks_in_progress" class="tasks_progress">2</b></div>
                    <div class="text_align">Tasks in Progress</div>
                </div>
                <div class="tasks" id="task_box_3" onmouseover=onmouseoverFeedback() onmouseout=onmouseoutFeedback()>
                    <div><b id="tasks_feedback" class="tasks_feedback">2</b></div>
                    <div class="text_align">Awaiting Feedback</div>
                </div>
            </div>
            <div class="summary_urgent" id="task_box_4" onmouseover=onmouseoverUrgent() onmouseout=onmouseoutUrgent()>                
                    <div class="urgent_container">
                        <img class="arrows" src="./img/arrow_urgent.png">  
                        <div class="urgent_amount">
                            <div><b id="urgent_task" class="urgent_task">1</b></div>              
                            <div class="text_urgent">Urgent</div>
                        </div>                    
                </div>


                <div><img src="./img/line_urgent.png"></div>
                <div class="date_container">
                    <div><b id="current_date">October 16, 2022</b></div>
                    <div class="text">Upcoming Deadline</div>
                </div>
            </div>
            <div class="last_row">
                <div class="summary_todo_container">
                    <div>
                    <div class="img_todo"><img class="img_pencil" src="./img/pencil.png"></div>
                    </div>
                    <div class="summary_todo">
                        <b id="amount_todos">1</b>              
                        <div>To-do</div>
                    </div>
                </div>
                <div class="summary_todo_container">
                    <div class="img_todo"><img class="img_done" src="./img/done.png"></div>
                    <div class="summary_todo">
                        <b id="amount_done">1</b>              
                        <div>Done</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="greeting_container">
            <div id="greeting">Good morning,</div>
            <div id="name_contact">Sofia Müller</div>                
        </div>
    </div>
    
</div>        
</div>`;
}

function onmouseoverBoard(){
    document.getElementById('task_box_1').classList.remove('tasks');
    document.getElementById('task_box_1').classList.add('tasks_mouseover');
    document.getElementById('tasks_in_board').classList.remove('tasks_in_board');
    document.getElementById('tasks_in_board').classList.add('tasks_in_board_mouseover');
}

function onmouseoutBoard(){
    document.getElementById('task_box_1').classList.remove('tasks_mouseover');
    document.getElementById('task_box_1').classList.add('tasks');
    document.getElementById('tasks_in_board').classList.remove('tasks_in_board_mouseover');
    document.getElementById('tasks_in_board').classList.add('tasks_in_board');
}

function onmouseoverProgress(){
    document.getElementById('task_box_2').classList.remove('tasks');
    document.getElementById('task_box_2').classList.add('tasks_mouseover');
    document.getElementById('tasks_in_progress').classList.remove('tasks_progress');
    document.getElementById('tasks_in_progress').classList.add('tasks_progress_mouseover');
}

function onmouseoutProgress(){
    document.getElementById('task_box_2').classList.remove('tasks_mouseover');
    document.getElementById('task_box_2').classList.add('tasks');
    document.getElementById('tasks_in_progress').classList.remove('tasks_progress_mouseover');
    document.getElementById('tasks_in_progress').classList.add('tasks_progress');
}

function onmouseoverFeedback(){
    document.getElementById('task_box_3').classList.remove('tasks');
    document.getElementById('task_box_3').classList.add('tasks_mouseover');
    document.getElementById('tasks_feedback').classList.remove('tasks_feedback');
    document.getElementById('tasks_feedback').classList.add('tasks_feedback_mouseover');
}

function onmouseoutFeedback(){
    document.getElementById('task_box_3').classList.remove('tasks_mouseover');
    document.getElementById('task_box_3').classList.add('tasks');
    document.getElementById('tasks_feedback').classList.remove('tasks_feedback_mouseover');
    document.getElementById('tasks_feedback').classList.add('tasks_feedback');
}

function onmouseoverUrgent(){
    document.getElementById('task_box_4').classList.remove('summary_urgent');
    document.getElementById('task_box_4').classList.add('summary_urgent_mouseover');
    document.getElementById('urgent_task').classList.remove('urgent_task');
    document.getElementById('urgent_task').classList.add('urgent_task_mouseover');
}

function onmouseoutUrgent(){
    document.getElementById('task_box_4').classList.remove('summary_urgent_mouseover');
    document.getElementById('task_box_4').classList.add('summary_urgent');
    document.getElementById('urgent_task').classList.remove('urgent_task_mouseover');
    document.getElementById('').classList.add('urgent_task');
}
