<form
  class="form"
  on:submit
  {...$$restProps}
>
  <slot />
</form>

<style>
  .form {
    display: flex;
    gap: 10px;
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
  }
</style>
