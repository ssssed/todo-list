<script lang="ts">
  import type { ButtonType } from '../types';

  interface $$Props {
    type?: ButtonType;
    disabled?: boolean;
  }

  export let type: ButtonType = 'button';
  export let disabled: boolean = false;
</script>

<button
  {...$$restProps}
  {type}
  {disabled}
  on:keyup
  on:keydown
  on:keypress
  on:focus
  on:blur
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
>
  <slot />
</button>
