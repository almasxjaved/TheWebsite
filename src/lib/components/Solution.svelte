<script>
  const features = [
    {
      icon: "bi-people",
      title: "For Task Posters",
      desc: "Get help without traveling",
    },
    {
      icon: "bi-cash",
      title: "For Helpers",
      desc: "Earn money in free time",
    },
  ];
</script>

<section class="w-100  text-white py-5">
  <div class="container">
    <div class="row align-items-center g-5 ">
      
      <!-- Left: Text -->
      <div class="col-12 col-lg-6 bg-black">
        <span class="badge bg-light text-dark mb-3 px-3 py-2">
          Our Solution
        </span>

        <h2 class="fw-bold lh-sm mb-3">
          Community-Powered Task Completion
        </h2>

        <p class="text-secondary mb-4">
          We connect people who need help with trusted community members who are ready
          to assist, creating a win-win ecosystem for everyone.
        </p>

        <!-- Feature Cards -->
        <div class="d-flex flex-column flex-md-row gap-3">
          {#each features as f}
            <div class="border border-secondary rounded-4 p-3 flex-fill">
              <i class={`bi ${f.icon} fs-4 mb-2`}></i>
              <h6 class="fw-bold mb-1">{f.title}</h6>
              <p class="text-secondary mb-0">{f.desc}</p>
            </div>
          {/each}
        </div>
      </div>

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
    </div>
  </div>
</section>
