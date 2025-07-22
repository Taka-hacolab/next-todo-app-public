import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { isLocalStorageAvailable } from '@/lib/clientUtils';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// ローカルストレージを使用したデータ永続化のためのストア
export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      
      addTodo: (text: string) => {
        if (text.trim()) {
          set((state) => ({
            todos: [
              ...state.todos,
              {
                id: Date.now(),
                text,
                completed: false,
              },
            ],
          }));
        }
      },
      
      toggleTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      
      deleteTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
    }),
    {
      name: 'todo-storage', // ローカルストレージのキー名
      storage: createJSONStorage(() => {
        // クライアント側でのみローカルストレージを使用
        if (isLocalStorageAvailable()) {
          return localStorage;
        }
        // サーバー側ではメモリストレージを使用
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      partialize: (state) => ({ todos: state.todos }), // 永続化する状態の一部を指定
    }
  )
);
