<script>
  import ServiceCard from "$lib/components/UIComponents/ServiceCard.svelte";

  const services = [
    {
      icon: "bi bi-bag-check-fill",
      title: "Errand Running",
      description: "From groceries to documents, we handle all your daily errands with trusted local helpers."
    },
    {
      icon: "bi bi-box-seam-fill",
      title: "Pickup & Delivery",
      description: "Send or receive parcels easily within the region, without the hassle of long-distance travel."
    },
    {
      icon: "bi bi-tools",
      title: "Task Help",
      description: "Need help assembling furniture, standing in line, or other small tasks? We’ve got people for that too!"
    }
  ];
</script>

<section class="py-5 text-light">
  <div class="container">
    <h1 class="display-5 fw-bold mb-5 text-center text-warning">
      Our Services
    </h1>

    <div class="row g-4">
      {#each services as service}
        <div class="col-md-4">
          <ServiceCard 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        </div>
      {/each}
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-5">
      <a href="/contact" class="btn btn-warning btn-lg fw-bold px-5 shadow rounded-pill">
        Book a Service
      </a>
    </div>
  </div>
</section>
