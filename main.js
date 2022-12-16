"use strict"

let tasks = [
    {
        "status": "To Do",
        "category": "Design",
        "title": "Website redesign",
        "description": "Modify the contents of the main website",
        "dueDate": new Date("2022-11-15"),
        "id": 0,
        "visibility": true,
        "priority": "Medium",
        "assignees": ["Julius Peterson", "Tyson Ngu", "Sebastian Mayer"]
    },

    {
        "status": "In Progress",
        "category": "Sales",
        "title": "Call potencial clients",
        "description": "Make the product presentation to prospective buyers",
        "dueDate": new Date("2022-11-15"),
        "id": 1,
        "visibility": true,
        "priority": "Low",
        "assignees": ["Tyson Ngu"]
    },

    {
        "status": "Awaiting Feedback",
        "category": "Backoffice",
        "title": "Accounting invoices",
        "description": "Write open invoices for customer",
        "dueDate": new Date("2022-11-15"),
        "id": 2,
        "visibility": true,
        "priority": "Urgent",
        "assignees": ["Tyson Ngu", "Sebastian Mayer"]
    },

    {
        "status": "Done",
        "category": "Marketing",
        "title": "Social media strategy",
        "description": "Develop an ad campaign for brand positioning",
        "dueDate": new Date("2022-11-15"),
        "id": 3,
        "visibility": true,
        "priority": "Low",
        "assignees": ["Julius Peterson", "Sebastian Mayer"]
    }
];

// let tasks;
let rotation;

let catColors = {
    "Design": "color1",
    "Sales": "color2",
    "Backoffice": "color3",
    "Marketing": "color4"
};

let prioColors = {
    "Urgent": "prio_color1",
    "Medium": "prio_color2",
    "Low": "prio_color3"
};

let prioImages = {
    "Urgent": "img/urgent-after.png",
    "Medium": "img/medium-after.png",
    "Low": "img/low-after.png"
}

let prioImagesColor = {
    "Urgent": "img/urgent.png",
    "Medium": "img/medium.png",
    "Low": "img/low.png"
}

let currentDraggedElement;
let dragging = false;
let hideArr = [];           // Array for filtering tasks (filterFunction())
let taskForCategoryInfo;

async function initTasks() {
    setURL('https://gruppe-374.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    // Change date format in tasks
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].dueDate = new Date(tasks[i].dueDate);
    }
    // Make all tasks visible when restarting website
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].visibility = true;    
    }
    initBoard();
}

// Filter Tasks Depending On Status
let toDo;
let inProgress;
let awaitingFeedback;
let done;

function renderBoard() {
    emptyBoard();

    // Filter Tasks Depending On Status
    toDo = tasks.filter(tasks => tasks.status == "To Do");
    inProgress = tasks.filter(tasks => tasks.status == "In Progress");
    awaitingFeedback = tasks.filter(tasks => tasks.status == "Awaiting Feedback");
    done = tasks.filter(tasks => tasks.status == "Done");

    let j = 0;
    // For "To Do"-Section
    for (let i = 0; i < toDo.length; i++) {
        if (toDo[i].visibility == false) {
            continue
        }
        document.getElementById("toDo").innerHTML += /*html*/`
        <div id="container${j}" class="category_container" draggable="true" ondragstart="startDragging(${toDo[i].id})" onmousedown="rotate(${j})" onmouseup="rotateBack(${j})">
            <li class="category ${catColors[toDo[i].category]}">${toDo[i].category}</li>
            <li class="title" onfocusout="updateItem(${toDo[i].id})">${toDo[i].title}</li>
            <li class="description" onfocusout="updateItem(${toDo[i].id})">${toDo[i].description}</li>
            <div class="abbr_prio">
                <div class="abbr_prio_secondary_div" id="abbr_prio${j}"><div class="abbr_var" id="abbr${j}"></div><div id="prio${j}"></div></div>
            </div>
            <img src="img/edit_image.png" alt="edit-icon" onclick="renderCategoryInfo(toDo[${i}])" draggable="false" onmouseover="disableDragging(${j})" onmouseleave="enableDragging(${j})">
        </div>
    `;
        setInitials(toDo[i], j)
        j += 1;
    }

    // For "In Progress"-Section
    for (let i = 0; i < inProgress.length; i++) {
        if (inProgress[i].visibility == false) {
            continue
        }
        document.getElementById("inProgress").innerHTML += /*html*/`
        <div id="container${j}" class="category_container" draggable="true" ondragstart="startDragging(${inProgress[i].id})" onmousedown="rotate(${j})" onmouseup="rotateBack(${j})">
            <li class="category ${catColors[inProgress[i].category]}">${inProgress[i].category}</li>
            <li class="title" onfocusout="updateItem(${inProgress[i].id})">${inProgress[i].title}</li>
            <li class="description" onfocusout="updateItem(${inProgress[i].id})">${inProgress[i].description}</li>
            <div class="abbr_prio">
                <div class="abbr_prio_secondary_div" id="abbr_prio${j}"><div class="abbr_var" id="abbr${j}"></div><div id="prio${j}"></div></div>
            </div>
            <img src="img/edit_image.png" alt="edit-icon" onclick="renderCategoryInfo(inProgress[${i}])" draggable="false" onmouseover="disableDragging(${j})" onmouseleave="enableDragging(${j})">
        </div>
    `;
        setInitials(inProgress[i], j)
        j += 1;
    }

    // For "Awaiting Feedback"-Section
    for (let i = 0; i < awaitingFeedback.length; i++) {
        if (awaitingFeedback[i].visibility == false) {
            continue
        }
        document.getElementById("awaitingFeedback").innerHTML += /*html*/`
        <div id="container${j}" class="category_container" draggable="true" ondragstart="startDragging(${awaitingFeedback[i].id})" onmousedown="rotate(${j})" onmouseup="rotateBack(${j})">
            <li class="category ${catColors[awaitingFeedback[i].category]}">${awaitingFeedback[i].category}</li>
            <li class="title" onfocusout="updateItem(${awaitingFeedback[i].id})">${awaitingFeedback[i].title}</li>
            <li class="description" onfocusout="updateItem(${awaitingFeedback[i].id})">${awaitingFeedback[i].description}</li>
            <div class="abbr_prio">
                <div class="abbr_prio_secondary_div" id="abbr_prio${j}"><div class="abbr_var" id="abbr${j}"></div><div id="prio${j}"></div></div>
            </div>
            <img src="img/edit_image.png" alt="edit-icon" onclick="renderCategoryInfo(awaitingFeedback[${i}])" draggable="false" onmouseover="disableDragging(${j})" onmouseleave="enableDragging(${j})">
        </div>
    `;
        setInitials(awaitingFeedback[i], j)
        j += 1;
    }

    // For "Done"-Section
    for (let i = 0; i < done.length; i++) {
        if (done[i].visibility == false) {
            continue
        }
        document.getElementById("done").innerHTML += /*html*/`
        <div id="container${j}" class="category_container" draggable="true" ondragstart="startDragging(${done[i].id})" onmousedown="rotate(${j})" onmouseup="rotateBack(${j})">
            <li class="category ${catColors[done[i].category]}">${done[i].category}</li>
            <li class="title" onfocusout="updateItem(${done[i].id})">${done[i].title}</li>
            <li class="description" onfocusout="updateItem(${done[i].id})">${done[i].description}</li>
            <div class="abbr_prio">
                <div class="abbr_prio_secondary_div" id="abbr_prio${j}"><div class="abbr_var" id="abbr${j}"></div><div id="prio${j}"></div></div>
            </div>
            <img src="img/edit_image.png" alt="edit-icon" onclick="renderCategoryInfo(done[${i}])" draggable="false" onmouseover="disableDragging(${j})" onmouseleave="enableDragging(${j})">
        </div>
    `;
        setInitials(done[i], j)
        j += 1;
    }
    save();
}

// Reset Board
function emptyBoard() {
    document.getElementById("toDo").innerHTML = '';
    document.getElementById("toDo").innerHTML += /*html*/`
    <li class="heading">To Do</li>
    `;

    document.getElementById("inProgress").innerHTML = '';
    document.getElementById("inProgress").innerHTML += /*html*/`
    <li class="heading">In Progress</li>
    `;

    document.getElementById("awaitingFeedback").innerHTML = '';
    document.getElementById("awaitingFeedback").innerHTML += /*html*/`
    <li class="heading">Awaiting Feedback</li>
    `;

    document.getElementById("done").innerHTML = '';
    document.getElementById("done").innerHTML += /*html*/`
    <li class="heading">Done</li>
    `;
}

// Add New Task
function addTask() {
    document.getElementById('addTask').style.display = 'flex';
    console.log('Hier kommt Add New Task');
}

// Drag Tasks
function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
    dragging = true;
}

function moveTo(status) {
    if (status === 'toDo') {
        status = 'To Do';
    } else if (status === 'inProgress') {
        status = 'In Progress';
    } else if (status === 'awaitingFeedback') {
        status = 'Awaiting Feedback';
    } else if (status === 'done') {
        status = 'Done';
    }
    tasks[currentDraggedElement].status = status;
    save();
    renderBoard();
    dragging = false;
}

// Update Changed Tasks In JSON Array
function updateItem(id) {
    if (dragging) {
        return
    }
    // Get edited titles and descriptions
    const titlesColumns = document.querySelectorAll('.title');
    const descriptionColumns = document.querySelectorAll('.description');
    const newTitle = titlesColumns[id].textContent;
    const newDescription = descriptionColumns[id].textContent;

    // Assign new texts to JSON entry
    tasks[id]["title"] = newTitle;
    tasks[id]["description"] = newDescription;
    save();
}

async function save() {
    await backend.setItem('tasks', JSON.stringify(tasks));
}

function rotate(id) {
    if (rotation) {
        document.getElementById(`container${id}`).style.transform = 'rotate(3deg)';
    }
}

function rotateBack(id) {
    document.getElementById(`container${id}`).style.transform = 'rotate(0deg)';
}

function filterFunction() {
    // Get Input Value 
    let search = document.getElementById("myInput").value;
    search = search.toUpperCase();
    console.log(search);

    // Create Array with all Titles and Descriptions
    const tasksTitles = tasks.map(task => task.title);
    const tasksDescriptions = tasks.map(task => task.description);

    // Create Array for filtering tasks in renderBoard function
    hideArr = [];
    for (let i = 0; i < tasksTitles.length; i++) {
        const title = tasksTitles[i];
        const description = tasksDescriptions[i];
        if (title.toUpperCase().includes(search) || description.toUpperCase().includes(search)) {
            hideArr.push(true);
        } else {
            hideArr.push(false);
        }
    }
    for (let i = 0; i < hideArr.length; i++) {
        if (!hideArr[i]) {
            tasks[i].visibility = false;
        } else {
            tasks[i].visibility = true;
        }
    }
    console.log(hideArr);
    renderBoard();
}

function renderCategoryInfo(task) {
    taskForCategoryInfo = task;
    document.getElementById('fullscreen').style.visibility = 'visible';
    document.getElementById('fullscreen').innerHTML = /*html*/ `
    <ul class="infoWindow" onblur="closeRenderCategoryInfo()">
        <img class="close_icon" src="img/closeImage.png" alt="close-image" onclick="closeRenderCategoryInfo()">
        <li class="category ${catColors[task.category]}">${task.category}</li>
        <li class="title" contenteditable="true" onfocusout="updateItem(${task.id})">${task.title}</li>
        <li class="description" contenteditable="true" onfocusout="updateItem(${task.id})">${task.description}</li>
        <p class="info_font">Due date:<span class="dueDate">${formatDate(task.dueDate)}</span></p>
        <p class="info_font">Priority:<span id="editPrio" class="priority ${prioColors[task.priority]}">${task.priority}<img class="prio_image" src="${prioImages[task.priority]}" alt="Priority-Icon"></span></p>
        <p class="info_font">Assigned to:</p>
        <div id="assignees" class="assign_container">
        </div>
        <img class="change_icon" src="img/changeImage.png" alt="change-image" onclick="changeCategoryInfo(taskForCategoryInfo)">
    </ul>
    `;
    
    for (let i = 0; i < task.assignees.length; i++) {
        document.getElementById("assignees").innerHTML += /*html*/`
        <div class="assign_div${i+1} assign2">
            <span class="${(getInitials(task.assignees[i])).toLowerCase()}_abbr">${getInitials(task.assignees[i])}</span><p class="assignTo"><img src="img/delete_assignee.png" alt="delete-icon" onclick="removeAssignee(taskForCategoryInfo, taskForCategoryInfo.assignees[${i}])">${task.assignees[i]}</p>
        </div>
    `;
    }
}

function closeRenderCategoryInfo() {
    document.getElementById('fullscreen').style.visibility = 'hidden';
    dropped = false;
    renderBoard();
}

let assis;
function changeCategoryInfo(task) {    
    document.getElementById('fullscreen').innerHTML = /*html*/ `
    <div class="infoWindow changeInfo" style="padding: 3rem 6rem 6rem 6rem">
        <img class="close_icon" src="img/closeImage.png" alt="close-image" onclick="closeRenderCategoryInfo()">
        <p>Title</p>
        <input id="titleValue" type="text" class="info_section">
        <p>Description</p>
        <textarea id="descriptionValue" name="description_text" cols="30" rows="10" class="info_section"></textarea>
        <p>Due date</p>
        <input id="dateValue" type="date" class="info_section">
        <p>Prio</p>
        <div class="prios">
            <button id="urgent_btn" class="btn_left" onclick="urgentColor(taskForCategoryInfo)">Urgent</button>
            <button id="medium_btn" class="btn_middle" onclick="mediumColor(taskForCategoryInfo)">Medium</button>
            <button id="low_btn" class="btn_right" onclick="lowColor(taskForCategoryInfo)">Low</button>
        </div>
        <p>Assigned to</p>
        <div id="assignees" class="label_div"><p class="assi_title">Select contacts to assign<img onclick="openAndCloseDrop(assis)" src="img/dropdown_icon.png" alt=""></p></div>
        <img class="change_icon change_icon2" src="img/changeImage2.png" alt="change-image" onclick="changeInfo(taskForCategoryInfo.id, assis); renderCategoryInfo(taskForCategoryInfo); save()">
    </div>
    `;

    let allAssignees = ['Julius Peterson', 'Tyson Ngu', 'Sebastian Mayer'];
    assis = allAssignees.filter(assi => !task.assignees.includes(assi));
    for (let i = 0; i < assis.length; i++) {
        document.getElementById('assignees').innerHTML += /*html*/`
        <div id="labelInput${i}" class="label_input">
            <label class="assi_label">${assis[i]}</label>
            <input id="assi_input${i}" class="assi_input" type="checkbox">
        </div>
        `;
    }

    if (task.priority == 'Urgent') {
        document.getElementById("urgent_btn").className = `btn_left ${prioColors[task.priority]}`;
    } else if (task.priority == 'Medium') {
        document.getElementById("medium_btn").className = `btn_middle ${prioColors[task.priority]}`;
    } else {
        document.getElementById("low_btn").className = `btn_right ${prioColors[task.priority]}`;
    }

    document.getElementById('titleValue').value = `${task.title}`;
    document.getElementById('descriptionValue').value = `${task.description}`;
    document.getElementById('dateValue').value = `${formatDateBack(task.dueDate)}`;
}

let dropped = false;
function openAndCloseDrop(assis) {
    if (dropped == false) {
        for (let i = 0; i < assis.length; i++) {
            document.getElementById(`labelInput${i}`).style.display = 'flex';
        }
        dropped = true;
    } else {
        for (let i = 0; i < assis.length; i++) {
            document.getElementById(`labelInput${i}`).style.display = 'none';
        }
        dropped = false;
    }
}

function closeChangeCategoryInfo() {
    document.getElementById('fullscreen').style.visibility = 'hidden';
}

function disableDragging(j) {
    document.getElementById(`container${j}`).draggable = false;
    rotation = false;
}

function enableDragging(j) {
    document.getElementById(`container${j}`).draggable = true;
    rotation = true;
}

function changeInfo(id, assis) {
    let newTitle = document.getElementById('titleValue').value;
    tasks[id].title = newTitle;
    let newDescription = document.getElementById('descriptionValue').value;
    tasks[id].description = newDescription;
    for (let i = 0; i < assis.length; i++) {
        if (document.getElementById(`assi_input${i}`).checked === true) {
            tasks[id].assignees.push(assis[i]);
        }
    }
    let newDueDate = new Date(document.getElementById('dateValue').value);
    tasks[id].dueDate = newDueDate;
    dropped = false;
}

function urgentColor(taskForCategoryInfo) {
    document.getElementById('urgent_btn').style.backgroundColor = '#FF3D00';
    document.getElementById('urgent_btn').style.color = '#fff';
    document.getElementById('medium_btn').style.backgroundColor = '#fff';
    document.getElementById('medium_btn').style.color = '#000';
    document.getElementById('low_btn').style.backgroundColor = '#fff';
    document.getElementById('low_btn').style.color = '#000';
    taskForCategoryInfo.priority = 'Urgent';
}

function mediumColor(taskForCategoryInfo) {
    document.getElementById('urgent_btn').style.backgroundColor = '#fff';
    document.getElementById('urgent_btn').style.color = '#000';
    document.getElementById('medium_btn').style.backgroundColor = '#FFA800';
    document.getElementById('medium_btn').style.color = '#fff';
    document.getElementById('low_btn').style.backgroundColor = '#fff';
    document.getElementById('low_btn').style.color = '#000';
    taskForCategoryInfo.priority = 'Medium';
}

function lowColor(taskForCategoryInfo) {
    document.getElementById('urgent_btn').style.backgroundColor = '#fff';
    document.getElementById('urgent_btn').style.color = '#000';
    document.getElementById('medium_btn').style.backgroundColor = '#fff';
    document.getElementById('medium_btn').style.color = '#000';
    document.getElementById('low_btn').style.backgroundColor = '#7AE229';
    document.getElementById('low_btn').style.color = '#fff';
    taskForCategoryInfo.priority = 'Low';
}

function getInitials(name) {
    let parts = name.split(' ');
    let initials = '';
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
            initials += parts[i][0]
        }
    }
    return initials
}

function removeAssignee(task, name) {
    task.assignees.splice(name, 1);
    renderCategoryInfo(task);
}

function setInitials(task, j) {
    document.getElementById(`abbr${j}`).innerHTML = '';
    for (let i = 0; i < task.assignees.length; i++) {
        document.getElementById(`abbr${j}`).innerHTML += /*html*/`
            <span class="single_assi ${(getInitials(task.assignees[i])).toLowerCase()}_abbr">${getInitials(task.assignees[i])}</span>
        `;
    }
    document.getElementById(`prio${j}`).innerHTML += /*html*/`
        <img class="prio_image2" src="${prioImagesColor[task.priority]}" alt="Priority-Icon">
    `;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('.');
}

function formatDateBack(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
}