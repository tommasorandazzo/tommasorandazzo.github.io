<script>
  import fetchJson from "$lib/fetchJson"
	import { onMount } from "svelte";

  let data = $state({
    metatags: '',
    title: '',
    body: '',
  });

  onMount(async () => {
    const result = await fetchJson('/api/page/6');
    data = result[0];
  })
</script>

<svelte:head>
  {@html data.metatags}
</svelte:head>

<h1>{data.title}</h1>
<p>{@html data.body}</p>
