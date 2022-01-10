let addBtn = document.querySelector('.inputDiv button'),
inputField = document.querySelector('.inputDiv > input'),
tasksList = document.querySelector('.task-list'),
clearBtn = document.querySelector('.lower-part button')

window.onload = function start(){
    let UncompletedTasks = JSON.parse(localStorage.getItem("Tasks"))
    if(UncompletedTasks!==null){
        UncompletedTasks.forEach(task => {
            let tags = `<li>${task}<div class="icon-wrapper"><i class="fa-solid fa-check"></i></div></li>`
            tasksList.innerHTML += tags
        });
    }
   

}


function checkIfType(){
    //after removing whitespaces, if there are no characters
    if(inputField.value.trim()==0){
        addBtn.classList.remove('active')
    }
    else{
        addBtn.classList.add('active')
    }
}

function addNewItem(){
let arrayOfTasks;
    let getUncompletedTasks = localStorage.getItem("Tasks")
    //if the key returns null instead of a value
    if(getUncompletedTasks==null){
        arrayOfTasks = []
    }
    else{
        //get the value from its key by first parsing
        arrayOfTasks = JSON.parse(getUncompletedTasks)
    }
    arrayOfTasks.push(inputField.value)
    localStorage.setItem("Tasks",JSON.stringify(arrayOfTasks))
    let tags = `<li>${inputField.value}<div class="icon-wrapper"><i class="fa-solid fa-check"></i></div></li>`
    tasksList.innerHTML += tags
    inputField.value=""
    
}
function clearList(){
    localStorage.clear()
    tasksList.innerHTML = ''
}

addBtn.addEventListener('click', addNewItem)
inputField.addEventListener('input',checkIfType)
clearBtn.addEventListener('click', clearList)