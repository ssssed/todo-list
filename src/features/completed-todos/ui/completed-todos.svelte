<script lang="ts">
  import { Todo } from '~/entities/todo';
  import { todoList } from '~/features/todo-list';

  const handleUpdateTodoStatus = (id: number | bigint) => {
    const todo = $todoList.find(el => el.id === id);
    if (todo) {
      todo.status = !todo.status;
    }
    $todoList = [...$todoList];
  };
</script>

{#if $todoList.length > 0 && $todoList.some(el => el.status)}
  <hr />
  <div class="completed-todos">
    {#each $todoList as todo (todo.id)}
      {#if todo.status === true}
        <Todo
          onChange={handleUpdateTodoStatus}
          id={todo.id}
          text={todo.text}
          checked={todo.status}
        />
      {/if}
    {/each}
  </div>
{/if}

<style>
  .completed-todos {
    padding: 25px 10px;
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
  }

  hr {
    max-width: 320px;
    width: 100%;
  }
</style>
