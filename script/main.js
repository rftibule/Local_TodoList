class Task {
  constructor(Id, Todo, IsCompletd, EntryDate) {
    this.Id = Id;
    this.Todo = Todo;
    this.IsCompletd = IsCompletd;
    this.EntryDate = EntryDate;
  }
}

let ID = 0;

let Tasks = [];

//init---------------
const _ulList = document.querySelector("#myList");
const _form = document.querySelector("#my-form");
const _newTodo = document.querySelector("#textTask");
const _test = document.querySelector("#testA");
const _checkbox = document.querySelectorAll('input[type="checkbox"');

BindTaskToUI = () => {
    _ulList.innerHTML = '';

  Tasks.forEach((_task) => {
    let _li = document.createElement("li");
    _li.innerHTML = `<input type='checkbox' ${_task.IsCompletd == true ? "checked" : ""} onClick="CheckChanged(${_task.Id})" id="check_${_task.Id}">
        <h1 ${_task.IsCompletd == true ? "class='striked'" : ""} id="h1_${_task.Id}">${_task.Todo}</h1>
        <span class="entry-date"> ${_task.EntryDate.toLocaleDateString()} </span>
        <a href="#" class="button" onClick="RemoveTask(${_task.Id})">Delete</a>`;
    _ulList.appendChild(_li);
  });
};

RemoveTask = (pId) => {
    if(pId != undefined){
        let _index = Tasks.findIndex((t) => t.Id == pId);
        Tasks.splice(_index, 1);
    }
    BindTaskToUI();
};

AddTask = (pTodo) => {
    ID++;
    Tasks.push(new Task(ID, pTodo, false, new Date()));
    BindTaskToUI();
}

_form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    if(_newTodo.value != undefined && _newTodo.value != ''){
        AddTask(_newTodo.value);
    }
    _newTodo.value = "";
});

CheckChanged = (pId) =>{ 
    let _index = Tasks.findIndex((t) => t.Id == pId);
    Tasks[_index].IsCompletd = document.getElementById(`check_${pId}`).checked;
    BindTaskToUI();
    // const _h1ToUse = document.getElementById(`h1_${pId}`);
    // const _checkToUse = document.getElementById(`check_${pId}`).checked;
   
    // if(_checkToUse){
    //     _h1ToUse.setAttribute('class','striked');
    // }
    // else{
    //     _h1ToUse.removeAttribute('class')
    // }

}





