
function select() {
    document.getElementById('menu_links').classList.add('menu_links_selected')
}

function afterUrgent() {
    document.getElementById('urgent').classList.add('prio-after-urgent');
    document.getElementById('medium').classList.remove('prio-after-medium');
    document.getElementById('low').classList.remove('prio-after-low');
    document.getElementById('medium-img').src = "img/medium.png";
    document.getElementById('low-img').src = "img/low.png";
    document.getElementById('urgent-img').src = "img/urgent-after.png";
}

function afterMedium() {
    document.getElementById('medium').classList.add('prio-after-medium');
    document.getElementById('low').classList.remove('prio-after-low');
    document.getElementById('urgent').classList.remove('prio-after-urgent');
    document.getElementById('low-img').src = "img/low.png";
    document.getElementById('urgent-img').src = "img/urgent.png";
    document.getElementById('medium-img').src = "img/medium-after.png";
}

function afterLow() {
    document.getElementById('low').classList.add('prio-after-low');
    document.getElementById('medium').classList.remove('prio-after-medium');
    document.getElementById('urgent').classList.remove('prio-after-urgent');
    document.getElementById('urgent-img').src = "img/urgent.png";
    document.getElementById('medium-img').src = "img/medium.png";
    document.getElementById('low-img').src = "img/low-after.png";
}

function changeBtn() {
    document.getElementById('subtask').classList.remove('input-trans')
    document.getElementById('subtask').classList.add('input-trans-after')
    document.getElementById('addBtn1').classList.add('d-none')
    document.getElementById('addBtn2').classList.remove('d-none')
    document.getElementById('addBtn3').classList.remove('d-none')
    document.getElementById('vl2').classList.remove('d-none')
}
let dropdown_clicked = false;
function dropdownCategory() {
    if (dropdown_clicked == false) {
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
            `
        dropdown_clicked = true;
    }
    else {
        document.getElementById('ctgDropdown').innerHTML = `
        <div class="dropdown" id="ctgDropdown" onclick="dropdownCategory()">
            <div class="hoverDropdown">
            <div class="arrowEnd dropdownPadding">
            <span class="test">Select task category</span>
            
        </div>
        </div>
             
            <div id="dropdown">
            
        </div>
        
    </div>
            `
        dropdown_clicked = false;
    }
}

function categoryAdd() {
    document.getElementById("selCategory").innerHTML = `
    <div class="flex3"><input class="input-trans widthCategory"><div class="sub-task-btn">
    <button id="addBtn2"><img src="img/close.png" width="12px"></button>
    <div class="vl2" id="vl2"></div>
    <button id="addBtn3"><img src="img/accept.png" width="15px"></button>
    </div>
    </div>
    ` ;
    document.getElementById("dropdown").innerHTML = "";
    document.getElementById('delFunct').removeAttribute("onclick");
    document.getElementById('selectColor').classList.remove('d-none');
    document.getElementById('arrowEnd').classList.remove('arrowEnd');
}

function selectedRed() {
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