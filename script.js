const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = todoInput.value.trim();
  if (task !== '') {
    addTask(task);
    todoInput.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const deleteButton = createButton('Delete', 'delete', () => {
    li.remove();
  });

  const priorityButton = createButton('Priority', 'priority', () => {
    li.classList.toggle('priority-task');
    if (li.classList.contains('priority-task')) {
      todoList.prepend(li);
    }
  });

  const editButton = createButton('Edit', 'edit', () => {
    const newText = prompt('Edit the task:', li.textContent);
    if (newText !== null && newText.trim() !== '') {
      li.textContent = newText.trim();
    }
  });

  const completeCheckbox = document.createElement('input');
  completeCheckbox.type = 'checkbox';
  completeCheckbox.addEventListener('change', function() {
    li.classList.toggle('completed-task');
  });

  li.appendChild(completeCheckbox);
  li.appendChild(deleteButton);
  li.appendChild(priorityButton);
  li.appendChild(editButton);
  todoList.prepend(li);
}

function createButton(text, className, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className);
  button.addEventListener('click', onClick);
  return button;
}
