
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
    document.getElementById("selCategory").innerText = "New Category";
    document.getElementById("dropdown").innerHTML = "";
    document.getElementById('delFunct').removeAttribute("onclick");
    document.getElementById('selectColor').classList.remove('d-none')
}