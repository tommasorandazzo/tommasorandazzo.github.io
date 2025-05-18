<script>
	import { page } from "$app/stores";
	import fetchJson from "$lib/fetchJson";
  import Slider from "@organisms/Slider/Slider.svelte"
	import { onMount } from "svelte";

  let data = $state({
    body: '',
    body_summary: '',
    field_attachments_export: [],
    field_attribution_export: [],
    field_categories: [],
    field_link_export: {},
    field_media: [],
    field_subtitle: '',
    field_tags: [],
    media_thumbnail: '',
    metatags: '<title>Drupal Contributions :: tommaso.cc</title>',
    nid: '',
    path: '',
    title: ''
  });

  onMount(async () => {
    const result = await fetchJson('/api/project/' + $page?.params?.slug);
    if (result[0]) data = result[0];
  });
</script>

<svelte:head>
  {@html data.metatags}
</svelte:head>

{#if data.field_media.length > 1}
  <Slider title={data.title + ' Media'} slides={data.field_media}></Slider>
{:else if data.field_media.length === 1}
  <div class="mt-1 mb-1 aspect-video">{@html data.field_media[0]}</div>
{/if}

<h1>{data.title}</h1>

