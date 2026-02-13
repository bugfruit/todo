'use client';

import { useState, useEffect } from 'react';
import WeatherCard from '@/components/WeatherCard';
import TodoList from '@/components/TodoList';
import * as api from '@/lib/api';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hideCompleted, setHideCompleted] = useState(false);
  // const [filter, setFilter] = useState('all'); // maybe use this later
  const [error, setError] = useState('');
  const [weatherErr, setWeatherErr] = useState('');

  // grab data on load
  useEffect(() => {
    fetchTodos();
    fetchWeather();
  }, []);

  async function fetchTodos() {
    try {
      setLoading(true);
      const data = await api.getTodos();
      // console.log('todos:', data)
      setTodos(data);
    } catch (err) {
      setError('couldnt load todos');
    } finally {
      setLoading(false);
    }
  }

  function fetchWeather() {
    api.getWeather()
      .then(data => setWeather(data))
      .catch(err => setWeatherErr('Could not load weather'));
  }

  async function handleAddTodo(title) {
    try {
      await api.createTodo(title);
      fetchTodos();
    } catch (err) {
      setError('failed to add todo');
    }
  }

  async function handleToggleTodo(id, currentStatus) {
    const response = await api.updateTodo(id, { completed: !currentStatus });
    if (response) {
      fetchTodos();
    }
  }

  async function handleDeleteTodo(id) {
    try {
      await api.deleteTodo(id);
      fetchTodos();
    } catch (err) {
      setError('Error deleting todo');
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <WeatherCard weather={weather} error={weatherErr} />

        <TodoList
          todos={todos}
          loading={loading}
          error={error}
          hideCompleted={hideCompleted}
          onToggleHide={() => setHideCompleted(!hideCompleted)}
          onAdd={handleAddTodo}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </main>
  );
}
