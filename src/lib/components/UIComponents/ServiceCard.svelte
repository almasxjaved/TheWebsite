<script>
  export let icon; 
  export let title;
  export let description;
</script>

<div class="card h-100 bg-dark text-light border border-secondary shadow-lg rounded-3">
  <div class="card-body text-center p-4">
    <div class="mb-3">
      <i class="{icon} fs-1 text-warning"></i>
    </div>
    <h5 class="card-title fw-bold text-warning">{title}</h5>
    <p class="card-text fs-6">{description}</p>
  </div>
</div>
