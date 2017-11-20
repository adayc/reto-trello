// Declarando variables 
var task = document.getElementById('task-box');
var btnTask = document.getElementById('send-task');
var alltasks = document.getElementById('task-content');
var taskcontents = document.getElementsByClassName('task-content');
var linkTask = document.getElementById('add-task');
var linkList = document.getElementById('add-list');
var listTitle = document.getElementById('list-title');
var btnTitle = document.getElementById('send-title');
var toDo = document.getElementById('to-do');


window.addEventListener('load', function(event) {
  // Ocultando titulo de la lista
  listTitle.classList.add('not-see');
  // Ocultando boton añadir tarea
  linkTask.classList.add('not-see');
  // Ocultando los cuadros de tareas
  taskcontents[0].classList.add('not-see');//
  taskcontents[1].classList.add('not-see');
  // Ocultando boton title
  btnTitle.classList.add('not-see');

  // Evento para añadir un titulo a la lista
  linkList.addEventListener('click', function(event) {
    listTitle.classList.add('see');
    listTitle.classList.remove('not-see');
    btnTitle.classList.add('see');
    btnTitle.classList.remove('not-see');
    listTitle.focus();
    this.classList.add('not-see');
  });

  // Evento para guardar un titulo a la lista y crear otra adicional

  btnTitle.addEventListener('click', function(event) {
    if (listTitle.innerHTML !== '') {
      // Clonamos el nodo en el que se encuentra toda la lista de tareas
      cln = document.body.appendChild(toDo.cloneNode(true));
      cln.children;
      cln.children[0].children[1].innerHTML = '';
      cln.children[0].children[1].focus();
      listTitle.contentEditable = false;
      this.classList.add('not-see');
      this.classList.remove('see');
      linkTask.classList.add('see');
      linkTask.classList.remove('not-see');
    }
  });
 
  // Evento para añadir una tarea
  linkTask.addEventListener('click', function(event) {
    taskcontents[0].classList.remove('not-see');
    taskcontents[1].classList.remove('not-see');
    taskcontents[0].classList.add('see');
    taskcontents[1].classList.add('see');
    this.classList.add('not-see');
    this.classList.remove('see');
    task.focus();
  });

  // Evento para guardar tareas
  btnTask.addEventListener('click', function(event) {
    if (task.innerHTML !== '') {
      // Creamos un nueevo 'div' para insertar al contenedor de tareas
      var newDiv = document.createElement('div');
      newDiv.innerHTML = task.innerHTML;
      newDiv.classList.add('task');
      // Insrtamos la nueva tarea
      alltasks.appendChild(newDiv);
      task.innerHTML = '';
      task.focus();
    }
  });
});