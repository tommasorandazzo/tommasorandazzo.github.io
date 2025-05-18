<script>
  import './Slider.css';
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  const { children, slides, title, titleRef } = $props();
  const splideOptions = {
    type: 'slide',
    arrows: false,
    gap: 'var(--spacing)',
    drag: true,
    fixedWidth: '100%',
    classes: {
      slide: 'aspect-video',
      page: 'splide__pagination__page flex justify-center items-center w-1.5 h-1.5 p-1 aspect-square border-offwhite border-3 border-solid bg-transparent rounded-full before:content-[counter(pagination-num)] hover:bg-offwhite hover:text-primary-5 font-bold',
    },
  }

  if (title) splideOptions.label = title;
  if (titleRef) splideOptions.labelledby = titleRef.id;
</script>

<Splide hasTrack={false} options={splideOptions} class="mt-1 mb-1">
  <SplideTrack>
    {#if children}
      {@render children()}
    {:else if slides.length}
      {#each slides as slide}
        <SplideSlide class="aspect-video">
          {@html slide}
        </SplideSlide>
      {/each}
    {/if}
  </SplideTrack>
  <ul class="splide__pagination flex static! gap-0.5 justify-start! pr-2! pl-2! mt-0.5! mb-0.5!"></ul>
</Splide>
