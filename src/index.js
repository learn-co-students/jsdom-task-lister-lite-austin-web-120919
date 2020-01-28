document.addEventListener("DOMContentLoaded", () => {
  const taskList= document.querySelector('#tasks');
  const taskDescription = document.querySelector('#new-task-description');
  const taskForm = document.querySelector('#create-task-form');


});


function createNewTask(event){
  event.preventDefault();

  const taskList= document.querySelector('#tasks');
  const taskDescription = document.querySelector('#new-task-description');
  const newTaskItem = document.createElement('li');
  newTaskItem.innerHTML = taskDescription.value;

  taskList.appendChild(newTaskItem);
  event.target.reset();
};

const taskForm = document.querySelector('#create-task-form');

taskForm.addEventListener('submit',createNewTask);
