<script>
 
</script>

<nav class="navbar">
  <div class="nav-content">
    <div class="logo">LOGO</div>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar {
    background-color: #0a0a23;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    font-family: Arial, Helvetica, sans-serif;
    
  }

  .nav-content {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }

  .nav-links a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bolder;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: royalblue;
  }
</style>
