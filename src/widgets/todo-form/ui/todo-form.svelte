<script lang="ts">
  import type { ITodo } from '~/entities/todo';
  import { AddTodo } from '~/features/add-todo';
  import { TodoList } from '~/features/todo-list';
  import { todoList } from '~/features/todo-list';

  const handleAddTodo = (todo: ITodo) => {
    $todoList = [...$todoList, todo];
    console.log($todoList);
  };
</script>

<AddTodo addTodo={handleAddTodo} />
<TodoList />
