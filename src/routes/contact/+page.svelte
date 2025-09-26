<script>
  let name = "";
  let email = "";
  let message = "";
  let status = "";
  
  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      status = "✅ Message sent successfully!";
      name = email = message = "";
    } else {
      status = "❌ Failed to send message.";
    }
  }
</script>

<section class="py-5">
  <div class="container py-5 text-light">
  <h1 class="h2 fw-bold mb-4 text-center text-warning">Contact Us</h1>

  <form
    on:submit|preventDefault={handleSubmit}
    class="bg-black p-4 rounded shadow-lg border border-secondary"
  >
    <!-- Name -->
    <div class="mb-3">
      <label class="form-label fw-semibold text-warning" for="name">Name</label>
      <input
        class="form-control bg-dark text-light border-secondary"
        id="name"
        name="name"
        bind:value={name}
        required
      />
    </div>

    <!-- Email -->
    <div class="mb-3">
      <label class="form-label fw-semibold text-warning" for="email">Email</label>
      <input
        class="form-control bg-dark text-light border-secondary"
        id="email"
        type="email"
        name="email"
        bind:value={email}
        required
      />
    </div>

    <!-- Message -->
    <div class="mb-3">
      <label class="form-label fw-semibold text-warning" for="message">Message</label>
      <textarea
        class="form-control bg-dark text-light border-secondary"
        id="message"
        name="message"
        rows="4"
        bind:value={message}
        required
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div class="text-end">
      <button class="btn btn-warning fw-bold px-4 shadow rounded-pill" type="submit">
        Send Message
      </button>
    </div>
  </form>

  {#if status}
    <div class="mt-3 alert bg-dark border border-warning text-warning fw-semibold shadow-sm rounded-3">
      {status}
    </div>
  {/if}
</div>

</section>
