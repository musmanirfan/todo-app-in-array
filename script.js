let addVal = document.querySelector("#name");
let todoList = document.querySelector(".todo-list");
let showInp = document.querySelector(".show");
let isEditing ;

const todoArr = []
function addFunc() {
    let todoValue = addVal.value;
    if (addVal.value !== "") {
        todoArr.push(todoValue);
        console.log(todoArr);
        
    } else {
        alert("plz insert value")
    }
    printAllTodos();
    addVal.value = "";
}


function printAllTodos() {
    todoList.innerHTML = "";
    for (let i = 0; i < todoArr.length; i++) {
        todoList.innerHTML += `<div class="todo-list-div">
        <p id="todo-${i}">${todoArr[i]}</p>
        <button onclick="editButton(${i})">Edit</button>
        <button onclick="deleteTodo(${i})">Delete</button>  
        </div>
        `
    }
}

function deleteTodo (element){
    if(isEditing){
        alert("plz update first");
    }else {
        todoArr.splice(element, 1);
        printAllTodos();
    }
}

let hideInp = document.querySelector(".hide");
let editName = document.querySelector("#edit-name");
let ediIndex;

function editButton (element){
    isEditing = true;
    ediIndex = element;
    hideInp.className += "show";
    showInp.className = "hide";
    editName.value = todoArr[element];
}



function updateButton (){
    isEditing = false;
    todoArr.splice(ediIndex, 1,  editName.value)
    hideInp.className = "hide";
    showInp.className = "show";
    printAllTodos();
    console.log(todoArr);
    
}