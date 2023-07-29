const nameSurnameInput = document.querySelector("#nameSurname");
const taskNameInput = document.querySelector("#taskName");
const taskDateInput = document.querySelector("#taskDate");
const tasksWrapper = document.querySelector(".tasks-wrapper");
let tasks = [];
let counter = 0;

const createTask = () => {
  tasksWrapper.innerHTML = "";
  tasks.push({
    fullName: nameSurnameInput.value,
    taskName: taskNameInput.value,
    taskDate: taskDateInput.value,
    id: counter,
  });
  counter++;
  renderTasks();
};

const renderTasks = () => {
  nameSurnameInput.value = "";
  taskNameInput.value = "";
  taskDateInput.value = "";
  tasks.map((element) => {
    let taskItem = document.createElement("div");
    taskItem.classList.add("taskItem");

    let taskItemUserName = document.createElement("span");
    let taskItemName = document.createElement("span");
    let taskItemDate = document.createElement("span");
    taskItemUserName.classList.add("taskItemText");
    taskItemName.classList.add("taskItemText");
    taskItemDate.classList.add("taskItemText");
    taskItemDate.classList.add("date");

    let elementUserName = document.createTextNode(element.fullName);
    let elementTaskName = document.createTextNode(element.taskName);
    let elementTaskDate = document.createTextNode(element.taskDate);


    taskItemName.appendChild(elementTaskName);
    taskItemUserName.appendChild(elementUserName);
    taskItemDate.appendChild(elementTaskDate);

    taskItem.appendChild(taskItemUserName);
    taskItem.appendChild(taskItemName);
    taskItem.appendChild(taskItemDate);

    tasksWrapper.appendChild(taskItem);
  });
};
