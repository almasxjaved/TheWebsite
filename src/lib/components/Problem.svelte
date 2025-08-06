<script>
  export let title = "The Problem";
  export let subtitle = "Why it matters";
  export let content = `
    In today’s fast-paced world, even simple tasks can become overwhelming. Whether it’s picking up groceries,
    delivering documents, or waiting in long queues, people often struggle to find time or reliable help. 
    This leads to frustration, inefficiency, and wasted potential.
  `;
</script>

<section class="problem-section d-flex justify-content-center align-items-center">
  <div class=" text-center">
    <h2 class="section-title">{title}</h2>
    <h5 class="section-subtitle">{subtitle}</h5>
    <p class="section-content">{content}</p>
  </div>
</section>

<style>
  .problem-section {
    background-color: transparent;
    border-top: 2px solid #3b82f6;
    color: #ffffff;
    /* padding: 6rem 1rem; */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: #cccccc;
    margin-bottom: 2rem;
  }

  .section-content {
    font-size: 1.125rem;
    color: #aaaaaa;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
  }

  @media (min-width: 768px) {
    .section-title {
      font-size: 3rem;
    }

    .section-content {
      font-size: 1.25rem;
    }
  }
</style>
