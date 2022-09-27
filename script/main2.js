// no project, just use queryselectors etc

const taskForm = document.getElementById("myForm");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  AddTask();
});

function AddTask() {
  const tasks = document.querySelector("#myList");
  const _task = taskForm.querySelector('input[type="text"]');

  if (_task.value != undefined && _task.value != "") {
    const _li = document.createElement("li");
    const _check = document.createElement("input");
    _check.type = "checkbox";
    _check.addEventListener("change", (e) => {
      if (e.target.checked) {
        const _text = e.target.parentElement.querySelector("h1");
        _text.classList.add("striked");
      } else {
        const _text = e.target.parentElement.querySelector("h1");
        _text.classList.remove("striked");
      }
    });

    const _h1 = document.createElement("h1");
    _h1.textContent = _task.value;

    const _span = document.createElement("span");
    _span.textContent = new Date().toLocaleString();
    _span.classList.add("entry-date");

    const _a = document.createElement("a");
    _a.classList.add("button");
    _a.href = "#";
    _a.addEventListener("click", (e) => {
      _a.parentElement.parentElement.removeChild(_a.parentElement);
    });
    _a.textContent = "Delete";

    //Add everything
    tasks.appendChild(_li);
    _li.appendChild(_check);
    _li.appendChild(_h1);
    _li.appendChild(_span);
    _li.appendChild(_a);

    _task.value = "";
    _task.focus();
  }
}
