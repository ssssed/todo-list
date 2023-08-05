<script lang="ts">
  let className: string = '';

  export { className as class };
  export let label: string = '';
  export let value: string | number = '';
  export let disabled: boolean = false;
</script>

<slot props={{ ...$$restProps, disabled }}>
  <input
    {...$$restProps}
    {disabled}
    class:className
    bind:value
    on:input
    on:change
    on:focus
    on:blur
    on:keydown
    on:keyup
    on:keypress
    on:click
    on:mouseenter
    on:mouseover
    on:mouseleave
    on:paste
    on:copy
  />
</slot>
