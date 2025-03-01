/**
 * Write your challenge solution here
 */



document.getElementById("taskInput").addEventListener('input',(event)=>{
    document.getElementById("taskInput").textContent = event.target.value;
})

document.getElementById("addButton").addEventListener('click',()=>{
    let input = document.getElementById("taskInput").textContent;
    let li = document.createElement('li');
    let taskInput = document.getElementById("taskList");
    let deleteButton = document.createElement('button');
    let checkBox = document.createElement('input');
    let dd=document.getElementById('empty').style.visibility = "hidden";
  //  taskInput.parentNode.removeChild(remove);
    checkBox.type= 'checkbox';
    checkBox.id="checkBox";
    deleteButton.className= "delete-button";
    deleteButton.textContent = "Delete Task";
    li.className="task-item";
    li.textContent = input;
    li.appendChild(checkBox);
    li.appendChild(deleteButton);
    taskInput.appendChild(li);
    
document.getElementById("totalTasks").textContent = `Total tasks: ${taskInput.childElementCount-1}`;
    document.getElementById("taskInput").value='';
});

// document.getElementById("checkbox").addEventListener('click',()=>{

// });

