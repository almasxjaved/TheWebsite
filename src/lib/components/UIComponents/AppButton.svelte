<script>
  export let href = null;  
  export let classes;
  export let label;
  export let type;
</script>

{#if href}
  <a href={href} class="btn {classes}">
    {label}
  </a>
{:else}
  <button type={type} class="btn {classes}">
    {label}
  </button>
{/if}
