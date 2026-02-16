import assert from 'assert';
import * as store from '../lib/store.js';

// function to reset state 
function resetStore() {
  store.getTodos().length = 0;
}

// Test 1: Creating a todo returns correct structure
resetStore();

const todo = store.addTodo('Run 5km barefoot');
assert(todo.id >= 1, 'Todo should have an ID');
assert(todo.title === 'Run 5km barefoot', 'Todo title should match');
assert(todo.completed === false, 'New todo should not be completed');
console.log('Passed test 1: Todo created with correct structure');




// Test 2: Updating a todo changes the correct fields
resetStore();

const originalTodo = store.addTodo('Original task');
const todoId = originalTodo.id;

// update title
const updatedTitle = store.updateTodo(todoId, { title: 'Updated task' });
assert(updatedTitle.title === 'Updated task', 'Title should be updated');
assert(updatedTitle.completed === false, 'Completed should remain unchanged');

// update status
const toggledTodo = store.updateTodo(todoId, { completed: true });
assert(toggledTodo.completed === true, 'Completed should be updated');
assert(toggledTodo.title === 'Updated task', 'Title should remain unchanged');

// updating non-existent todo
const notFound = store.updateTodo(999, { title: 'All heroes wear capes' });
assert(notFound === null, 'Should return null for non existent todo');
console.log('Passed test 2: Todo updates work correctly');



// Test 3: Deleting a todo removes it from the list
resetStore();

const task1 = store.addTodo('Cant drive that far');
const task2 = store.addTodo('Cause there car cant go that far');

// delete 1st task
const deleted = store.deleteTodo(task1.id);
assert(deleted === true, 'Delete should return true');

// check remaining todos
const allTodos = store.getTodos();
assert(allTodos.length === 1, 'Should have 1 remaining');
assert(allTodos[0].id === task2.id, 'Remaining todo should be task 2');

// try deleting non-existent todo
const deletedAgain = store.deleteTodo(100);
assert(deletedAgain === false, 'Should now return false');

console.log('Passed test 3: Deleting works');

