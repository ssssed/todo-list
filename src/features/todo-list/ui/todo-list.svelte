<script lang="ts">
  import { Todo } from '~/entities/todo';
  import { todoList } from '../index';

  const handleUpdateTodoStatus = (id: number | bigint) => {
    const todo = $todoList.find(el => el.id === id);
    if (todo) {
      todo.status = !todo.status;
    }
    $todoList = [...$todoList];
  };
</script>

<div class="todos">
  {#if $todoList.filter(el => !el.status).length === 0}
    <h5>Добавьте себе новое дело</h5>
  {/if}
  {#each $todoList.filter(el => !el.status) as todo (todo.id)}
    <Todo
      id={todo.id}
      checked={todo.status}
      text={todo.text}
      onChange={handleUpdateTodoStatus}
    />
  {/each}
</div>

<style>
  .todos {
    padding: 25px 10px;
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
  }
</style>
