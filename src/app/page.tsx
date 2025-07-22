"use client";

import { TodoItem } from '@/components/TodoItem';
import { AddTodoForm } from '@/components/AddTodoForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTodoStore } from '@/store/todoStore';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-background-light dark:bg-background-dark transition-colors">
      <div className="w-full max-w-md p-6 bg-card-light dark:bg-card-dark rounded-lg shadow-md transition-colors">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">ToDoアプリ</h1>
          <ThemeToggle />
        </div>

        
        <AddTodoForm onAdd={addTodo} />
        
        <div className="mt-6 space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">ToDoリストは空です</p>
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