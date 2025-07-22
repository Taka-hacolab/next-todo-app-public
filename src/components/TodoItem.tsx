import { Todo } from '@/app/page';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-md transition-colors">
      <div className="flex items-center flex-1 min-w-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-4 w-4 sm:h-5 sm:w-5 text-primary-light dark:text-primary-dark rounded focus:ring-primary-light dark:focus:ring-primary-dark transition-colors flex-shrink-0"
        />
        <span
          className={`ml-2 sm:ml-3 truncate ${
            todo.completed 
              ? 'line-through text-gray-500 dark:text-gray-400' 
              : 'text-text-light dark:text-text-dark'
          } transition-colors text-sm sm:text-base`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-2 px-2 py-1 text-xs sm:text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 focus:outline-none transition-colors flex-shrink-0"
        aria-label="タスクを削除"
      >
        削除
      </button>
    </div>
  );
}
