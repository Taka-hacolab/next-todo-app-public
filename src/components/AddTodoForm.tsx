import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Zodスキーマの定義
const todoSchema = z.object({
  text: z.string().min(1, { message: 'タスクを入力してください' }),
});

type TodoFormData = z.infer<typeof todoSchema>;

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = (data: TodoFormData) => {
    onAdd(data.text);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
      <div className="flex space-x-2">
        <input
          {...register('text')}
          placeholder="新しいタスクを入力..."
          className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          追加
        </button>
      </div>
      {errors.text && (
        <p className="text-sm text-red-500">{errors.text.message}</p>
      )}
    </form>
  );
}
