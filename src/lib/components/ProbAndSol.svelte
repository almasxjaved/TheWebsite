<script>
  const problem = `
    Many people struggle to manage daily errands efficiently,
    wasting hours coordinating schedules or finding reliable help.
    This leads to stress, missed  /, and reduced productivity.
  `;

  const solutions = [
    "Simple platform to post errands instantly.",
    "Reliable, pre-verified team completing tasks for you.",
    "User-friendly interface with minimal steps.",
    "Real-time updates on progress.",
    "Secure payments and transparent pricing."
  ];
</script>

<style>
  .container {
    display: flex;  
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 4rem 2rem 1rem 2rem ;
    position: relative;
    max-width: 1200px;
    margin: auto;
  }

  .problem, .solution {
    flex: 1;
    padding: 0.5rem 1.5rem;
    border-radius: 60px;
    position: relative;
    z-index: 2;
    min-height: 250px;
    background-color: #f4f4f4;

  }
  h2 {
    margin-bottom: 1rem;
    color: #0c0f2c;
  }

  p {
    line-height: 1.6;
    color: #333;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.8rem;
    color: #333;
  }

  /* Circular background designs */
  .circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
    z-index: 1;
  }

  .circle.problem-circle {
    width: 300px;
    height: 300px;
    background: rgb(65, 105, 225) ;
    top: -50px;
    left: -80px;
  }

  .circle.solution-circle {
    width: 300px;
    height: 300px;
    background: rgba(173, 216, 230, 1);
    bottom: -50px;
    right: -80px;
  }

  /* Arrow between columns */
  .arrow {
    position: relative;
    transform: rotate(90deg);
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  /* .arrow::before {
    content: "➜";
    font-size: 2rem;
    color: #555;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */

  /* Responsive */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .arrow {
      transform: rotate(90);
    }
    .circle.problem-circle {
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
    }
    .circle.solution-circle {
      bottom: -40px;
      right: 50%;
      transform: translateX(50%);
    }
  }
</style>

<div class="container">
  <!-- Problem Side -->
  <div class="problem">
    <div class="circle problem-circle"></div>
    <h2>Problem</h2>
    <p>{problem}</p>
  </div>

  <!-- Arrow -->
  <img src="/images/arrow.png" class="arrow" alt="">

  <!-- Solution Side -->
  <div class="solution">
    <div class="circle solution-circle"></div>
    <h2>Our Solution</h2>
    <ul>
      {#each solutions as sol}
        <li>{sol}</li>
      {/each}
    </ul>
  </div>
</div>
