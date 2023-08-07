<script lang="ts">
  export let checked: boolean = false;
  export let text: string = '';
  export let id: number | bigint = Date.now();
  export let onChange: Function;
  console.log(text, id);

  const handleCheckedChange = () => {
    checked = !checked;
    onChange(id);
  };
</script>

<div class="todo">
  <input
    type="checkbox"
    class="input"
    on:change={handleCheckedChange}
    {checked}
  />
  <p class="text">{text}</p>
</div>

<style>
  .todo {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 4px 5px;
    gap: 5px;
  }

  .text {
    margin: 0;
  }
</style>
