<script>
  let steps = [
    {
      title: "Task Submission",
      description: "Easily fill out a short form describing the task you need done.",
      icon: "📝"
    },
    {
      title: "Quick Confirmation",
      description: "We confirm and assign the task to the most suitable team member.",
      icon: "✅"
    },
    {
      title: "Real-Time Updates",
      description: "Track progress via notifications and optional status check-ins.",
      icon: "📡"
    },
    {
      title: "Secure Handling",
      description: "Your item or task is handled with professionalism and care.",
      icon: "🔒"
    },
    {
      title: "Task Completion",
      description: "Once completed, you’re notified and given an option to review.",
      icon: "🏁"
    },
    {
      title: "Satisfaction Follow-Up",
      description: "We follow up to ensure everything was done to your satisfaction.",
      icon: "💬"
    }
  ];
</script>

<section class="how-container">
  <h2>How It Works</h2>
  <div class="card-grid">
    {#each steps as step}
      <div class="how-card">
        <div class="icon">{step.icon}</div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
        <a href="#">Learn more →</a>
      </div>
    {/each}
  </div>
</section>

<style>
  .how-container {
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    padding: 60px 20px;
    text-align: center;
    min-height: 100vh;
  }

  .how-container h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: 600;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .how-card {
    background-color: #1e293b;
    padding: 30px;
    border-radius: 12px;
    text-align: left;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .how-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(90, 122, 255, 0.4); /* royal blue glow */
  }

  .icon {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #5a7aff; /* royal blue */
  }

  .how-card h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #ffffff;
  }

  .how-card p {
    font-size: 0.95rem;
    color: #d1d5db;
    margin-bottom: 15px;
  }

  .how-card a {
    color: #5a7aff;
    font-weight: 500;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .how-card a:hover {
    text-decoration: underline;
  }
   @media (max-width: 480px) {
    .how-container h2{
      font-size: 1.75rem;
    }
   }
</style>
