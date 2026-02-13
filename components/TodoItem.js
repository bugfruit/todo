export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded hover:bg-gray-50">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, todo.completed)}
        className="w-5 h-5 cursor-pointer"
      />
      <span
        className={`flex-1 ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-sm text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
      >
        Delete
      </button>
    </div>
  );
}
