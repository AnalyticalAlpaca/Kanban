let categoryNames = [];
let categoryColors = [];
let prios = [];
let titles = [];
let descriptions = [];
let dates = [];
let selectedCategory = [];
let selectedColor = [];
let allTask;


async function init() {
    setURL('https://gruppe-374.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    allTask = JSON.parse(backend.getItem('allTask')) || [];
    save();
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
        <span><input type="checkbox" checked="checked">${prioInput}<br></span>`
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

function toggleDropdown() {

    let dropdown = document.getElementById("dropdown");
    document.getElementById("dropdown2").classList.add("d-none")
    if (dropdown.classList.contains("d-none")) {
        document.getElementById("assignedMain").style.top = "650px";
        dropdown.classList.remove('d-none');

        dropdownCategory();

    } else {
        dropdown.classList.add("d-none");
        document.getElementById("assignedMain").style.top = "500px";
    }
}
function toggleDropdown2() {
    let dropdown = document.getElementById("dropdown2");
    if (dropdown.classList.contains("d-none")) {
        dropdown.classList.remove('d-none');
        document.getElementById("dropdown").classList.add("d-none");
        document.getElementById("assignedMain").style.top = "500px";
        dropdownAssigned();

    } else {
        dropdown.classList.add("d-none");
        document.getElementById("dropdown").classList.add("d-none");
        document.getElementById("assignedMain").style.top = "500px";
    }

}
function dropdownAssigned() {
    document.getElementById("dropdown2").innerHTML = `
          
          <br>
              <div class="category dropdownPadding" id="person1" onclick="showPerson1()">
                  <span class="test">
                  Julius Peterson
                  </span>
              </div>
                        
              <div class="category2 dropdownPadding" id="person2" onclick="showPerson2()">
                  <span class="test">
                      Tyson Ngu
                  </span>
              </div>
              
              <div class="category2 dropdownPadding" id="person3" onclick="showPerson3()">
                  <span class="test">
                      Sebastian Mayer
                  </span>
              </div>
              `;
}
function closeAssigned() {
    document.getElementById('assignDropdown').innerHTML = `
    <div class="hoverDropdown" onclick="toggleDropdown2()">
            <div class="arrowEnd dropdownPadding">
            <span class="test" id="selPerson">
                Select contact
            </span>
            
        </div>
        </div>
             
            <div id="dropdown2" class="d-none">
            
        </div>
        `
}

let assignedTo;
function showPerson1() {
    let dropdown = document.getElementById("dropdown2");
    dropdown.classList.add("d-none");
    document.getElementById('selPerson').innerText = 'Julius Peterson';
    assignedTo = "Julius Peterson";
}
function showPerson2() {
    let dropdown = document.getElementById("dropdown2");
    dropdown.classList.add("d-none");
    document.getElementById('selPerson').innerText = 'Tyson Ngu';
    assignedTo = "Tyson Ngu";
}
function showPerson3() {
    let dropdown = document.getElementById("dropdown2");
    dropdown.classList.add("d-none");
    document.getElementById('selPerson').innerText = 'Sebastian Mayer';
    assignedTo = "Sebastian Mayer";
}

function dropdownCategory() {
    document.getElementById("assignedMain").style.top = "650px";
    if (categoryNames.length > 1) {
        document.getElementById("dropdown").classList.add("scrollbar")
    }
    document.getElementById("dropdown").innerHTML = `
          <div id="scrollCategory">
          <br>
              <div class="category dropdownPadding" id="newCategory" onclick="categoryAdd()">
                  <span class="test">
                  
                      New Category
                  </span>
              </div>
                        
              <div class="category2 dropdownPadding">
                  <span class="test" onclick="toggleDropdown()">
                      
                      Select task category
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
let currentCategory;
let currentColor;
function categoryShow(x) {
    document.getElementById("assignedMain").style.top = "500px";
    let categoryColor = categoryColors[x];
    currentColor = categoryColors[x];
    currentCategory = categoryNames[x];
    document.getElementById("dropdown").classList.remove("scrollbar");
    document.getElementById("selCategory").innerHTML = ``
    if (categoryColor == "lila") {

        document.getElementById("selCategory").innerHTML = `
        <span class="selectPurple" id="selCategory">${categoryNames[x]}</span>
        `
    }
    else if (categoryColor == "rot") {
        document.getElementById("selCategory").innerHTML = `
        <span class="selectRed" id="selCategory">${categoryNames[x]}</span>
        `
    }
    else if (categoryColor == "blau") {
        document.getElementById("selCategory").innerHTML = `
        <span class="selectBlue" id="selCategory">${categoryNames[x]}</span>
        `
    }
    else if (categoryColor == "grün") {

        document.getElementById("selCategory").innerHTML = `
        <span class="selectGreen" id="selCategory">${categoryNames[x]}</span>
        `
    }
    else if (categoryColor == "hellblau") {
        document.getElementById("selCategory").innerHTML = `
        <span class="selectLightBlue" id="selCategory">${categoryNames[x]}</span>
        `
    }
    else if (categoryColor == "orange") {
        document.getElementById("selCategory").innerHTML = `
        <span class="selectOrange" id="selCategory">${categoryNames[x]}</span>
        `
    }


    document.getElementById("dropdown").innerHTML = "";

}

function categoryAdd() {
    document.getElementById("dropdown").classList.remove("scrollbar");
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
    categoryName = document.getElementById('inputCategory').value
    if (categoryName == "" || color == null) {
        alert("bitte etwas eingeben")
    } else {


        document.getElementById("dropdown").classList.remove("scrollbar");
        categoryNames.push(categoryName);
        categoryColors.push(color);
        console.log(categoryNames);
        console.log(categoryColors);
        categoryName = undefined;
        color = undefined;
        document.getElementById("dropdown").innerHTML = "";
        document.getElementById('selectColor').classList.add('d-none');
        document.getElementById('arrowEnd').classList.add('arrowEnd');
        document.getElementById('arrowEnd').classList.add('dropdownPadding');

        closeCategory();
        toggleDropdown();

        event.preventDefault();
    }
};

function closeCategory() {
    document.getElementById("ctgDropdown").innerHTML = "";
    document.getElementById("DropdownMain").innerHTML = `
    <div class="dropdown" id="ctgDropdown">
            <div class="hoverDropdown" id="delFunc" onclick="toggleDropdown()">
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

}

function createTask() {
    let titleInput = document.getElementById('title-Input').value;
    let description = document.getElementById("descriptionInput").value;
    let date = document.getElementById("dateInput").value;
    let task =
    {
        title: titleInput,
        descriptions: description,
        taskDate: date,
        prios: selectedPrio,
        categoryNames: currentCategory,
        categoyColors: currentColor,
        assigned: assignedTo,
    }

    allTask.push(task);
    save();
    console.log(allTask);
    clearInput();



}
function clearInput() {
    document.getElementById('title-Input').value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById('subtask').value = "";
    prioDefault();
    closeCategory();
    closeAssigned();
}

async function save(){
    await backend.setItem('allTask', JSON.stringify(allTask));
}