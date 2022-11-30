let categoryNames = [];
let categoryColors = [];
let prios = [];
let titles = [];
let descriptions = [];
let dates = [];


function select() {
    document.getElementById('menu_links').classList.add('menu_links_selected')
}
let selectedPrio;
function prioDefault() {
    document.getElementById('medium-img').src = "img/medium.png";
    document.getElementById('low-img').src = "img/low.png";
    document.getElementById('urgent-img').src = "img/urgent.png";
    document.getElementById('urgent').classList.remove('prio-after-urgent');
    document.getElementById('medium').classList.remove('prio-after-medium');
    document.getElementById('low').classList.remove('prio-after-low');

}
function afterUrgent() {
    document.getElementById('urgent').classList.add('prio-after-urgent');
    document.getElementById('medium').classList.remove('prio-after-medium');
    document.getElementById('low').classList.remove('prio-after-low');
    document.getElementById('medium-img').src = "img/medium.png";
    document.getElementById('low-img').src = "img/low.png";
    document.getElementById('urgent-img').src = "img/urgent-after.png";
    selectedPrio = "Urgent";
}

function afterMedium() {
    document.getElementById('medium').classList.add('prio-after-medium');
    document.getElementById('low').classList.remove('prio-after-low');
    document.getElementById('urgent').classList.remove('prio-after-urgent');
    document.getElementById('low-img').src = "img/low.png";
    document.getElementById('urgent-img').src = "img/urgent.png";
    document.getElementById('medium-img').src = "img/medium-after.png";
    selectedPrio = "Medium";
}

function afterLow() {
    document.getElementById('low').classList.add('prio-after-low');
    document.getElementById('medium').classList.remove('prio-after-medium');
    document.getElementById('urgent').classList.remove('prio-after-urgent');
    document.getElementById('urgent-img').src = "img/urgent.png";
    document.getElementById('medium-img').src = "img/medium.png";
    document.getElementById('low-img').src = "img/low-after.png";
    selectedPrio = "Low";
}

function changeBtn(event) {
    document.getElementById('subtask').classList.remove('input-trans')
    document.getElementById('subtask').classList.add('input-trans-after')
    document.getElementById('addBtn1').classList.add('d-none')
    document.getElementById('addBtn2').classList.remove('d-none')
    document.getElementById('addBtn3').classList.remove('d-none')
    document.getElementById('vl2').classList.remove('d-none')
    event.preventDefault();
}

function submitSubtask(event) {
    let prioInput = document.getElementById('subtask').value;
    if (prioInput == 0) {

    } else {


        document.getElementById("subtaskCheck").innerHTML += `
    <input type="checkbox" checked="checked">${prioInput}<br>`
        closeSubtask(event);
        event.preventDefault();
    }
}
function closeSubtask(event) {
    document.getElementById('subtask').classList.add('input-trans');
    document.getElementById('subtask').classList.remove('input-trans-after');
    document.getElementById('addBtn1').classList.remove('d-none');
    document.getElementById('addBtn2').classList.add('d-none');
    document.getElementById('addBtn3').classList.add('d-none');
    document.getElementById('vl2').classList.add('d-none');
    document.getElementById('subtask').value = "";
    event.preventDefault();
}
let dropdown_clicked = false;

function dropdownCategory() {
    if (dropdown_clicked == false || (dropdown_clicked == true && document.getElementById("selCategory").innerText != "Select task category")) {

        document.getElementById('assignedMain').style.top = "650px";
        document.getElementById('dropdown').innerHTML = `
        
        <br>
            <div class="category dropdownPadding" id="newCategory" onclick="categoryAdd()">
                <span class="test">
                
                    New Category
                </span>
            </div>
                      
            <div class="category2 dropdownPadding">
                <span class="test">
                    
                    Select task category
                </span>
            </div>

            <div id="addnewCategory">

            </div>
            `
        addnewCategory();
        dropdown_clicked = true;

    }
    else {
        document.getElementById('assignedMain').style.top = "500px";
        document.getElementById("ctgDropdown").innerHTML = "";

        document.getElementById("DropdownMain").innerHTML = `
            <div class="dropdown" id="ctgDropdown">
            <div class="hoverDropdown" id="delFunc" onclick="dropdownCategory()">
            <div class="arrowEnd dropdownPadding" id="arrowEnd">
            <span class="test" id="selCategory">Select task category</span>
            
        </div>
        </div>
             
            <div id="dropdown">
            
        </div>
        
    </div>

    <div class="selectColor d-none" id="selectColor">
    <span class="selectRed" id="selectRed" onclick="selectedRed()"></span>
    <span class="selectGreen" id="selectGreen" onclick="selectedGreen()"></span>
    <span class="selectOrange" id="selectOrange" onclick="selectedOrange()"></span>
    <span class="selectPurple" id="selectPurple" onclick="selectedPurple()"></span>
    <span class="selectLightBlue" id="selectLightBlue" onclick="selectedLightBlue()"></span>
    <span class="selectBlue" id="selectBlue" onclick="selectedBlue()"></span>
    </div>

`

        document.getElementById('selectColor').classList.add('d-none');
        dropdown_clicked = false;
    }

}
function addnewCategory() {

    for (let i = 0; i < categoryNames.length; i++) {
        const categoryName = categoryNames[i];
        const categoryColor = categoryColors[i];
        if (categoryName == "") {
            document.getElementById('addnewCategory').innerHTML = "";
        } else {



            document.getElementById('addnewCategory').innerHTML += `

        <div class="category2 dropdownPadding" id="test" onclick="categoryShow(${i})">
        <span class="test">
            ${categoryName} <span id="colorCircle${i}"></span>
            
        </span>
        </div>`
            if (categoryColor == "lila") {
                document.getElementById(`colorCircle${i}`).classList.add('selectPurple');
            }
            else if (categoryColor == "rot") {
                document.getElementById(`colorCircle${i}`).classList.add('selectRed');
            }
            else if (categoryColor == "blau") {
                document.getElementById(`colorCircle${i}`).classList.add('selectBlue');
            }
            else if (categoryColor == "grün") {
                document.getElementById(`colorCircle${i}`).classList.add('selectGreen');
            }
            else if (categoryColor == "hellblau") {
                document.getElementById(`colorCircle${i}`).classList.add('selectLightBlue');
            }
            else if (categoryColor == "orange")
                document.getElementById(`colorCircle${i}`).classList.add('selectOrange');
        }

    }

}


function categoryShow() {
    for (let i = 0; i < categoryNames.length; i++) {
        const categoryName = categoryNames[i];
        const categoryColor = categoryColors[i];
        document.getElementById("selCategory").innerHTML = `
        ${categoryName} ${categoryColor}
    `;
        document.getElementById("dropdown").innerHTML = "";
        dropdown_clicked = false;
    }
}




function categoryAdd() {
    document.getElementById('delFunc').removeAttribute("onclick");
    document.getElementById("selCategory").innerHTML = `
    <div class="flex3"><input class="input-trans2 widthCategory" placeholder="Category name ..." id="inputCategory" required><div class="sub-task-btn">
    <button id="addBtn2"><img src="img/close.png" width="12px" onclick="closeCategory()"></button>
    <div class="vl2" id="vl2"></div>
    <button id="addBtn3"><img src="img/accept.png" width="15px" onclick="categoryPush(event)"></button>
    </div>
    </div>
    ` ;

    document.getElementById("dropdown").innerHTML = "";
    document.getElementById('selectColor').classList.remove('d-none');
    document.getElementById('arrowEnd').classList.remove('arrowEnd');
    document.getElementById('arrowEnd').classList.remove('dropdownPadding');
    document.getElementById('assignedMain').style.top = "560px";
}


function categoryPush(event) {

    categoryNames.push(categoryName);
    categoryColors.push(color);
    console.log(categoryNames)
    console.log(categoryColors)
    dropdownCategory();
    event.preventDefault();

};

function closeCategory() {
    document.getElementById("ctgDropdown").innerHTML = "";
    document.getElementById("DropdownMain").innerHTML = `
    <div class="dropdown" id="ctgDropdown">
            <div class="hoverDropdown" id="delFunc" onclick="dropdownCategory()">
            <div class="arrowEnd dropdownPadding" id="arrowEnd">
            <span class="test" id="selCategory">Select task category </span>
            
        </div>
        </div>
             
            <div id="dropdown">
            
        </div>
        
    </div>

    <div class="selectColor d-none" id="selectColor">
    <span class="selectRed" id="selectRed" onclick="selectedRed()"></span>
    <span class="selectGreen" id="selectGreen" onclick="selectedGreen()"></span>
    <span class="selectOrange" id="selectOrange" onclick="selectedOrange()"></span>
    <span class="selectPurple" id="selectPurple" onclick="selectedPurple()"></span>
    <span class="selectLightBlue" id="selectLightBlue" onclick="selectedLightBlue()"></span>
    <span class="selectBlue" id="selectBlue" onclick="selectedBlue()"></span>
    </div>

`

    document.getElementById('selectColor').classList.add('d-none');
}

let color;
let categoryName;
function selectedRed() {
    color = "rot";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectRed').classList.add('selectedRed');
    document.getElementById('selectGreen').classList.add('selectGreen');
    document.getElementById('selectBlue').classList.add('selectBlue');
    document.getElementById('selectPurple').classList.add('selectPurple');
    document.getElementById('selectOrange').classList.add('selectOrange');
    document.getElementById('selectLightBlue').classList.add('selectLightBlue');
    document.getElementById('selectRed').classList.remove('selectRed');
    document.getElementById('selectGreen').classList.remove('selectedGreen');
    document.getElementById('selectOrange').classList.remove('selectedOrange');
    document.getElementById('selectPurple').classList.remove('selectedPurple');
    document.getElementById('selectBlue').classList.remove('selectedBlue');
    document.getElementById('selectLightBlue').classList.remove('selectedLightBlue');
    // categoryNames.push(categoryName);
    // categoryColors.push(color);
}
function selectedGreen() {
    color = "grün";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectGreen').classList.add('selectedGreen');
    document.getElementById('selectRed').classList.add('selectRed');
    document.getElementById('selectBlue').classList.add('selectBlue');
    document.getElementById('selectPurple').classList.add('selectPurple');
    document.getElementById('selectOrange').classList.add('selectOrange');
    document.getElementById('selectBlue').classList.add('selectLightBlue');
    document.getElementById('selectGreen').classList.remove('selectGreen');
    document.getElementById('selectRed').classList.remove('selectedRed');
    document.getElementById('selectOrange').classList.remove('selectedOrange');
    document.getElementById('selectPurple').classList.remove('selectedPurple');
    document.getElementById('selectBlue').classList.remove('selectedBlue');
    document.getElementById('selectLightBlue').classList.remove('selectedLightBlue');
    // categoryNames.push(categoryName);
    // categoryColors.push(color);
}
function selectedOrange() {
    color = "orange";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectOrange').classList.add('selectedOrange');
    document.getElementById('selectRed').classList.add('selectRed');
    document.getElementById('selectBlue').classList.add('selectBlue');
    document.getElementById('selectPurple').classList.add('selectPurple');
    document.getElementById('selectLightBlue').classList.add('selectLightBlue');
    document.getElementById('selectGreen').classList.add('selectGreen');
    document.getElementById('selectOrange').classList.remove('selectOrange');
    document.getElementById('selectRed').classList.remove('selectedRed');
    document.getElementById('selectGreen').classList.remove('selectedGreen');
    document.getElementById('selectPurple').classList.remove('selectedPurple');
    document.getElementById('selectBlue').classList.remove('selectedBlue');
    document.getElementById('selectLightBlue').classList.remove('selectedLightBlue');
    // categoryNames.push(categoryName);
    // categoryColors.push(color);
}
function selectedPurple() {
    color = "lila";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectPurple').classList.add('selectedPurple');
    document.getElementById('selectRed').classList.add('selectRed');
    document.getElementById('selectOrange').classList.add('selectOrange');
    document.getElementById('selectGreen').classList.add('selectGreen');
    document.getElementById('selectBlue').classList.add('selectBlue');
    document.getElementById('selectLightBlue').classList.add('selectLightBlue');
    document.getElementById('selectRed').classList.remove('selectedRed');
    document.getElementById('selectGreen').classList.remove('selectedGreen');
    document.getElementById('selectOrange').classList.remove('selectedOrange');
    document.getElementById('selectPurple').classList.remove('selectPurple');
    document.getElementById('selectBlue').classList.remove('selectedBlue');
    document.getElementById('selectLightBlue').classList.remove('selectedLightBlue');
    // categoryNames.push(categoryName);
    // categoryColors.push(color);
}
function selectedLightBlue() {
    color = "hellblau";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectLightBlue').classList.add('selectedLightBlue');
    document.getElementById('selectRed').classList.add('selectRed');
    document.getElementById('selectPurple').classList.add('selectPurple');
    document.getElementById('selectOrange').classList.add('selectOrange');
    document.getElementById('selectGreen').classList.add('selectGreen');
    document.getElementById('selectBlue').classList.add('selectBlue');
    document.getElementById('selectRed').classList.remove('selectedRed');
    document.getElementById('selectGreen').classList.remove('selectedGreen');
    document.getElementById('selectOrange').classList.remove('selectedOrange');
    document.getElementById('selectPurple').classList.remove('selectedPurple');
    document.getElementById('selectBlue').classList.remove('selectedBlue');
    // categoryNames.push(categoryName);
    // categoryColors.push(color);

}
function selectedBlue() {
    color = "blau";
    categoryName = document.getElementById('inputCategory').value
    document.getElementById('selectBlue').classList.add('selectedBlue');
    document.getElementById('selectLightBlue').classList.add('selectLightBlue');
    document.getElementById('selectPurple').classList.add('selectPurple');
    document.getElementById('selectOrange').classList.add('selectOrange');
    document.getElementById('selectGreen').classList.add('selectGreen');
    document.getElementById('selectRed').classList.add('selectRed');
    document.getElementById('selectRed').classList.remove('selectedRed');
    document.getElementById('selectGreen').classList.remove('selectedGreen');
    document.getElementById('selectOrange').classList.remove('selectedOrange');
    document.getElementById('selectPurple').classList.remove('selectedPurple');
    document.getElementById('selectLightBlue').classList.remove('selectedLightBlue');
    // categoryNames.push(categoryName);
    // categoryColors.push(color);
}

function createTask() {
    let titleInput = document.getElementById('title-Input').value;
    let description = document.getElementById("descriptionInput").value;
    let date = document.getElementById("dateInput").value;
    dates.push(date);
    console.log(dates);
    descriptions.push(description);
    console.log(descriptions);
    titles.push(titleInput);
    console.log(titles);
    prios.push(selectedPrio);
    console.log(prios);

}

function clearInput() {
    document.getElementById('title-Input').value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById('subtask').value = "";
    prioDefault();
}