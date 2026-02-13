import { NextResponse } from 'next/server';
import * as store from '../../../../lib/store.js';

export async function PATCH(request, { params }) {
  try {
    const id = params.id;
    const body = await request.json();
    
    const updatedTodo = store.updateTodo(id, body);
    
    if (!updatedTodo) {
      return NextResponse.json(
        { error: 'Todo not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  const id = params.id;
  
  const success = store.deleteTodo(id);
  
  if (!success) {
    return NextResponse.json(
      { error: 'Todo not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ message: 'Todo deleted' });
}
