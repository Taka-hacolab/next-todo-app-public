"use client";

import { TodoItem } from '@/components/TodoItem';
import { AddTodoForm } from '@/components/AddTodoForm';
import { useTodoStore } from '@/store/todoStore';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">ToDoアプリ</h1>
        
        <AddTodoForm onAdd={addTodo} />
        
        <div className="mt-6 space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500">ToDoリストは空です</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;