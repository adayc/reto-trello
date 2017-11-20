// Declarando variables 
var task = document.getElementById('task-box');
var btnTask = document.getElementById('send-task');
var alltasks = document.getElementById('task-content');
var taskcontents = document.getElementsByClassName('task-content');
var linkTask = document.getElementById('add-task');
var linkList = document.getElementById('add-list');
var listTitle = document.getElementById('list-title');
var btnTitle= document.getElementById('send-title');
var toDo=document.getElementById('to-do');


window.addEventListener('load', function(event) {
// Desapareciendoel titulo de la lista
 listTitle.classList.add('not-see');
  // Desapareciendo boton añadir tarea
linkTask.classList.add('not-see');
  // Desapareciendo los cuadros de tareas
taskcontents[0].classList.add('not-see');//
 taskcontents[1].classList.add('not-see');
// Desaparecer boton title
btnTitle.classList.add('not-see')

   /// agregar  el boton añadir lista linkTask.classList.add('see');

   linkList.addEventListener('click', function(event) {
    listTitle.classList.add('see');
    listTitle.classList.remove('not-see');
    btnTitle.classList.add('see');
    btnTitle.classList.remove('not-see');
    listTitle.focus();
    this.classList.add('not-see');
    

  });


  btnTitle.addEventListener('click', function(event) {
    // Añadiendo tweet
   // if (listTitle.innerHTML != '') {
      cln=document.body.appendChild(toDo.cloneNode(true));
      cln.children;
      cln.children[0].children[1].innerHTML='';
      cln.children[0].children[1].focus();

      
      listTitle.contentEditable = false;
      this.classList.add('not-see');
      this.classList.remove('see');
      linkTask.classList.add('see');
      linkTask.classList.remove('not-see');
      
      
  //  }
  });





 

  linkTask.addEventListener('click', function(event) {
    taskcontents[0].classList.remove('not-see');
    taskcontents[1].classList.remove('not-see');
    taskcontents[0].classList.add('see');
    taskcontents[1].classList.add('see');
    this.classList.add('not-see');
    this.classList.remove('see');
    task.focus();
    
  });


  // Añadir tareas 
  btnTask.addEventListener('click', function(event) {
    // Añadiendo tweet
    if (task.innerHTML != '') {
      var newDiv = document.createElement('div');
      newDiv.innerHTML = task.innerHTML;
      newDiv.classList.add('task');
      alltasks.appendChild(newDiv);

      task.innerHTML = '';
      task.focus();
    }
  });
});