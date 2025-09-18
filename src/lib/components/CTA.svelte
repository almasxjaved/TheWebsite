<script>
  import AppButton from "./UIComponents/AppButton.svelte";
</script>
<section class=" py-5">
  <div class="container text-center">
    <h3 class="fw-bold mb-3">Ready to Get Started?</h3>
    <p class="text-secondary">
      Join thousands already using TaskConnect to make life easier and earn
      extra income.
    </p>
    <div class="d-flex justify-content-center gap-3 mt-4">
      <AppButton
        href="/post-task"
        classes="btn-warning fw-bold px-4"
        label="Start Posting Tasks"
      />

      <AppButton
        href="/become-helper"
        classes="btn-outline-warning fw-bold px-4"
        label="Become a Helper"
      />
    </div>
  </div>
</section>
