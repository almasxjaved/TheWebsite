<script>
  const year = new Date().getFullYear();
</script>

<style>
  footer {
    background: #000d1a;
    color: #fff;
    padding: 3rem 2rem;
    font-family: 'Segoe UI', sans-serif;
  }

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-col {
    flex: 1 1 200px;
    min-width: 180px;
  }

  .footer-col h4 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: #00cfff;
  }

  .footer-col p,
  .footer-col a {
    color: #ccc;
    font-size: 0.9rem;
    text-decoration: none;
    line-height: 1.6;
  }

  .footer-col a:hover {
    color: #00cfff;
  }

  .brand {
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 1rem;
  }

  .social-icons {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  .social-icons a {
    color: #ccc;
    font-size: 1.2rem;
    transition: color 0.3s ease;
  }

  .social-icons a:hover {
    color: #00cfff;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.8rem;
    color: #888;
  }
</style>

<footer>
  <div class="footer-container">
    <div class="footer-col">
      <div class="brand">TaskConnect</div>
      <p>The agency for impatient brands®</p>
    </div>

    <div class="footer-col">
      <h4>LONDON</h4>
      <p>taskoutsource@taskconnect.com</p>
      <p>+44 20 7987 7571</p>
      <p>Unit 302, Metropolitan Wharf,<br />70 Wapping Wall, London E1W 3SS</p>
      <a href="#">SEE ON MAP →</a>
    </div>

    <div class="footer-col">
      <h4>BUENOS AIRES</h4>
      <p>argentina@taskconnect.com</p>
    </div>

  </div>
</footer>
