<script lang="ts">
  import { Form } from '~/shared/ui/form';
  import { Input } from '~/shared/ui/input';
  import { Button } from '~/shared/ui/button';

  let todoText: string = '';

  const handleTodoTextChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    todoText = target.value;
  };

  const handleSubmitForm = (e: Event) => {
    e.preventDefault();
    console.log({ text: todoText, status: false, id: Date.now() });
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
