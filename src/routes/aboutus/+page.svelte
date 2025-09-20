<script>
  import AboutSections from "$lib/components/UIComponents/AboutSections.svelte";

  const aboutSections = [
    {
      title: "Who We Are",
      text: "We are a team committed to helping you with your everyday errands. Whether it’s picking up groceries, handling deliveries, or small day-to-day tasks, our mission is to save your time and reduce stress.",
      imgSrc: "/images/about1.png",
      imgAlt: "Who We Are",
      reverse: false
    },
    {
      title: "What We Do",
      text: "Our platform connects people who need errands done with our trusted in-house team. From posting a task to completing it, we make the process seamless, transparent, and reliable.",
      imgSrc: "/images/about2.png",
      imgAlt: "What We Do",
      reverse: true
    },
    {
      title: "Why Trust Us",
      text: "With a team of trained and verified helpers, we ensure that every task is carried out with professionalism and accountability. Our reputation is built on reliability, transparency, and consistent results — because your trust is our greatest asset.",
      imgSrc: "/images/about3.png",
      imgAlt: "Why Trust Us",
      reverse: false
    },
    {
      title: "Why It Matters",
      text: "We believe time is the most valuable resource. By helping with errands, we give families more moments together, professionals more focus for their careers, and individuals more freedom to do what truly makes them happy.",
      imgSrc: "/images/about4.png",
      imgAlt: "Why It Matters",
      reverse: true
    }
  ];
</script>

<section class="py-5 text-light">
  <div class="container">
    <AboutSections sections = {aboutSections}/>

    <!-- CTA -->
    <div class="text-center mt-4">
      <a href="/contact" class="btn btn-warning btn-lg fw-bold px-5 shadow rounded-pill">
        Get in Touch
      </a>
    </div>
  </div>
</section>
