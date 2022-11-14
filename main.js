"use strict"

let sections = [
    {
        "category": "Design",
        "title": "Website redesign",
        "description": "Modify the contents of the main website",
        "status": "To Do"
    },
    {
        "category": "Sales",
        "title": "Call potencial clients",
        "description": "Make the product presentation to prospective buyers",
        "status": "In Progress"
    },
    {
        "category": "Backoffice",
        "title": "Accounting invoices",
        "description": "Write open invoices for customer",
        "status": "Awaiting Feedback"
    },
    {
        "category": "Marketing",
        "title": "Social media strategy",
        "description": "Develop an ad campaign for brand positioning",
        "status": "Done"
    }
];

let sectionsClasses = {
        "Design": "color1",
        "Sales": "color2",
        "Backoffice": "color3",
        "Marketing": "color4"
    };

let statusArray = ['To Do', 'In Progress', 'Awaiting Feedback', 'Done'];

function render() {
    document.getElementById('constContent').innerHTML = '';
    document.getElementById('constContent').innerHTML += /*html*/`
    <div>
        <div class="board_container">
            <div class="main_div">
                <h1>Board</h1>
                <div class="input_button">
                    <input type="search" placeholder="Find Task">
                    <button>Add task <img src="img/line.png"><img src="img/line.png" class="line2"></button>
                </div>
            </div>
            <div class="main_board_section" id="mainBoard">
                <div class="board_section" id="content">
                </div>
            </div>
        </div>
    </div>
    `;

    let toDo = sections.filter(section => section.status == "To Do");
    let InProgress = sections.filter(section => section.status == "In Progress");
    let AwaitingFeedback = sections.filter(section => section.status == "Awaiting Feedback");
    let done = sections.filter(section => section.status == "Done");

    let newArray = [];
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i].status;
        if (section == "To Do") {
            newArray.push(sections[i])
        }
    }

    let content = document.getElementById("content");
    content.innerHTML = '';

    for (let i = 0; i < statusArray.length; i++) {
        document.getElementById("mainBoard").innerHTML += /*html*/`
        <h2>${statusArray[i]}</h2>
    `;
    }
    
    for (let i = 0; i < toDo.length; i++) {
        content.innerHTML += /*html*/`
            <div class="board_section" id="content">
                <button class=${sectionsClasses[toDo[i].category]}>${toDo[i].category}</button>
               <h3>${toDo[i].title}</h3>
               <p>${toDo[i].description}</p>
            </div>
           `;
    }

    for (let i = 0; i < InProgress.length; i++) {
        content.innerHTML += /*html*/`
            <button class=${sectionsClasses[InProgress[i].category]}>${InProgress[i].category}</button>
            <h3>${InProgress[i].title}</h3>
            <p>${InProgress[i].description}</p>
           `;
    }

    for (let i = 0; i < AwaitingFeedback.length; i++) {
        content.innerHTML += /*html*/`
            <button class=${sectionsClasses[AwaitingFeedback[i].category]}>${AwaitingFeedback[i].category}</button>
            <h3>${AwaitingFeedback[i].title}</h3>
            <p>${AwaitingFeedback[i].description}</p>
           `;
    }

    for (let i = 0; i < done.length; i++) {
        content.innerHTML += /*html*/`
            <button class=${sectionsClasses[done[i].category]}>${done[i].category}</button>
            <h3>${done[i].title}</h3>
            <p>${done[i].description}</p>
           `;
    }
    
    // for (let i = 0; i < statusArray.length; i++) {
    //     document.getElementById("content").innerHTML += /*html*/`
    //     <h2>${statusArray[i]}</h2>
    //     `;
    // }

    // for (let i = 0; i < sections.length; i++) {
    //     content.innerHTML += /*html*/`
    //     <div class="board_section">
    //         <button class=${sectionsClasses[sections[i].category]}>${sections[i].category}</button>
    //         <h3>${sections[i].title}</h3>
    //         <p>${sections[i].description}</p>
    //     </div>
    //     `;
    //     }
}