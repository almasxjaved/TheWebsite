<script>
  import "../app.css"
  import Hero from '$lib/components/Hero.svelte';
  import Problem from '$lib/components/Problem.svelte';
  import Solution from '$lib/components/Solution.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import Wallet from '$lib/components/Wallet.svelte';
  import BusinessModel from '$lib/components/BusinessModel.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<main>
  <Navbar />
  <Hero />
  <Problem />
  <Solution />
  <HowItWorks />
  <Wallet />
  <BusinessModel />
  <CTA />
  <Footer />
</main>
