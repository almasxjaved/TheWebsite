<script>
  export let sections = [];

  console.log(sections)
</script>

{#each sections as { title, text, imgSrc, imgAlt, reverse }}
  <div class="row align-items-center mb-5 {reverse ? 'flex-md-row-reverse' : ''}">
    <div class="col-md-6 mb-4 mb-md-0">
      <h2 class="fw-bold text-warning mb-3 display-6">{title}</h2>
      <p class="fs-5 lh-lg text-light-emphasis">{text}</p>
    </div>
    <div class="col-md-6 text-center">
      <div class="p-2 bg-black rounded shadow-lg d-inline-block border border-warning">
        <img 
          src={imgSrc} 
          alt={imgAlt} 
          class="img-fluid rounded"
          style="max-height: 320px; object-fit: cover;" 
        />
      </div>
    </div>
  </div>
{/each}
