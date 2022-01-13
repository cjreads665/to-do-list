let addBtn = document.querySelector(".inputDiv button"),
  inputField = document.querySelector(".inputDiv > input"),
  tasksList = document.querySelector(".task-list"),
  clearBtn = document.querySelector(".lower-part button"),
  completedList = document.querySelector("completed-tasks");
let arrayOfTasks,
  arrayOfCompleted = [];

function start() {
  let UncompletedTasks = JSON.parse(localStorage.getItem("Tasks"));
  if (UncompletedTasks !== null) {
    UncompletedTasks.forEach((task) => {
      let tags = `<li>${task}<div class="icon-wrapper"><i class="fa-solid fa-check"></i></div></li>`;
      tasksList.innerHTML += tags;
    });
  }
}

let prom = new Promise(function (successFunc, failureFunc) {
    let getCompletedTasks = localStorage.getItem("CTasks");
  //if the key returns null instead of a value
  if (getCompletedTasks == null) {
    arrayOfTasks = [];
  } else {
    //get the value from its key by first parsing
    arrayOfTasks = JSON.parse(getUncompletedTasks);
  }
});

// setInterval(() => {
//     // console.log(tasksList.children);
//     Array.from(tasksList.children).forEach(task=>{
//         task.addEventListener('click',()=>{
//             console.log(task);
//         })
//     })
// }, 1000);

/**
 * get the element
 * create a local space for completed(if there is none)
 * transfer the element from tasks to completed -> by pushing to array of completed
 * remove the element from task
 * add the array to completed local storage
 * remove element from the current parent
 *
 */
function moveToCompleted() {}

window.onload = start();

function checkIfType() {
  //after removing whitespaces, if there are no characters
  if (inputField.value.trim() == 0) {
    addBtn.classList.remove("active");
  } else {
    addBtn.classList.add("active");
  }
}

function addNewItem() {
  let getUncompletedTasks = localStorage.getItem("Tasks");
  //if the key returns null instead of a value
  if (getUncompletedTasks == null) {
    arrayOfTasks = [];
  } else {
    //get the value from its key by first parsing
    arrayOfTasks = JSON.parse(getUncompletedTasks);
  }
  if (inputField.value == "") {
    alert("enter a new task");
  } else {
    arrayOfTasks.push(inputField.value);
    localStorage.setItem("Tasks", JSON.stringify(arrayOfTasks));
    let tags = `<li>${inputField.value}<div class="icon-wrapper"></span><i class="fa-solid fa-check"></i></div></li>`;
    tasksList.innerHTML += tags;
    inputField.value = "";
  }
}
function clearList() {
  localStorage.clear();
  tasksList.innerHTML = "";
}

addBtn.addEventListener("click", addNewItem);
inputField.addEventListener("input", checkIfType);
clearBtn.addEventListener("click", clearList);
