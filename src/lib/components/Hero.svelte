<script>
  function changeStyleOnMouseOver(elementId, style){
    let element = document.getElementById(elementId);
    element.style.setProperty = style
  }
</script>
<section
  class=" text-white py-4 d-flex"
  style="height: 80vh;background-color: #023E8A; align-items:center"
>
  <div class="container w-50" style=" margin-left: 64px;">
    <h1 class="display-11 fw-bold">
      Your Errands, Handled by Our Trusted Team.
    </h1>
    <h1 class="display-10 fw-bold">Sit Back — We’ll Take Care of It.</h1>
    <!-- <p class=" mt-3">
      Need to drop off a document, pick up groceries, or get something done in
      the city while you're miles away? Let our team handle it for you —
      quickly, reliably, and hassle-free.
    </p> -->
    <div class="mt-4 pe-3">
      <a
        href="/contact"
        id="letsGo"
        class="btn btn-outline-light rounded-pill border-2 font-semibold pe-5 text-white fs-5 text-decoration-none"
        onmouseover={changeStyleOnMouseOver(id,"color='#023E8A'; borderColor='#023E8A';")}
      >
        Let's Go
      </a>
    </div>
  </div>
  <div class=" w-50">djfkldsj</div>
</section>
