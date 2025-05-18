<script>
  import '../app.css';
  import Header from '@organisms/Header/Header.svelte';
  import Footer from '@organisms/Footer/Footer.svelte';
  const { children } = $props();
</script>

<a href="#main-content" class="visually-hidden">Skip to main content</a>

<Header />

<!-- Required ID for a11y skip link. -->
<main id="main-content" class="relative grow-1">
  {@render children()}
</main>

<Footer />
