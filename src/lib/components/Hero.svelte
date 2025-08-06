<section class="hero">
  <h1>WELCOME</h1>
  <p>We are here to help you with your daily life errands :)</p>
  <button class="btn">LEARN MORE</button>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
    background: linear-gradient(135deg, #010f2b, #1a0033);
    background-image:
      radial-gradient(circle at 30% 30%, rgba(0,0,255,0.2), transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(128,0,128,0.2), transparent 50%);
    color: white;
    min-height: calc(100vh - 140px); 
    position: relative;
  }

  h1 {
    font-size: 3rem;
    /* text-shadow: 0 0 10px #4fc3f7; */
    margin-bottom: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    max-width: 600px;
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 2rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: rgba(0, 150, 255, 0.7);
    border: none;
    font-weight: bolder;
    border-radius: 25px;
    box-shadow: 0 0 15px rgba(65,105,225,0.6);
    transition: 0.3s;
    cursor: pointer;
  }

  .btn:hover {
    background-color: white;
    color: rgba(0, 150, 255, 0.7);
    /* box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); */
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
</style>
