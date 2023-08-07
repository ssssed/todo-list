<script lang="ts">
  import { Todo } from '~/entities/todo';
  import { todos } from '../model/store';
</script>

<div class="todos">
  {#each $todos as todo (todo.id)}
    <Todo {...todo} />
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
