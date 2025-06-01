<script>
  let name = '';
  let email = '';
  let message = '';

  const submit = () => {
    alert('Form submitted! (demo only)');
  };
</script>

<section class="py-5">
  <div class="container">
    <h1 class="h2 fw-bold mb-4 text-center">Contact Us</h1>
    <form class="mx-auto" style="max-width: 600px;" on:submit|preventDefault={submit}>
      <div class="mb-3">
        <label class="form-label" for="name">Name</label>
        <input class="form-control" id="name" bind:value={name} required />
      </div>

      <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input class="form-control" id="email" type="email" bind:value={email} required />
      </div>

      <div class="mb-3">
        <label class="form-label" for="message">Message</label>
        <textarea class="form-control" id="message" rows="4" bind:value={message} required></textarea>
      </div>

      <button class="btn btn-primary" type="submit">Send Message</button>
    </form>
  </div>
</section>
