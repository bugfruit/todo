import { NextResponse } from 'next/server';
import * as store from '../../../lib/store.js';

// get all todos
export async function GET() {
  const todos = store.getTodos();
  return NextResponse.json(todos);
}

// create new todo
export async function POST(request) {
  try {
    const body = await request.json();
    
    // probably should validate more here but this works
    if (!body.title || body.title.trim() === '') {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }
    
    const newTodo = store.addTodo(body.title);
    
    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
