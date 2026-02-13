import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';

export default function TodoList({ 
  todos, 
  loading, 
  error, 
  hideCompleted,
  onToggleHide,
  onAdd,
  onToggle,
  onDelete 
}) {
  const filteredTodos = hideCompleted 
    ? todos.filter(todo => !todo.completed)
    : todos;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-4">My Todos</h1>
      {/* TODO: maybe add loading spinner instead of text? */}
      
      <AddTodoForm onAdd={onAdd} />

      <div className="mb-4">
        <button
          onClick={onToggleHide}
          className="text-sm text-blue-500 hover:text-blue-700"
        >
          {hideCompleted ? 'Show completed' : 'Hide completed'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-gray-500">Loading todos...</p>
      ) : (
        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <p className="text-gray-500">No todos yet. Add one above!</p>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
