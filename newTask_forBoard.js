let categoryNames = [];
let categoryColors = [];
let prios = [];
let titles = [];
let descriptions = [];
let dates = [];
let selectedCategory = [];
let selectedColor = [];
let colorForCategory;


async function init() {
    setURL('https://gruppe-374.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    save();
}

let selectedPrio;
function prioDefault() {
    document.getElementById('medium-img').src = "img/medium.png";
    document.getElementById('low-img').src = "img/low.png";
    document.getElementById('urgent-img').src = "img/urgent.png";
    document.getElementById('urgent').classList.remove('addTask_prio-after-urgent');
    document.getElementById('medium').classList.remove('addTask_prio-after-medium');
    document.getElementById('low').classList.remove('addTask_prio-after-low');

}
function afterUrgent() {
    document.getElementById('urgent').classList.add('addTask_prio-after-urgent');
    document.getElementById('medium').classList.remove('addTask_prio-after-medium');
    document.getElementById('low').classList.remove('addTask_prio-after-low');
    document.getElementById('medium-img').src = "img/medium.png";
    document.getElementById('low-img').src = "img/low.png";
    document.getElementById('urgent-img').src = "img/urgent-after.png";
    selectedPrio = "Urgent";
}

function afterMedium() {
    document.getElementById('medium').classList.add('addTask_prio-after-medium');
    document.getElementById('low').classList.remove('addTask_prio-after-low');
    document.getElementById('urgent').classList.remove('addTask_prio-after-urgent');
    document.getElementById('low-img').src = "img/low.png";
    document.getElementById('urgent-img').src = "img/urgent.png";
    document.getElementById('medium-img').src = "img/medium-after.png";
    selectedPrio = "Medium";
}

function afterLow() {
    document.getElementById('low').classList.add('addTask_prio-after-low');
    document.getElementById('medium').classList.remove('addTask_prio-after-medium');
    document.getElementById('urgent').classList.remove('addTask_prio-after-urgent');
    document.getElementById('urgent-img').src = "img/urgent.png";
    document.getElementById('medium-img').src = "img/medium.png";
    document.getElementById('low-img').src = "img/low-after.png";
    selectedPrio = "Low";
}

function submitSubtask(event) {
    let prioInput = document.getElementById('subtask').value;
    if (prioInput == 0) {

    } else {


        document.getElementById("subtaskCheck").innerHTML += `
        <span><input type="checkbox" checked="checked">${prioInput}<br></span>`
        closeSubtask(event);
        event.preventDefault();
    }
}
function closeSubtask(event) {
    document.getElementById('subtask').classList.add('addTask_input-trans');
    document.getElementById('subtask').classList.remove('addTask_input-trans-after');
    document.getElementById('addBtn1').classList.remove('addTask_d-none');
    document.getElementById('addBtn2').classList.add('addTask_d-none');
    document.getElementById('addBtn3').classList.add('addTask_d-none');
    document.getElementById('vl2').classList.add('addTask_d-none');
    document.getElementById('subtask').value = "";
    event.preventDefault();
}

function toggleDropdown() {

    let dropdown = document.getElementById("dropdown");
    document.getElementById("dropdown2").classList.add("addTask_d-none")
    if (dropdown.classList.contains("addTask_d-none")) {
        document.getElementById("assignedMain")
        dropdown.classList.remove('addTask_d-none');

        dropdownCategory();

    } else {
        dropdown.classList.add("addTask_d-none");
        document.getElementById("assignedMain")
    }
}
function toggleDropdown2() {
    let dropdown = document.getElementById("dropdown2");
    if (dropdown.classList.contains("addTask_d-none")) {
        dropdown.classList.remove('addTask_d-none');
        document.getElementById("dropdown").classList.add("addTask_d-none");
        document.getElementById("assignedMain")
        dropdownAssigned();

    } else {
        dropdown.classList.add("addTask_d-none");
        document.getElementById("dropdown").classList.add("addTask_d-none");
        document.getElementById("assignedMain")
    }

}
function dropdownAssigned() {
    document.getElementById("dropdown2").innerHTML = `
          
          <br>
              <div class="addTask_category addTask_dropdownPadding" id="person1" onclick="showPerson1()">
                  <span class="addTask_test">
                  Julius Peterson
                  </span>
              </div>
                        
              <div class="addTask_category2 addTask_dropdownPadding" id="person2" onclick="showPerson2()">
                  <span class="addTask_test">
                      Tyson Ngu
                  </span>
              </div>
              
              <div class="addTask_category2 addTask_dropdownPadding" id="person3" onclick="showPerson3()">
                  <span class="addTask_test">
                      Sebastian Mayer
                  </span>
              </div>
              `;
}
function closeAssigned() {
    document.getElementById('assignDropdown').innerHTML = `
    <div class="addTask_hoverDropdown" onclick="toggleDropdown2()">
            <div class="addTask_arrowEnd addTask_dropdownPadding">
            <span class="addTask_test" id="selPerson">
                Select contact
            </span>
            
        </div>
        </div>
             
            <div id="dropdown2" class="addTask_d-none">
            
        </div>
        `
}

let assignedTo;
function showPerson1() {
    let dropdown = document.getElementById("dropdown2");
    dropdown.classList.add("addTask_d-none");
    document.getElementById('selPerson').innerText = 'Julius Peterson';
    assignedTo = "Julius Peterson";
}
function showPerson2() {
    let dropdown = document.getElementById("dropdown2");
    dropdown.classList.add("addTask_d-none");
    document.getElementById('selPerson').innerText = 'Tyson Ngu';
    assignedTo = "Tyson Ngu";
}
function showPerson3() {
    let dropdown = document.getElementById("dropdown2");
    dropdown.classList.add("addTask_d-none");
    document.getElementById('selPerson').innerText = 'Sebastian Mayer';
    assignedTo = "Sebastian Mayer";
}

function dropdownCategory() {
    document.getElementById("assignedMain")
    if (categoryNames.length > 2) {
        document.getElementById("dropdown").classList.add("addTask_scrollbar")
    }
    document.getElementById("dropdown").innerHTML = `
          <div id="scrollCategory">
          <br>
              <div class="addTask_category addTask_dropdownPadding" id="newCategory" onclick="categoryAdd()">
                  <span class="addTask_test">
                  
                      New Category
                  </span>
              </div>
                        
              <div id="addnewCategory">
  
              </div>
              </div>
              `;
    addnewCategory();
}



function addnewCategory() {

    for (let i = 0; i < categoryNames.length; i++) {
        const categoryName = categoryNames[i];
        const categoryColor = categoryColors[i];
        if (categoryName == "") {
            document.getElementById('addnewCategory').innerHTML = "";
        } else {



            document.getElementById('addnewCategory').innerHTML += `

        <div class="addTask_category2 addTask_dropdownPadding" id="test" onclick="categoryShow(${i})">
        <span class="addTask_test addTask_centerNameColor">
            ${categoryName} <span id="colorCircle${i}"></span>
            
        </span>
        </div>`
            if (categoryColor == "lila") {
                document.getElementById(`colorCircle${i}`).classList.add('addTask_selectPurple');
            }
            else if (categoryColor == "rot") {
                document.getElementById(`colorCircle${i}`).classList.add('addTask_selectRed');
            }
            else if (categoryColor == "blau") {
                document.getElementById(`colorCircle${i}`).classList.add('addTask_selectBlue');
            }
            else if (categoryColor == "grün") {

                document.getElementById(`colorCircle${i}`).classList.add('addTask_selectGreen');
            }
            else if (categoryColor == "hellblau") {
                document.getElementById(`colorCircle${i}`).classList.add('addTask_selectTurquoise');
            }
            else if (categoryColor == "orange")
                document.getElementById(`colorCircle${i}`).classList.add('addTask_selectOrange');
        }

    }

}
let currentCategory;
let currentColor;
function categoryShow(x) {
    document.getElementById("assignedMain")
    let categoryColor = categoryColors[x];
    currentColor = categoryColors[x];
    currentCategory = categoryNames[x];
    document.getElementById("dropdown").classList.remove("addTask_scrollbar");
    document.getElementById("selCategory").innerHTML = ``
    if (categoryColor == "lila") {

        document.getElementById("selCategory").innerHTML = `
        <div class="addTask_centerNameColor">
        <span>${categoryNames[x]}</span>
        <span class="addTask_selectPurple" id="selCategory"></span>
        </div>
        `
    }
    else if (categoryColor == "rot") {
        document.getElementById("selCategory").innerHTML = `
        <div class="addTask_centerNameColor">
        <span>${categoryNames[x]}</span>
        <span class="addTask_selectRed" id="selCategory"></span>
        </div>
        `
    }
    else if (categoryColor == "blau") {
        document.getElementById("selCategory").innerHTML = `
        <div class="addTask_centerNameColor">
        <span>${categoryNames[x]}</span>
        <span class="addTask_selectBlue" id="selCategory"></span>
        </div>
        `
    }
    else if (categoryColor == "grün") {

        document.getElementById("selCategory").innerHTML = `
        <div class="addTask_centerNameColor">
        <span>${categoryNames[x]}</span>
        <span class="addTask_selectGreen" id="selCategory"></span>
        </div>
        `
    }
    else if (categoryColor == "hellblau") {
        document.getElementById("selCategory").innerHTML = `
        <div class="addTask_centerNameColor">
        <span>${categoryNames[x]}</span>
        <span class="addTask_selectTurquoise" id="selCategory"></span>
        </div>
        `
    }
    else if (categoryColor == "orange") {
        document.getElementById("selCategory").innerHTML = `
        <div class="addTask_centerNameColor">
        <span>${categoryNames[x]}</span>
        <span class="addTask_selectOrange" id="selCategory"></span>
        </div>
        `

    }


    document.getElementById("dropdown").innerHTML = "";

}

function categoryAdd() {
    document.getElementById("dropdown").classList.remove("addTask_scrollbar");
    document.getElementById('delFunc').removeAttribute("onclick");
    document.getElementById("selCategory").innerHTML = `
    <div class="addTask_flex3"><input class="addTask_input-trans2 addTask_widthCategory" placeholder="Category name ..." id="inputCategory"><div class="sub-task-btn">
    <button id="addBtn2"><img src="img/close.png" width="12px" onclick="closeCategory()"></button>
    <div class="addTask_vl2" id="vl2"></div>
    <button id="addBtn3"><img src="img/accept.png" width="15px" onclick="categoryPush(event)"></button>
    </div>
    </div>
    ` ;

    document.getElementById("dropdown").innerHTML = "";
    document.getElementById('selectColor').classList.remove('addTask_d-none');
    document.getElementById('arrowEnd').classList.remove('addTask_arrowEnd');
    document.getElementById('arrowEnd').classList.remove('addTask_dropdownPadding');
    document.getElementById('assignedMain');
}


function categoryPush(event) {
    categoryName = document.getElementById('inputCategory').value
    if (categoryName == "" || color == null) {
        alert("bitte etwas eingeben")
    } else {
        document.getElementById("dropdown").classList.remove("addTask_scrollbar");
        categoryNames.push(categoryName);
        categoryColors.push(color);
        console.log(categoryNames);
        console.log(categoryColors);
        categoryName = undefined;
        color = undefined;
        document.getElementById("dropdown").innerHTML = "";
        document.getElementById('selectColor').classList.add('addTask_d-none');
        document.getElementById('arrowEnd').classList.add('addTask_arrowEnd');
        document.getElementById('arrowEnd').classList.add('addTask_dropdownPadding');

        closeCategory();
        toggleDropdown();

        event.preventDefault();
    }
};

function closeCategory() {
    document.getElementById("ctgDropdown").innerHTML = "";
    document.getElementById("DropdownMain").innerHTML = `
    <div class="addTask_dropdown" id="ctgDropdown">
            <div class="addTask_hoverDropdown" id="delFunc" onclick="toggleDropdown()">
            <div class="addTask_arrowEnd addTask_dropdownPadding" id="arrowEnd">
            <span class="addTask_test" id="selCategory">Select task category </span>
            
        </div>
        </div>
             
            <div id="dropdown">
            
        </div>
        
    </div>

    <div class="addTask_selectColor addTask_d-none" id="selectColor">
    <span class="addTask_selectRed" id="selectRed" onclick="selectedRed()"></span>
    <span class="addTask_selectGreen" id="selectGreen" onclick="selectedGreen()"></span>
    <span class="addTask_selectOrange" id="selectOrange" onclick="selectedOrange()"></span>
    <span class="addTask_selectPurple" id="selectPurple" onclick="selectedPurple()"></span>
    <span class="addTask_selectTurquoise" id="selectTurquoise" onclick="selectedTurquoise()"></span>
    <span class="addTask_selectBlue" id="selectBlue" onclick="selectedBlue()"></span>
    </div>

`

    document.getElementById('selectColor').classList.add('addTask_d-none');
}

let color;
let categoryName;

function selectedRed() {
    color = "rot";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectRed').classList.add('addTask_selectedRed');
    document.getElementById('selectGreen').classList.add('addTask_selectGreen');
    document.getElementById('selectBlue').classList.add('addTask_selectBlue');
    document.getElementById('selectPurple').classList.add('addTask_selectPurple');
    document.getElementById('selectOrange').classList.add('addTask_selectOrange');
    document.getElementById('selectTurquoise').classList.add('addTask_selectTurquoise');
    document.getElementById('selectRed').classList.remove('addTask_selectRed');
    document.getElementById('selectGreen').classList.remove('addTask_selectedGreen');
    document.getElementById('selectOrange').classList.remove('addTask_selectedOrange');
    document.getElementById('selectPurple').classList.remove('addTask_selectedPurple');
    document.getElementById('selectBlue').classList.remove('addTask_selectedBlue');
    document.getElementById('selectTurquoise').classList.remove('addTask_selectedTurquoise');

}

function selectedGreen() {
    color = "grün";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectGreen').classList.add('addTask_selectedGreen');
    document.getElementById('selectRed').classList.add('addTask_selectRed');
    document.getElementById('selectBlue').classList.add('addTask_selectBlue');
    document.getElementById('selectPurple').classList.add('addTask_selectPurple');
    document.getElementById('selectOrange').classList.add('addTask_selectOrange');
    document.getElementById('selectTurquoise').classList.add('addTask_selectTurquoise');
    document.getElementById('selectGreen').classList.remove('addTask_selectGreen');
    document.getElementById('selectRed').classList.remove('addTask_selectedRed');
    document.getElementById('selectOrange').classList.remove('addTask_selectedOrange');
    document.getElementById('selectPurple').classList.remove('addTask_selectedPurple');
    document.getElementById('selectBlue').classList.remove('addTask_selectedBlue');
    document.getElementById('selectTurquoise').classList.remove('addTask_selectedTurquoise');

}

function selectedOrange() {
    color = "orange";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectOrange').classList.add('addTask_selectedOrange');
    document.getElementById('selectRed').classList.add('addTask_selectRed');
    document.getElementById('selectBlue').classList.add('addTask_selectBlue');
    document.getElementById('selectPurple').classList.add('addTask_selectPurple');
    document.getElementById('selectTurquoise').classList.add('addTask_selectTurquoise');
    document.getElementById('selectGreen').classList.add('addTask_selectGreen');
    document.getElementById('selectOrange').classList.remove('addTask_selectOrange');
    document.getElementById('selectRed').classList.remove('addTask_selectedRed');
    document.getElementById('selectGreen').classList.remove('addTask_selectedGreen');
    document.getElementById('selectPurple').classList.remove('addTask_selectedPurple');
    document.getElementById('selectBlue').classList.remove('addTask_selectedBlue');
    document.getElementById('selectTurquoise').classList.remove('addTask_selectedTurquoise');

}

function selectedPurple() {
    color = "lila";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectPurple').classList.add('addTask_selectedPurple');
    document.getElementById('selectRed').classList.add('addTask_selectRed');
    document.getElementById('selectOrange').classList.add('addTask_selectOrange');
    document.getElementById('selectGreen').classList.add('addTask_selectGreen');
    document.getElementById('selectBlue').classList.add('addTask_selectBlue');
    document.getElementById('selectTurquoise').classList.add('addTask_selectTurquoise');
    document.getElementById('selectRed').classList.remove('addTask_selectedRed');
    document.getElementById('selectGreen').classList.remove('addTask_selectedGreen');
    document.getElementById('selectOrange').classList.remove('addTask_selectedOrange');
    document.getElementById('selectPurple').classList.remove('addTask_selectPurple');
    document.getElementById('selectBlue').classList.remove('addTask_selectedBlue');
    document.getElementById('selectTurquoise').classList.remove('addTask_selectedTurquoise');

}

function selectedTurquoise() {
    color = "hellblau";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectTurquoise').classList.add('addTask_selectedTurquoise');
    document.getElementById('selectRed').classList.add('addTask_selectRed');
    document.getElementById('selectPurple').classList.add('addTask_selectPurple');
    document.getElementById('selectOrange').classList.add('addTask_selectOrange');
    document.getElementById('selectGreen').classList.add('addTask_selectGreen');
    document.getElementById('selectBlue').classList.add('addTask_selectBlue');
    document.getElementById('selectRed').classList.remove('addTask_selectedRed');
    document.getElementById('selectGreen').classList.remove('addTask_selectedGreen');
    document.getElementById('selectOrange').classList.remove('addTask_selectedOrange');
    document.getElementById('selectPurple').classList.remove('addTask_selectedPurple');
    document.getElementById('selectBlue').classList.remove('addTask_selectedBlue');
    document.getElementById('selectTurquoise').classList.remove('addTask_selectTurquoise');


}

function selectedBlue() {
    color = "blau";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectBlue').classList.add('addTask_selectedBlue');
    document.getElementById('selectTurquoise').classList.add('addTask_selectTurquoise');
    document.getElementById('selectPurple').classList.add('addTask_selectPurple');
    document.getElementById('selectOrange').classList.add('addTask_selectOrange');
    document.getElementById('selectGreen').classList.add('addTask_selectGreen');
    document.getElementById('selectRed').classList.add('addTask_selectRed');
    document.getElementById('selectRed').classList.remove('addTask_selectedRed');
    document.getElementById('selectGreen').classList.remove('addTask_selectedGreen');
    document.getElementById('selectOrange').classList.remove('addTask_selectedOrange');
    document.getElementById('selectPurple').classList.remove('addTask_selectedPurple');
    document.getElementById('selectBlue').classList.remove('addTask_selectBlue');
    document.getElementById('selectTurquoise').classList.remove('addTask_selectedTurquoise');

}

function createTask() {
    let titleInput = document.getElementById('title-Input').value;
    let description = document.getElementById("descriptionInput").value;
    let date = document.getElementById("d1").value;
    getSelectedColor();
    if ([titleInput, description, date].includes('')){
        alert("Please enter a title, a description and a date")
        return
    }
    if (document.getElementById('inputCategory')==null || document.getElementById('inputCategory').value=='' || colorForCategory==undefined) {
        alert("Please enter a category and choose a color")
        return
    } 
    if (selectedPrio==undefined) {
        alert("Please set a priority")
        return
    }
    if (assignedTo==undefined) {
        alert("Please choose an assignee")
        return
    }
    let newCategory = document.getElementById('inputCategory').value;
    let task =
    {
        "status": "To Do",
        "category": newCategory,
        "color": colorForCategory,
        "title": titleInput,
        "description": description,
        "dueDate": new Date(date),
        "id": 0,
        "visibility": true,
        "priority": selectedPrio,
        "assignees": [assignedTo]
    }

    tasks.push(task);
    save();
    clearInput();
    document.getElementById('addTask').style.display = 'none';
    initBoard();
}

function clearInput() {
    document.getElementById('title-Input').value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("d1").value = "";
    document.getElementById('subtask').value = "";
    prioDefault();
    closeCategory();
    closeAssigned();
}

function getSelectedPriority() {
    if (document.getElementById('urgent').className === 'addTask_prio-after-urgent') {
        let selectedPriority = "Urgent"
        return selectedPriority
    } else if (document.getElementById('medium').className === 'addTask_prio-after-medium') {
        let selectedPriority = "Medium"
        return selectedPriority
    } else if (document.getElementById('low').className === 'addTask_prio-after-low') {
        let selectedPriority = "Low"
        return selectedPriority
    }
}

function getSelectedColor() {
    if (document.getElementById('selectRed').className === "addTask_selectedRed") {
        colorForCategory = "Red";
    } else if (document.getElementById('selectGreen').className === "addTask_selectedGreen") {
        colorForCategory = "Green";
    } else if (document.getElementById('selectOrange').className === "addTask_selectedOrange") {
        colorForCategory = "Orange";
    } else if (document.getElementById('selectPurple').className === "addTask_selectedPurple") {
        colorForCategory = "Purple";
    } else if (document.getElementById('selectTurquoise').className === "addTask_selectedTurquoise") {
        colorForCategory = "Turquoise";
    } else if (document.getElementById('selectBlue').className === "addTask_selectedBlue") {
        colorForCategory = "Blue";
    }
}

