<script>
  let isOpen = false;
</script>

<style>
  nav {
    background-color: #0c0f2c; 
    padding: 1rem 2rem;
    color: white;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #4169e1; 
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      gap: 1rem;
      padding-top: 1rem;
    }

    .nav-links.open {
      display: flex;
    }
  }
</style>

<nav>
  <div class="nav-container">
    <div class="logo">TaskRent</div>

    <button class="menu-toggle" on:click={() => isOpen = !isOpen}>
      {#if isOpen}
        ✕
      {:else}
        ☰
      {/if}
    </button>

    <div class="nav-links {isOpen ? 'open' : ''}">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/how-it-works">How It Works</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
</nav>
