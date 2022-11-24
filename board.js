function initBoard(){

    document.getElementById('sideTask').classList.remove('clicked');
    document.getElementById('board').classList.add('clicked');
    document.getElementById('content_board').innerHTML = '';
    document.getElementById('content_board').innerHTML += /*html*/ `

<div class="board_div">
        <div class="board_subDiv1">
            <h1>Board</h1>
            <div class="input_button">
                <input type="text" placeholder="Find Task" id="myInput" onkeyup="filterFunction()">
                <button onclick="addTask()">Add Task <img src="img/line.png"><img src="img/line.png" class="rotate_line"></button>
            </div>
        </div>
        <div class="list" id="myDiv">
            <ul class="sectionBox" id="toDo" ondrop="moveTo('toDo')" ondragover="allowDrop(event)">
                <li class="heading">To Do</li>
                <div class="category_container">
                </div>
            </ul>
            <ul class="sectionBox" id="inProgress" ondrop="moveTo('inProgress')" ondragover="allowDrop(event)">
                <li class="heading">In Progress</li>
                <div class="category_container">
                </div>
            </ul>
            <ul class="sectionBox" id="awaitingFeedback" ondrop="moveTo('awaitingFeedback')" ondragover="allowDrop(event)">
                <li class="heading">Awaiting Feedback</li>
                <div class="category_container">
                </div>
            </ul>
            <ul class="sectionBox" id="done" ondrop="moveTo('done')" ondragover="allowDrop(event)">
                <li class="heading">Done</li>
                <div class="category_container">
                </div>
            </ul>
        </div>
    </div>
    `;

renderBoard()
}