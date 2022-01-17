let addBtn = document.querySelector(".inputDiv button"),
  inputField = document.querySelector(".inputDiv > input"),
  tasksList = document.querySelector(".task-list"),
  incompleteTasks = document.querySelector(".task-list ul li"),
  clearBtn = document.querySelector(".lower-part button"),
  completedList = document.querySelector(".completed-tasks ul");
  // console.log(completedList);
let arrayOfTasks,
  arrayOfCompleted = [];



function start() {
  let UncompletedTasks = JSON.parse(localStorage.getItem("Tasks"));
  let completedTasks = JSON.parse(localStorage.getItem("CTasks"));
  if (UncompletedTasks !== null) {
    UncompletedTasks.forEach((task) => {
      let tags = `<li>${task}<div class="icon-wrapper"><i class="fa-solid fa-check"></i></div></li>`;
      tasksList.innerHTML += tags;
    });
  }
  if(completedTasks!==null){
    completedTasks.forEach(task=>{
      let tags = `<li>${task}<div class="icon-wrapper"><i class="fa-solid fa-trash"></i></div></li>`
      completedList.innerHTML += tags;
    })
  }
}








function moveToCompleted(){
  let getLocalStorage = localStorage.getItem("CTasks")
  let getLocalStorageTasks = localStorage.getItem("Tasks"),
  taskArray = JSON.parse(getLocalStorageTasks)
  if(getLocalStorage==null){
    arrayOfCompleted=[]
  }
  else{
    arrayOfCompleted = JSON.parse(getLocalStorage)
  }
  // console.log(taskArray);
  let txt = this.textContent
  let index=taskArray.indexOf(txt)
  taskArray.splice(index,1)
  localStorage.setItem("Tasks",JSON.stringify(taskArray))
  arrayOfCompleted.push(txt)
  localStorage.setItem("CTasks",JSON.stringify(arrayOfCompleted))
  this.remove()
  completedList.innerHTML += `<li>${txt}<div class="icon-wrapper"><i class="fa-solid fa-trash"></i></div></li>`
}



function move(){
  Array.from(tasksList.children).forEach(task=>{
    task.addEventListener('click',moveToCompleted)
  })
}
function moveToo(){
  Array.from(completedList.children).forEach(task=>{
    task.addEventListener('click',()=>{
      console.log(task);
      let txt= task.textContent
      array = JSON.parse(localStorage.getItem("CTasks"))
      if(txt!==undefined){
      let i=array.indexOf(txt)
      array.splice(i,1)
      localStorage.setItem("CTasks",JSON.stringify(array))
      task.remove()
      }
    })
  })
}




window.onload = start();
window.onload = setTimeout(() => {
  move()
  moveToo()
}, 1000);

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

  setTimeout(move(),1000)
  setTimeout(moveToo(),1000)




}
function clearList() {
  localStorage.clear();
  tasksList.innerHTML = "";
}

addBtn.addEventListener("click", addNewItem);
inputField.addEventListener("input", checkIfType);
clearBtn.addEventListener("click", clearList);
