<script lang="ts">
  import { Form } from '~/shared/ui/form';
  import { Input } from '~/shared/ui/input';
  import { Button } from '~/shared/ui/button';
  import type { ITodo } from '~/entities/todo';

  let todoText: string = '';

  export let addTodo: Function;

  const handleTodoTextChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    todoText = target.value;
  };

  const handleSubmitForm = (e: Event) => {
    e.preventDefault();
    const todo: ITodo = { text: todoText, status: false, id: Date.now() };
    addTodo(todo);
    todoText = '';
  };
</script>

<Form on:submit={handleSubmitForm}>
  <Input
    value={todoText}
    placeholder="Введите вашу todo"
    on:input={handleTodoTextChange}
  />
  <Button
    type="submit"
    disabled={!todoText.length}>Добавить</Button
  >
</Form>

<style>
  .form {
    display: flex;
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
  }
</style>
