// in-memory store - data resets on restart
// just for testing, not production

let todos = [];
let nextId = 1;

function getTodos() {
  return todos;
}

function addTodo(title) {
  const newTodo = {
    id: nextId,
    title: title,
    completed: false
  };
  
  // console.log('adding todo:', title)
  todos.push(newTodo);
  nextId++;
  
  return newTodo;
}

function findTodoById(id) {
  return todos.find(todo => todo.id === parseInt(id));
}

function updateTodo(id, updates) {
  const todo = findTodoById(id);
  
  if (!todo) {
    return null;
  }
  
  if (updates.title !== undefined) {
    todo.title = updates.title;
  }
  
  if (updates.completed !== undefined) {
    todo.completed = updates.completed;
  }
  
  return todo;
}

function deleteTodo(id) {
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  
  if (index === -1) {
    return false;
  }
  
  todos.splice(index, 1);
  return true;
}

export { getTodos, addTodo, findTodoById, updateTodo, deleteTodo };
