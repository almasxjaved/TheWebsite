<script>
  let isOpen = false;
</script>

<nav class="navbar navbar-expand-md" style="background-color: #000; padding: 1rem 2rem;">
  <div class="container">
    <a class="navbar-brand fw-bold" href="/" style="color: #FFD700; font-size: 1.5rem;">
      TaskRent
    </a>

    <button
      class="navbar-toggler text-warning border-0"
      type="button"
      on:click={() => (isOpen = !isOpen)}
    >
      {#if isOpen}
        ✕
      {:else}
        ☰
      {/if}
    </button>

    <div class={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
      <ul class="navbar-nav ms-auto gap-3">
        <li class="nav-item">
          <a class="nav-link fw-medium" href="/" style="color: white;">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-medium" href="/aboutus" style="color: white;">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-medium" href="/how_it_works" style="color: white;">How It Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-medium" href="/services" style="color: white;">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-medium" href="/contact" style="color: white;">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .nav-link:hover {
    color: #FFD700 !important; /* Yellow on hover */
  }
</style>
