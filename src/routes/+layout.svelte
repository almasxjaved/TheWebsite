<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let canvas;
  let ctx;
  let particles = [];

  const numParticles = 60;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = 1.5; 

    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 150, 255, 0.7)';
      ctx.shadowColor = 'rgba(0, 150, 255, 0.2)';
      ctx.shadowBlur = 5;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function drawConnections() {
    const maxDistance = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 150, 255, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.update();
      p.draw();
    }

    drawConnections();

    requestAnimationFrame(animate);
  }

  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');

    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  });
</script>

<style>
  canvas {
    position: fixed;
    inset: 0;
    z-index: -1;
    background: #000;
  }

  .layout-wrapper {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    /* padding: 2rem; */
    color: white;
  }
</style>

<canvas bind:this={canvas}></canvas>

<div class="layout-wrapper">
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>
