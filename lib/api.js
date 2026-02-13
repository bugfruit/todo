// api functions for todos and weather

export async function getTodos() {
  const response = await fetch('/api/todo');
  
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  
  return response.json();
}

export async function createTodo(title) {
  const response = await fetch('/api/todo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create todo');
  }
  
  return response.json();
}

export async function updateTodo(id, updates) {
  const response = await fetch(`/api/todo/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update todo');
  }
  
  return response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(`/api/todo/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
  
  return response.json();
}

export async function getWeather() {
  const response = await fetch('/api/weather');
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather');
  }
  
  return response.json();
}
