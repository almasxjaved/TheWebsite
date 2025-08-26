<script>
  const points = [
    {
      icon: "bi-clock-history",
      title: "Time & Energy Waste",
      desc: "Days spent traveling for simple 30-minute tasks",
    },
    {
      icon: "bi-cash-stack",
      title: "High Travel Costs",
      desc: "Travel and accommodation costs often exceed task value",
    },
    {
      icon: "bi-geo-alt-fill",
      title: "Geographic Barriers",
      desc: "Remote locations make simple errands incredibly difficult",
    },
  ];
</script>

<section class="w-100  text-white py-5">
  <div class="container">
    <div class="row align-items-center g-5">
      
      <div class="col-12 col-lg-6">
        <div class="bg-warning rounded-4 p-2 d-flex justify-content-center align-items-center">
          <!-- <img 
            src="/images/problem.jpg" 
            alt="Problem Image" 
            class="img-fluid rounded-4"
            style="object-fit:cover; max-height:400px; width:100%;"
          /> -->
        </div>
      </div>

      <div class="col-12 col-lg-6 bg-black">
        <span class="badge bg-danger mb-3 px-3 py-2">The Problem</span>

        <h2 class="fw-bold lh-sm mb-3">
          Distance Shouldn't Define Your Limitations
        </h2>

        <p class="text-secondary mb-4">
          In Gilgit-Baltistan, simple tasks like document submission or
          buying medicines require traveling up to 12 hours to the city,
          costing more than the task itself.
        </p>

        <div class="d-flex flex-column gap-3">
          {#each points as p}
            <div class="d-flex align-items-start gap-3">
              <i class={`bi ${p.icon} text-danger fs-4`}></i>
              <div>
                <h6 class="fw-bold mb-1">{p.title}</h6>
                <p class="text-secondary mb-0">{p.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
