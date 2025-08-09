
<div class="hero-section">
  <div class="hero-content">
    <h1>We run the errands, you run the show. 😉</h1>
    <p>From pickup to drop-off, we’ll make every task feel like a treat</p>
    <div class="buttons">
      <button class="btn-primary">Get started</button>
      <button class="btn-secondary">Book a demo</button>
    </div>
  </div>

  <div class="hero-image">
    <div class="backward-thing"></div>
    <img src="/images/her.jpg" alt="HeroImage" />
  </div>
</div>

<style>
  .hero-section {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    opacity: 0.8;
    justify-content: space-around;
    background-color: #0b1e2d;
    position: relative;
    min-height: 85vh;
  }

  .hero-content {
    max-width: 50%;
    color: white;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  p {
    font-size: 1rem;
    color: #b0c4d4;
    margin-bottom: 30px;
    max-width: 400px;
  }

  .buttons {
    display: flex;
    gap: 15px;
  }

  .btn-primary {
    background-color: #5a7aff;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    color: #ffff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }

  .btn-secondary {
    background-color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    color: #0b1e2d;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
  .hero-image {
    height: 60vh;
  }
  .hero-image img {
    max-width: 480px;
    min-height: 100%;
    position: relative;
  }
  .backward-thing {
    width: 450px;
    height: 340px;
    background-color: #5a7aff;
    position: absolute;
    right: 22px;
    top: 60px;
    z-index: -1;
  }
</style>
