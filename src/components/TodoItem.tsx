import { Todo } from '@/app/page';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-md transition-colors">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5 text-primary-light dark:text-primary-dark rounded focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
        />
        <span
          className={`ml-3 ${
            todo.completed 
              ? 'line-through text-gray-500 dark:text-gray-400' 
              : 'text-text-light dark:text-text-dark'
          } transition-colors`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 focus:outline-none transition-colors"
      >
        削除
      </button>
    </div>
  );
}
