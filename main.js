"use strict"

let tasks = [
    {
        "status": "To Do",
        "category": "Design",
        "title": "Website redesign",
        "description": "Modify the contents of the main website",
        "id": 0
    },

    {
        "status": "In Progress",
        "category": "Sales",
        "title": "Call potencial clients",
        "description": "Make the product presentation to prospective buyers",
        "id": 1
    },

    {
        "status": "Awaiting Feedback",
        "category": "Backoffice",
        "title": "Accounting invoices",
        "description": "Write open invoices for customer",
        "id": 2
    },

    {
        "status": "Done",
        "category": "Marketing",
        "title": "Social media strategy",
        "description": "Develop an ad campaign for brand positioning",
        "id": 3
    }
];

let catColors = {
    "Design": "color1",
    "Sales": "color2",
    "Backoffice": "color3",
    "Marketing": "color4"
};

let currentDraggedElement;

function render() {
    emptyBoard();

    // Filter Tasks Depending On Status
    let toDo = tasks.filter(tasks => tasks.status == "To Do");
    let inProgress = tasks.filter(tasks => tasks.status == "In Progress");
    let awaitingFeedback = tasks.filter(tasks => tasks.status == "Awaiting Feedback");
    let done = tasks.filter(tasks => tasks.status == "Done");

    // For "To Do"-Section
    for (let i = 0; i < toDo.length; i++) {
        document.getElementById("toDo").innerHTML += /*html*/`
        <div class="category_container" draggable="true" ondragstart="startDragging(${toDo[i].id})">
            <li class="category ${catColors[toDo[i].category]}">${toDo[i].category}</li>
            <li class="title">${toDo[i].title}</li>
            <li class="description">${toDo[i].description}</li>
        </div>
    `;
    }
    
    // For "In Progress"-Section
    for (let i = 0; i < inProgress.length; i++) {
        document.getElementById("inProgress").innerHTML += /*html*/`
        <div class="category_container" draggable="true" ondragstart="startDragging(${inProgress[i].id})">
            <li class="category ${catColors[inProgress[i].category]}">${inProgress[i].category}</li>
            <li class="title">${inProgress[i].title}</li>
            <li class="description">${inProgress[i].description}</li>
        </div>
    `;
    }
    
    // For "Awaiting Feedback"-Section
    for (let i = 0; i < awaitingFeedback.length; i++) {
        document.getElementById("awaitingFeedback").innerHTML += /*html*/`
        <div class="category_container" draggable="true" ondragstart="startDragging(${awaitingFeedback[i].id})">
            <li class="category ${catColors[awaitingFeedback[i].category]}">${awaitingFeedback[i].category}</li>
            <li class="title">${awaitingFeedback[i].title}</li>
            <li class="description">${awaitingFeedback[i].description}</li>
        </div>
    `;
    }
    
    // For "Done"-Section
    for (let i = 0; i < done.length; i++) {
        document.getElementById("done").innerHTML += /*html*/`
        <div class="category_container" draggable="true" ondragstart="startDragging(${done[i].id})">
            <li class="category ${catColors[done[i].category]}">${done[i].category}</li>
            <li class="title">${done[i].title}</li>
            <li class="description">${done[i].description}</li>
        </div>
    `;
    }
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
    console.log("'addTask' noch nicht gemacht!")
}

// Drag Tasks
function startDragging(id) {
    currentDraggedElement = id;    
}

function allowDrop(ev) {
    ev.preventDefault();
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
    render();
}