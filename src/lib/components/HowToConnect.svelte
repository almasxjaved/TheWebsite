<script>
  const steps = [
    {
      number: 1,
      title: "Post Your Task",
      desc: "Describe what you need done, set your budget, and specify the location and deadline",
    },
    {
      number: 2,
      title: "Get Matched",
      desc: "Nearby helpers receive notifications and can accept your task with their proposed fee",
    },
    {
      number: 3,
      title: "Task Completed",
      desc: "Your helper completes the task, you both leave reviews, and payment is processed securely",
    },
  ];
</script>

<section class="bg-black text-white py-5">
  <div class="container text-center">
    <span class="badge bg-light text-dark mb-3 px-3 py-2">Simple Process</span>

    <h2 class="fw-bold mb-3">How TaskConnect Works</h2>

    <p class="text-secondary mb-5">
      Getting help or earning money through tasks is just a few taps away
    </p>

    <div class="row g-4">
      {#each steps as step}
        <div class="col-12 col-md-4">
          <div class="card h-100 bg-dark border border-secondary rounded-4 text-white p-4">
            <div class="d-flex justify-content-center mb-3">
              <div
                class="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold"
                style="width:60px; height:60px; font-size:1.25rem;"
              >
                {step.number}
              </div>
            </div>

            <h5 class="fw-bold mb-2">{step.title}</h5>

            <p class="text-secondary mb-0">{step.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
