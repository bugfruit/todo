import { useState } from 'react';

export default function AddTodoForm({ onAdd }) {
  const [newTitle, setNewTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!newTitle.trim()) {
      return;
    }
    
    onAdd(newTitle);
    setNewTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter a new todo..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
}
