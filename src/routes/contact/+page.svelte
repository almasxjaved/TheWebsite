<script>
  let name = "";
  let email = "";
  let message = "";
  let status = "";

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        status = "✅ Thanks for your submission!";
        name = "";
        email = "";
        message = "";
      } else {
        const result = await response.json();
        if (result.errors) {
          status = result.errors.map((error) => error.message).join(", ");
        } else {
          status = "❌ Oops! There was a problem submitting your form.";
        }
      }
    } catch (error) {
      status = "❌ Oops! There was a problem submitting your form.";
    }
  }
</script>

<section class="py-5">
  <div class="container py-5 text-light">
  <h1 class="h2 fw-bold mb-4 text-center text-warning">Contact Us</h1>

  <form
    action="https://formspree.io/f/mwprkzdq"
    method="POST"
    on:submit={handleSubmit}
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
