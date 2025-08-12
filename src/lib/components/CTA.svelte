<!-- CTA.svelte -->
<section class="cta">
  <div class="cta-container">
    <h2>Ready to get your tasks done effortlessly?</h2>
    <p>Join TaskConnect today and let our team handle your errands while you focus on what matters most.</p>
    <a href="/signup" class="cta-btn">Get Started</a>
  </div>
</section>

<style>
  .cta {
    background-color: #1e293b; 
    color: white;
    text-align: center;
    padding: 3rem 1rem;
    border-radius: 12px;
    margin: 2rem auto;
    max-width: 900px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  .cta-container h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #4da3ff; 
  }

  .cta-container p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #d9e6ff;
  }

  .cta-btn {
   background-color: #357edb;
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s ease;
  }


  /* Mobile responsive */
  @media (max-width: 768px) {
    .cta-container h2 {
      font-size: 1.5rem;
    }
    .cta-container p {
      font-size: 1rem;
    }
    .cta-btn {
      padding: 0.6rem 1.5rem;
    }
  }
</style>
