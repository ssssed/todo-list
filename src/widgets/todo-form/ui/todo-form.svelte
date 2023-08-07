<script lang="ts">
  import type { ITodo } from '~/entities/todo';
  import { AddTodo } from '~/features/add-todo';
  import { CompletedTodos } from '~/features/completed-todos';
  import { TodoList } from '~/features/todo-list';
  import { todoList } from '~/features/todo-list';

  const handleAddTodo = (todo: ITodo) => {
    $todoList = [...$todoList, todo];
    console.log($todoList);
  };
</script>

<AddTodo addTodo={handleAddTodo} />
<TodoList />
{#if !$todoList.length}
  <h5>У вас нет никаких дел!</h5>
{/if}
<CompletedTodos />

<style>
  h5 {
    text-align: center;
  }
</style>
