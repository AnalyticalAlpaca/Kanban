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

load();

let currentDraggedElement;
let dragging = false;

function renderBoard() {
    emptyBoard();

    // Filter Tasks Depending On Status
    let toDo = tasks.filter(tasks => tasks.status == "To Do");
    let inProgress = tasks.filter(tasks => tasks.status == "In Progress");
    let awaitingFeedback = tasks.filter(tasks => tasks.status == "Awaiting Feedback");
    let done = tasks.filter(tasks => tasks.status == "Done");

    let j = 0;
    // For "To Do"-Section
    for (let i = 0; i < toDo.length; i++) {
        document.getElementById("toDo").innerHTML += /*html*/`
        <div id="container${j}" class="category_container" draggable="true" ondragstart="startDragging(${toDo[i].id})" onmousedown="rotate(${j})" onmouseup="rotateBack(${j})">
            <li class="category ${catColors[toDo[i].category]}">${toDo[i].category}</li>
            <li class="title" contenteditable="true" onfocusout="updateItem(${toDo[i].id})">${toDo[i].title}</li>
            <li class="description" contenteditable="true" onfocusout="updateItem(${toDo[i].id})">${toDo[i].description}</li>
        </div>
    `;
        j += 1;
    }

    // For "In Progress"-Section
    for (let i = 0; i < inProgress.length; i++) {
        document.getElementById("inProgress").innerHTML += /*html*/`
        <div id="container${j}" class="category_container" draggable="true" ondragstart="startDragging(${inProgress[i].id})" onmousedown="rotate(${j})" onmouseup="rotateBack(${j})">
            <li class="category ${catColors[inProgress[i].category]}">${inProgress[i].category}</li>
            <li class="title" contenteditable="true" onfocusout="updateItem(${inProgress[i].id})">${inProgress[i].title}</li>
            <li class="description" contenteditable="true" onfocusout="updateItem(${inProgress[i].id})">${inProgress[i].description}</li>
        </div>
    `;
        j += 1;
    }

    // For "Awaiting Feedback"-Section
    for (let i = 0; i < awaitingFeedback.length; i++) {
        document.getElementById("awaitingFeedback").innerHTML += /*html*/`
        <div id="container${j}" class="category_container" draggable="true" ondragstart="startDragging(${awaitingFeedback[i].id})" onmousedown="rotate(${j})" onmouseup="rotateBack(${j})">
            <li class="category ${catColors[awaitingFeedback[i].category]}">${awaitingFeedback[i].category}</li>
            <li class="title" contenteditable="true" onfocusout="updateItem(${awaitingFeedback[i].id})">${awaitingFeedback[i].title}</li>
            <li class="description" contenteditable="true" onfocusout="updateItem(${awaitingFeedback[i].id})">${awaitingFeedback[i].description}</li>
        </div>
    `;
        j += 1;
    }

    // For "Done"-Section
    for (let i = 0; i < done.length; i++) {
        document.getElementById("done").innerHTML += /*html*/`
        <div id="container${j}" class="category_container" draggable="true" ondragstart="startDragging(${done[i].id})" onmousedown="rotate(${j})" onmouseup="rotateBack(${j})">
            <li class="category ${catColors[done[i].category]}">${done[i].category}</li>
            <li class="title" contenteditable="true" onfocusout="updateItem(${done[i].id})">${done[i].title}</li>
            <li class="description" contenteditable="true" onfocusout="updateItem(${done[i].id})">${done[i].description}</li>
        </div>
    `;
        j += 1;
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

function save() {
    let tasksAsString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksAsString);
}

function load() {
    let tasksAsString = localStorage.getItem("tasks");
    if (tasksAsString) {
        tasks = JSON.parse(tasksAsString);
    }
}

function rotate(id) {
    document.getElementById(`container${id}`).style.transform = 'rotate(3deg)';
}

function rotateBack(id) {
    document.getElementById(`container${id}`).style.transform = 'rotate(0deg)';
}

// let testList = document.getElementsByClassName("toDo").value;
// console.log(testList);

// let uls = testList.getElementsByTagName("li");
// console.log(uls);

// let tasksTitles = []
// let tasksDescriptions = [];
// for (let i = 0; i < tasks.length; i++) {
//     const title = tasks[i].title;
//     const description = tasks[i].description;
//     tasksTitles.push(title);
//     tasksDescriptions.push(description);
// }
// function filterFunction() {
// }