<script>
  let name = "";
  let email = "";
  let message = "";
  let success = false;

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      success = true;
      name = email = message = "";
    } else {
      alert("Error sending message!");
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
  <input type="text" bind:value={name} placeholder="Your Name" required />
  <input type="email" bind:value={email} placeholder="Your Email" required />
  <textarea bind:value={message} placeholder="Message" required></textarea>
  <button type="submit">Send</button>
</form>

{#if success}
  <p class="text-green-600">✅ Message sent to WhatsApp!</p>
{/if}
