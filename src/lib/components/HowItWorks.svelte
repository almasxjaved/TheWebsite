<script>
  const PosterAndHelper = [
    {
      for: "For Task Posters",
      whatTheyWant:
        "Need something done? Post your task and let the community help you.",
    },
    {
      for: "For Helpers",
      whatTheyWant:
        "Want to earn money in your free time? Complete tasks for others in your area.",
    },
  ];

  const TaskPoster = [
    {
      strong: "1. Register & Setup Wallet",
      para: " – Create your account and add money to your wallet.",
    },
    {
      strong: "2. Post Your Task",
      para: " – Describe what you need, budget, location, and deadline.",
    },
    {
      strong: "3. Review Proposals",
      para: " – Helpers will send proposals. Review their offers and ratings.",
    },
    {
      strong: "4. Select & Negotiate",
      para: " – Choose your preferred helper and finalize the details.",
    },
    {
      strong: "5. Track Progress",
      para: " – Stay updated on task progress via the app.",
    },
    {
      strong: "6. Task Completed",
      para: " – Approve work, leave a review, and payment is processed securely.",
    },
  ];

  const Examples = [
    {
      example: "📄 Document Submission",
    },
    {
      example: "🛒 Shopping & Errands",
    },
    {
      example: "📦 Delivery Service",
    },
  ];

  const TaskHelper = [
    {
      heading: "1. Create Helper Profile",
      paragraph: "– Add skills, availability, and preferences.",
    },
    {
      heading: "2. Browse Available Tasks",
      paragraph: "– Get notified of tasks near you.",
    },
    {
      heading: "3. Submit Proposals",
      paragraph: "– Send offers to posters and explain why you’re a good fit.",
    },
    {
      heading: "4. Complete the Task",
      paragraph: "– Finish the work and receive secure payment.",
    },
    {
      heading: "5. Reviews & Communication",
      paragraph: "– Keep in touch with posters and build a strong reputation.",
    },
  ];

  let whyHelper = [
    {
      icon: "💸",
      text: "Flexible Earning"
    },
    {
      icon: "🤝",
      text: "Help Community"
    },
    {
      icon: "⭐",
      text: "Build Reputation"
    }
  ];

   let safetyTrust = [
    {
      icon: "✅",
      text: "Verified Profiles"
    },
    {
      icon: "⭐",
      text: "Rating System"
    },
    {
      icon: "👥",
      text: "Role-based Access Model"
    },
    {
      icon: "🔐",
      text: "Multi-factor Authentication"
    },
    {
      icon: "🔒",
      text: "Secure Payment"
    },
    {
      icon: "📞",
      text: "24/7 Support"
    }
  ];
</script>

<section class="py-5 text-light">
  <div class="container text-center">
    <h2 class="fw-bold mb-3 text-warning">How TaskConnect Works</h2>
    <p class="text-secondary mb-5">
      Getting help with your tasks or earning money by helping others is simple
      and secure. Here's exactly how our platform works for both task posters
      and helpers.
    </p>

    <div class="row mb-5">
      {#each PosterAndHelper as item}
        <div class="col-md-6 mb-3">
          <div class="p-4 border rounded bg-black h-100">
            <h5 class="fw-bold text-warning">{item.for}</h5>
            <p>{item.whatTheyWant}</p>
          </div>
        </div>
      {/each}
    </div>

    <h3 class="fw-bold text-warning mb-4">For Task Posters</h3>
    <div class="row align-items-center mb-5">
      <div class="col-md-6">
        <ul class="list-unstyled text-start">
          {#each TaskPoster as item}
            <li class="mb-3"><strong>{item.strong}</strong>{item.para}</li>
          {/each}
        </ul>
      </div>
      <div class="col-md-6 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
          alt="Task Process"
          class="img-fluid rounded shadow"
          style="max-height: 320px;"
        />
      </div>
    </div>

    <h4 class="fw-bold text-warning mb-4">Example Tasks You Can Post</h4>
    <div class="row mb-5">
      {#each Examples as example}
        <div class="col-md-4 mb-3">
          <div class="p-4 border rounded bg-black h-100">{example.example}</div>
        </div>
      {/each}
    </div>

    <h3 class="fw-bold text-warning mb-4">For Helpers</h3>
    <div class="row align-items-center mb-5">
      <div class="col-md-6 mb-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3183/3183462.png"
          alt="Helpers"
          class="img-fluid rounded shadow"
        />
      </div>
      <div class="col-md-6">
        <ul class="list-unstyled text-start">
          {#each TaskHelper as item}
            <li class="mb-3">
              <strong>{item.heading}</strong>{item.paragraph}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="py-5 bg-black text-light">
  <div class="container text-center">
    <h3 class="fw-bold text-warning mb-4">Why Become a Helper?</h3>
    <div class="row mb-5">
      {#each whyHelper as item}
        <div class="col-md-4 mb-3">
        <div class="p-4 border rounded h-100">{item.icon} <br />{item.text}</div>
      </div>
      {/each}      
    </div>

    <h3 class="fw-bold text-warning mb-4">Safety & Trust</h3>
    <div class="row mb-5">
      {#each safetyTrust as item}
        <div class="col-md-4 mb-3">
        <div class="p-4 border rounded h-100">{item.icon} <br />{item.text}</div>
      </div>
      {/each}  
    </div>
  </div>
</section>  
